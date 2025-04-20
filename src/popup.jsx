import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";
import "./components/common_style.css"
  
function Popup() {
 
  useEffect(() => {
    // chrome.storage.local.get(["notes", "settings"], (result) => {
    //   if (result.settings !== undefined) {
    //     if (result.settings.darkMode) {
    //       document.body.classList.add("dark-mode");
    //     }
    //     if (result.settings.popupSize) {
    //       document.body.setAttribute("data-size", result.settings.popupSize);
    //     }
    //     setsortOption(result.settings.sortOption);
    //   }
    //   if (result.notes) {
    //     setNotes(result.notes);
    //   }
    // });
  }, []);

  const openSettingsPage = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("settings.html") });
  };
  
  return (
    <div className="container-fluid p-0">
      <nav className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <h6 className="d-flex align-items-center mb-0">
            <img src="assets/logo.png" width="22" height="22" alt="Note Icon" />
            <span>
              Claude with wings
            </span>
          </h6>
        </div>
      </nav>
    </div>
  );
}

const container = document.getElementById("popup-target");
const root = createRoot(container);
root.render(<Popup />);
