const widthStyles = {
    // Standard Widths
    "w-0": { width: "0" },
    "w-1": { width: "0.25rem" },
    "w-2": { width: "0.5rem" },
    "w-3": { width: "0.75rem" },
    "w-4": { width: "1rem" },
    "w-5": { width: "1.25rem" },
    "w-6": { width: "1.5rem" },
    "w-8": { width: "2rem" },
    "w-10": { width: "2.5rem" },
    "w-12": { width: "3rem" },
    "w-16": { width: "4rem" },
    "w-20": { width: "5rem" },
    "w-24": { width: "6rem" },
    "w-32": { width: "8rem" },
    "w-40": { width: "10rem" },
    "w-48": { width: "12rem" },
    "w-56": { width: "14rem" },
    "w-64": { width: "16rem" },
    "w-auto": { width: "auto" },
    "w-px": { width: "1px" },
    "w-full": { width: "100%" },
    "w-screen": { width: "100vw" },

    // Fractional Widths
    "w-1/2": { width: "50%" },
    "w-1/3": { width: "33.3333%" },
    "w-2/3": { width: "66.6667%" },
    "w-1/4": { width: "25%" },
    "w-2/4": { width: "50%" },
    "w-3/4": { width: "75%" },
    "w-1/5": { width: "20%" },
    "w-2/5": { width: "40%" },
    "w-3/5": { width: "60%" },
    "w-4/5": { width: "80%" },
    "w-1/6": { width: "16.6667%" },
    "w-2/6": { width: "33.3333%" },
    "w-3/6": { width: "50%" },
    "w-4/6": { width: "66.6667%" },
    "w-5/6": { width: "83.3333%" },
    "w-1/12": { width: "8.3333%" },
    "w-2/12": { width: "16.6667%" },
    "w-3/12": { width: "25%" },
    "w-4/12": { width: "33.3333%" },
    "w-5/12": { width: "41.6667%" },
    "w-6/12": { width: "50%" },
    "w-7/12": { width: "58.3333%" },
    "w-8/12": { width: "66.6667%" },
    "w-9/12": { width: "75%" },
    "w-10/12": { width: "83.3333%" },
    "w-11/12": { width: "91.6667%" },

    // Max Widths
    "max-w-xs": { maxWidth: "20rem" },
    "max-w-sm": { maxWidth: "24rem" },
    "max-w-md": { maxWidth: "28rem" },
    "max-w-lg": { maxWidth: "32rem" },
    "max-w-xl": { maxWidth: "36rem" },
    "max-w-2xl": { maxWidth: "42rem" },
    "max-w-3xl": { maxWidth: "48rem" },
    "max-w-4xl": { maxWidth: "56rem" },
    "max-w-5xl": { maxWidth: "64rem" },
    "max-w-6xl": { maxWidth: "72rem" },
    "max-w-7xl": { maxWidth: "80rem" },
    "max-w-full": { maxWidth: "100%" },
    "max-w-screen-sm": { maxWidth: "640px" },
    "max-w-screen-md": { maxWidth: "768px" },
    "max-w-screen-lg": { maxWidth: "1024px" },
    "max-w-screen-xl": { maxWidth: "1280px" },
    "max-w-screen-2xl": { maxWidth: "1536px" },
    "max-w-none": { maxWidth: "none" },
    
    // Min Widths
    "min-w-0": { minWidth: "0" },
    "min-w-full": { minWidth: "100%" },
    "min-w-max": { minWidth: "max-content" },
    "min-w-min": { minWidth: "min-content" },
};

// Function to apply width utility styles
function applyWidthStyles() {
    document.querySelectorAll("[class]").forEach(element => {
        element.classList.forEach(cls => {
            if (widthStyles[cls]) {
                Object.assign(element.style, widthStyles[cls]);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applyWidthStyles);
