import React from "react";
import "./Companies.css"

function Companies (){

    const location = [
        {
          id: 1,
          name: "Liverpool, London",
          Villas: "12 TechCompanies",
          Apartments: " 10 SMEs (Small and Medium-sized Enterprises)",
          Offices: "07 Marketing Agencies",
          cover: "https://media.istockphoto.com/id/1190008056/photo/liverpool-albert-dock-sunset-river-mersey.webp?b=1&s=170667a&w=0&k=20&c=p6cePQ8RhF5Qo_8uNjkhVxl6zzi3KddJnccfVLpjAiw=",
        },
        {
          id: 2,
          name: "NewYork, United States",
          Villas: "12 TechCompanies",
          Apartments: " 10 SMEs (Small and Medium-sized Enterprises)",
          Offices: "07 Marketing Agencies",
          cover: "https://media.istockphoto.com/id/1454217037/photo/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.webp?b=1&s=170667a&w=0&k=20&c=ILAXN43qdlPTT8ljbbT7Hwp95AQJxKTNygWhsQ3qzO4=",
        },
        {
          id: 3,
          name: "Montreal, Canada",
          Villas: "12 TechCompanies",
          Apartments: " 10 SMEs (Small and Medium-sized Enterprises)",
          Offices: "07 Marketing Agencies",
          cover: "https://media.istockphoto.com/id/1002986578/photo/montreal-city-montage.webp?b=1&s=170667a&w=0&k=20&c=J6NbQwXO1sr1MNw_Dd_37Ax5rWAAOgAgqTpSVibi_Lg=",
        },
        {
          id: 4,
          name: "California, USA",
          Villas: "12 TechCompanies",
          Apartments: " 10 SMEs (Small and Medium-sized Enterprises)",
          Offices: "07 Marketing Agencies",
          cover: "https://media.istockphoto.com/id/1369657122/photo/beach-coastline.webp?b=1&s=170667a&w=0&k=20&c=VkEOYpOvjj-f5pg0fbgs8x3i-uMF3Ktv4TklLqMjrSc=",
        },
        {
          id: 5,
          name: "Nairobi, Kenya",
          Villas: "12 TechCompanies",
          Apartments: " 10 SMEs (Small and Medium-sized Enterprises)",
          Offices: "07 Marketing Agencies",
          cover: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.webp?b=1&s=170667a&w=0&k=20&c=D6EsxzQx2Xes4DwGDwhlr64jWhbol-8-wwYkUShzuFA=",
        },
        {
            id: 6,
            name: "New Delhi, India",
            Villas: "12 TechCompanies",
            Apartments: " 10 SMEs (Small and Medium-sized Enterprises)",
            Offices: "07 Marketing Agencies",
            cover: "https://media.istockphoto.com/id/1482750266/photo/the-lotus-temple-is-located-in-new-delhi-india.webp?b=1&s=170667a&w=0&k=20&c=-_4MGXLfHB_KJXjCR9IFUKSdXa0waib6VDYoXVC4gEE=",
          },
      ]

    return(
        <div className="company-outer-container">
            <div className='company-container'>
                <h1 className="company-h1">Explore By Location</h1>
                <p className="company-par1">At HiResynth, we're proud to be the trusted choice for recruitment by numerous global companies. With offices spanning across various corners of the world, our platform connects talent with opportunities worldwide. Explore the pictures below to discover the locations where these esteemed companies reside</p>
                <div className='company-grid3-mtop'>
                    {location.map((item, index) => (
                    <div className='company-box' key={index}>
                        <img src={item.cover} alt='' className="company-image"/>
                        <div className='company-overlay'>
                            <h5 className="company-h5">{item.name}</h5>
                            <p className="company-par2">
                                <label className="company-villas">{item.Villas}</label>
                                <label className="company-offices">{item.Offices}</label>
                                <label className="company-appartments">{item.Apartments}</label>
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Companies;