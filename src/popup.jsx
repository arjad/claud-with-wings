import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";
import "./components/common_style.css";

function Popup() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isBiggerInput, setIsBiggerInput] = useState(false);

  useEffect(() => {
    chrome.storage.sync.get(["claud_settings"], (result) => {
      const settings = result.claud_settings || {};
      if (settings.view === "full_screen") {
        setIsFullScreen(true);
      }
      if (settings.bigger_input) {
        setIsBiggerInput(true);
      }
    });
  }, []);

  const handleFullScreenChange = (e) => {
    const checked = e.target.checked;
    setIsFullScreen(checked);

    chrome.storage.sync.get(["claud_settings"], (result) => {
      const updatedSettings = { ...result.claud_settings };
      if (checked) {
        updatedSettings.view = "full_screen";
      } else {
        delete updatedSettings.view;
      }

      if (Object.keys(updatedSettings).length > 0) {
        chrome.storage.sync.set({ claud_settings: updatedSettings });
      } else {
        chrome.storage.sync.remove("claud_settings");
      }
    });
  };

  const handleBiggerInputChange = (e) => {
    const checked = e.target.checked;
    setIsBiggerInput(checked);

    chrome.storage.sync.get(["claud_settings"], (result) => {
      const updatedSettings = { ...result.claud_settings };
      if (checked) {
        updatedSettings.bigger_input = true;
      } else {
        delete updatedSettings.bigger_input;
      }

      if (Object.keys(updatedSettings).length > 0) {
        chrome.storage.sync.set({ claud_settings: updatedSettings });
      } else {
        chrome.storage.sync.remove("claud_settings");
      }
    });
  };

  const openSettingsPage = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("settings.html") });
  };

  return (
    <div className="container-fluid p-0">
      <nav className="d-flex align-items-center justify-content-between mb-3">
        <h6 className="d-flex align-items-center mb-0">
          <img className="mr-3" src="assets/logo.png" width="22" height="22" alt="Note Icon" />
          <span>Claude with wings</span>
        </h6>
      </nav>

      <div className="form-check form-switch mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="full-screen-toggle"
          checked={isFullScreen}
          onChange={handleFullScreenChange}
        />
        <label className="form-check-label" htmlFor="full-screen-toggle">
          Enable Full Screen
        </label>
      </div>

      <div className="form-check form-switch mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="bigger-input-toggle"
          checked={isBiggerInput}
          onChange={handleBiggerInputChange}
        />
        <label className="form-check-label" htmlFor="bigger-input-toggle">
          Enable Bigger Input Text Box
        </label>
      </div>
    </div>
  );
}

const container = document.getElementById("popup-target");
const root = createRoot(container);
root.render(<Popup />);
