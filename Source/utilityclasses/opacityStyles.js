function applyOpacityStyles() {
    const opacityClasses = {
        ".opacity-0": "0",
        ".opacity-10": "0.1",
        ".opacity-20": "0.2",
        ".opacity-30": "0.3",
        ".opacity-40": "0.4",
        ".opacity-50": "0.5",
        ".opacity-60": "0.6",
        ".opacity-70": "0.7",
        ".opacity-80": "0.8",
        ".opacity-90": "0.9",
        ".opacity-100": "1"
    };

    Object.entries(opacityClasses).forEach(([className, opacityValue]) => {
        document.querySelectorAll(className).forEach(element => {
            element.style.opacity = opacityValue;
        });
    });
}

// Apply opacity styles on page load
document.addEventListener("DOMContentLoaded", applyOpacityStyles);
