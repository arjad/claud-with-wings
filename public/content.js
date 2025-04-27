function applyFullScreenStyles(enable) {
  const text_box1 = document.querySelector('div.mx-auto.top-5.w-full.z-10');
  if (text_box1) {
    if (enable) {
      text_box1.classList.remove("max-w-2xl");
    } else {
      text_box1.classList.add("max-w-2xl");
    }
  }

  const element = document.querySelector('.flex-1.flex.flex-col.gap-3.px-4.mx-auto.w-full.pt-1');
  if (element) {
    if (enable) {
      element.classList.remove("max-w-3xl");
    } else {
      element.classList.add("max-w-3xl");
    }
  }

  const text_box = document.querySelector('.flex.flex-1.flex-col.h-full.md\\:px-2.mx-auto.relative.w-full');
  if (text_box) {
    if (enable) {
      text_box.classList.remove("max-w-3xl");
    } else {
      text_box.classList.add("max-w-3xl");
    }
  }
}

function applyBiggerInputStyles(enable) {
  const targetDiv = document.querySelector('div[aria-label="Write your prompt to Claude"]');
  if (targetDiv) {
    targetDiv.style.height = enable ? "250px" : ""; // reset to default
  }

  const innerDiv = document.querySelector('div[aria-label="Write your prompt to Claude"] div');
  if (innerDiv) {
    if (enable) {
      innerDiv.classList.remove("max-w-[60ch]");
    } else {
      innerDiv.classList.add("max-w-[60ch]");
    }
  }
}

function applySettings(settings) {
  applyFullScreenStyles(settings.view === "full_screen");
  applyBiggerInputStyles(!!settings.bigger_input);
}

function initStyles() {
  chrome.storage.sync.get('claud_settings', (data) => {
    applySettings(data.claud_settings || {});
  });

  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "sync" && changes.claud_settings) {
      const newSettings = changes.claud_settings.newValue || {};
      applySettings(newSettings);
    }
  });
}

window.addEventListener("load", initStyles);
