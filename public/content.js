window.addEventListener("load", () => {
  const ok = document.querySelector('div.mx-auto.top-5.w-full.z-10');
  if (ok) {
    ok.classList.remove("max-w-2xl");
  }
  const targetDiv = document.querySelector('div[aria-label="Write your prompt to Claude"]');
  if (targetDiv) {
    targetDiv.style.height = "250px";
  }
  const okk = document.querySelector('div[aria-label="Write your prompt to Claude"] div');
  if (okk) {
      okk.classList.remove("max-w-[60ch]");
  }
});
