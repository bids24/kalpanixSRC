const typographyStyles = {
    // Font Weights
    "font-extralight": { fontWeight: 200 },

    // Text Sizes
    "text-7xl": { fontSize: "4.5rem", lineHeight: "1" },
    "text-8xl": { fontSize: "6rem", lineHeight: "1" },
    "text-9xl": { fontSize: "8rem", lineHeight: "1" },
};

// Apply typography styles
function applyTypographyStyles() {
    document.querySelectorAll("[class]").forEach(element => {
        element.classList.forEach(cls => {
            if (typographyStyles[cls]) {
                Object.assign(element.style, typographyStyles[cls]);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applyTypographyStyles);
