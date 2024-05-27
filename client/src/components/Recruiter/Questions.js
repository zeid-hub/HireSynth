import React, { useState, useEffect } from "react";
import "./Questions.css";
import AdminSidebar from "../SideBar/AdminSidebar";

function Questions() {
    const [challenges, setChallenges] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        languages: "",
        correct_answer: ""
    });
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedChallenge, setSelectedChallenge] = useState(null);

    useEffect(() => {
        fetchChallenges();
    }, []);

    const fetchChallenges = async () => {
        try {
            const response = await fetch('https://hiresynth-backend.onrender.com/code_challenges');
            if (!response.ok) {
                throw new Error('Failed to fetch challenges');
            }
            const data = await response.json();
            setChallenges(data);
        } catch (error) {
            console.error('Error fetching challenges:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://hiresynth-backend.onrender.com/code_challenges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to create challenge');
            }
            const newChallenge = await response.json();
            setChallenges([...challenges, newChallenge]);
            setFormData({
                title: "",
                description: "",
                languages: "",
                correct_answer: ""
            });
        } catch (error) {
            console.error('Error creating challenge:', error);
        }
    };

    const handleEdit = async (id) => {
        const challengeToEdit = challenges.find(challenge => challenge.id === id);
        setFormData({
            title: challengeToEdit.title,
            description: challengeToEdit.description,
            languages: challengeToEdit.languages,
            correct_answer: challengeToEdit.correct_answer
        });
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://hiresynth-backend.onrender.com/code_challenges/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete challenge');
            }
            setChallenges(challenges.filter(challenge => challenge.id !== id));
        } catch (error) {
            console.error('Error deleting challenge:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleViewChallenge = (challenge) => {
        setSelectedChallenge(selectedChallenge === challenge ? null : challenge);
    };

    const handleLanguageFilter = (language) => {
        setSelectedLanguage(selectedLanguage === language ? null : language);
    };

    const uniqueLanguages = [...new Set(challenges.map(challenge => challenge.languages))];

    return (
        <div className="question-main-div">
            <div className="admin-sidebar-question">
                <AdminSidebar />
            </div>
            <div className="question-main-content">
                <div className="question-and-button">
                    <h1 className="question-h1">Set Your Questions Here</h1>
                </div>
                <form className="manage-question-form" >
                    <label className="question-name">Question Name: </label>
                    <input 
                        className="name-input"
                        type="text" 
                        placeholder="Name of my Question"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <label className="question-description">Question Description: </label>
                    <input
                        className="description-input"
                        type="text"
                        placeholder="Set Your Question"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <label className="question-language">Language Type: </label>
                    <input
                        className="language-input"
                        type="text"
                        placeholder="Set Your Language"
                        name="languages"
                        value={formData.languages}
                        onChange={handleChange}
                    />
                    <label className="question-answer"> Correct Answer: </label>
                    <input
                        className="answer-input"
                        type="text"
                        placeholder="Place Your Correct Answer"
                        name="correct_answer"
                        value={formData.correct_answer}
                        onChange={handleChange}
                    />
                </form>
                <button type="submit" className="create-button-question" onClick={handleSubmit}>Create</button>
                <div className="fetched-question">
                    <h1 className="fetched-question-h1">Available Questions</h1>
                    <h3 className="fetched-question-h3">Filter By Languages</h3>
                    <div className="language-filters">
                        {uniqueLanguages.map(language => (
                            <button
                                key={language}
                                className={`language-filter ${selectedLanguage === language ? 'selected' : ''}`}
                                onClick={() => handleLanguageFilter(language)}
                            >
                                {language}
                            </button>
                        ))}
                    </div>
                    {selectedLanguage && (
                        <>
                            <h2 className="selected-language-title">Selected Language: {selectedLanguage}</h2>
                            {challenges
                                .filter(challenge => challenge.languages === selectedLanguage)
                                .map(challenge => (
                                    <div key={challenge.id} className="challenge-id">
                                        <h3 className="challenge-title">TITLE: {challenge.title}</h3>
                                        <button className="view-button" onClick={() => handleViewChallenge(challenge)}>
                                            {selectedChallenge === challenge ? "Hide" : "View"}
                                        </button>
                                        {selectedChallenge === challenge && (
                                            <div className="challenge-details">
                                                <p className="challenge-description">QUESTION :{challenge.description}</p>
                                                <h6 className="challenge-answer">ANSWER :{challenge.correct_answer}</h6>
                                                <div className="edit-delete-button">
                                                    <button className="edit-button" onClick={() => handleEdit(challenge.id)}>Edit</button>
                                                    <button className="delete-button" onClick={() => handleDelete(challenge.id)}>Delete</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Questions;
