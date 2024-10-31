function applyHeightClasses() {
    const heightClasses = {
        ".h-0": "0px",
        ".h-1": "0.25rem",  // 4px
        ".h-2": "0.5rem",   // 8px
        ".h-3": "0.75rem",  // 12px
        ".h-4": "1rem",     // 16px
        ".h-5": "1.25rem",  // 20px
        ".h-6": "1.5rem",   // 24px
        ".h-8": "2rem",     // 32px
        ".h-10": "2.5rem",  // 40px
        ".h-12": "3rem",    // 48px
        ".h-16": "4rem",    // 64px
        ".h-20": "5rem",    // 80px
        ".h-24": "6rem",    // 96px
        ".h-32": "8rem",    // 128px
        ".h-40": "10rem",   // 160px
        ".h-48": "12rem",   // 192px
        ".h-56": "14rem",   // 224px
        ".h-64": "16rem",   // 256px
        ".h-auto": "auto",
        ".h-px": "1px",
        ".h-full": "100%",
        ".h-screen": "100vh",
        ".max-h-full": "100%",
        ".max-h-screen": "100vh",
        ".min-h-0": "0px",
        ".min-h-full": "100%",
        ".min-h-screen": "100vh",
        ".max-h-px": "1px"
    };

    Object.entries(heightClasses).forEach(([className, heightValue]) => {
        document.querySelectorAll(className).forEach(element => {
            element.style.height = heightValue;
        });
    });
}

// Apply height classes on page load
document.addEventListener('DOMContentLoaded', applyHeightClasses);
