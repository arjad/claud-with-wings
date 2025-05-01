function applyFullScreenStyles(enable) {
  const text_box1 = document.querySelector('div.mx-auto.top-5.w-full.z-10');
  if (text_box1) {
    text_box1.classList.toggle("max-w-2xl", !enable);
  }

  const element = document.querySelector('.flex-1.flex.flex-col.gap-3.px-4.mx-auto.w-full.pt-1');
  if (element) {
    element.classList.toggle("max-w-3xl", !enable);
  }

  const text_box = document.querySelector('.flex.flex-1.flex-col.h-full.md\\:px-2.mx-auto.relative.w-full');
  if (text_box) {
    text_box.classList.toggle("max-w-3xl", !enable);
  }
}

function applyBiggerInputStyles(enable) {
  const targetDiv = document.querySelector('div[aria-label="Write your prompt to Claude"]');
  if (targetDiv) {
    targetDiv.style.height = enable ? "250px" : "";
  }

  const innerDiv = document.querySelector('div[aria-label="Write your prompt to Claude"] div');
  if (innerDiv) {
    innerDiv.classList.toggle("max-w-[60ch]", !enable);
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
}

// Watch for DOM changes to reapply styles
function observeDOMChanges() {
  const observer = new MutationObserver(() => {
    chrome.storage.sync.get('claud_settings', (data) => {
      applySettings(data.claud_settings || {});
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// Listen for changes in settings
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "sync" && changes.claud_settings) {
    const newSettings = changes.claud_settings.newValue || {};
    applySettings(newSettings);
  }
});

window.addEventListener("load", () => {
  initStyles();
  observeDOMChanges();
});
