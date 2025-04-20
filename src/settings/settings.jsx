import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../components/common_style.css";
import "./settings.css";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [popupSize, setPopupSize] = useState("small");
  const [sortOption, setSortOption] = useState("date-desc");
  const [activeTab, setActiveTab] = useState("settings");

  useEffect(() => {
    // chrome.storage.local.get([ "settings"], (result) => {
    //   if (result.settings !== undefined) {
    //     setDarkMode(result.settings.darkMode);
    //     if (result.settings.darkMode) {
    //       document.body.classList.add("dark-mode");
    //     }
    //     if (result.settings.popupSize) setPopupSize(result.settings.popupSize);
    //     if (result.settings.sortOption) setSortOption(result.settings.sortOption);
    //   }
    // });
  }, []);
  

  return (
    <div className="d-flex">
      <div className="settings-tabs">
        <div className="nav flex-column nav-pills">
          <button
            className={`nav-link ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            <i className="fas fa-cog"></i>
            Settings
          </button>
          <button
            className={`nav-link ${
              activeTab === "notes-detail" ? "active" : ""
            }`}
            onClick={() => setActiveTab("notes-detail")}
          >
            <i className="fas fa-sticky-note"></i>
            Notes Detail View
          </button>
          <button
            className={`nav-link ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            <i className="fas fa-info-circle"></i>
            About Us
          </button>
          <button
            className={`nav-link ${activeTab === "user-guide" ? "active" : ""}`}
            onClick={() => setActiveTab("user-guide")}
          >
            <i className="fas fa-question-circle"></i>
            User Guide
          </button>
         
        </div>

        <div
         className={`nav-link profile-section ${activeTab === "profile" ? "active" : ""}`}
         onClick={() => setActiveTab("profile")}
        >
          <i className="fas fa-user-circle"></i>
          Profile
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById("settings-target");
const root = createRoot(container);
root.render(<Settings />);
