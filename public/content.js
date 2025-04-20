window.addEventListener("load", () => {
    
    const ok = document.querySelector('div.mx-auto.top-5.w-full.z-10');
    ok.classList.remove("max-w-2xl");

    const targetDiv = document.querySelector('div[aria-label="Write your prompt to Claude"]');
    targetDiv.style.height = "250px";

    const okk = document.querySelector('div[aria-label="Write your prompt to Claude"] div');
    okk.classList.remove("max-w-[60ch]");

});
