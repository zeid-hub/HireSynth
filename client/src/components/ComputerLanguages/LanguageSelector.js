// import React from "react";
// import { LANGUAGE_VERSIONS } from "../../Constant";
// import "./LanguageSelector.css";

// const languages = Object.entries(LANGUAGE_VERSIONS);
// // const ACTIVE_COLOR = "blue";

// const LanguageSelector = ({ language, onSelect }) => {
//   return (
//     <div className="language-selector-container">
//       <p className="language-selector-title">Language:</p>
//       <div className="language-dropdown">
//         <button className="language-button">{language}</button>
//         {languages.map(([lang, version]) => (
//           <button
//             key={lang}
//             className={`language-option ${
//               lang === language ? "active-language" : ""
//             }`}
//             onClick={() => onSelect(lang)}
//           >
//             {lang}&nbsp;
//             <span style={{ color: "#718096", fontSize: "0.875rem" }}>
//               ({version})
//             </span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LanguageSelector;
