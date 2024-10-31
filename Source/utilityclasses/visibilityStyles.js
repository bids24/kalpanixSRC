const visibilityStyles = {
    // Opacity Levels
    "opacity-100": { opacity: "1" },
    "opacity-75": { opacity: "0.75" },
    "opacity-50": { opacity: "0.5" },
    "opacity-25": { opacity: "0.25" },
    "opacity-0": { opacity: "0" },

    // Visibility
    "visible": { visibility: "visible" },
    "invisible": { visibility: "hidden" },

    // Screen Reader Only
    "sr-only": {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: "0",
    },
    // Not Screen Reader Only (restore normal visibility)
    "not-sr-only": {
        position: "static",
        width: "auto",
        height: "auto",
        padding: "0",
        margin: "0",
        overflow: "visible",
        clip: "auto",
        whiteSpace: "normal",
    }
};

// Function to apply visibility utility styles
function applyVisibilityStyles() {
    document.querySelectorAll("[class]").forEach(element => {
        element.classList.forEach(cls => {
            if (visibilityStyles[cls]) {
                Object.assign(element.style, visibilityStyles[cls]);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applyVisibilityStyles);
