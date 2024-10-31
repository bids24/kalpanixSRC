const utilityStyles = {
    // Cursor Styles
    "cursor-auto": { cursor: "auto" },
    "cursor-default": { cursor: "default" },
    "cursor-move": { cursor: "move" },
    "cursor-pointer": { cursor: "pointer" },
    "cursor-text": { cursor: "text" },
    "cursor-wait": { cursor: "wait" },
    "cursor-not-allowed": { cursor: "not-allowed" },

    // Placeholder Colors (using pseudo-elements)
    "::placeholder": {
        "placeholder-transparent": { color: "transparent" },
        "placeholder-current": { color: "currentColor" },
        "placeholder-black": { color: "#000000" },
        "placeholder-white": { color: "#ffffff" },
        "placeholder-gray-600": { color: "#4B5563" },
        "placeholder-red-600": { color: "#DC2626" },
        "placeholder-blue-600": { color: "#2563EB" },
        "placeholder-opacity-50": { opacity: "0.5" },
        // Additional color and opacity values here
    },

    // Overflow
    "overflow-hidden": { overflow: "hidden" },
    "overflow-auto": { overflow: "auto" },
    "overflow-scroll": { overflow: "scroll" },
    "overflow-x-hidden": { overflowX: "hidden" },
    "overflow-y-auto": { overflowY: "auto" },

    // Pointer Events
    "pointer-events-none": { pointerEvents: "none" },
    "pointer-events-auto": { pointerEvents: "auto" },

    // Resize
    "resize": { resize: "both" },
    "resize-none": { resize: "none" },
    "resize-y": { resize: "vertical" },
    "resize-x": { resize: "horizontal" },

    // Text Selection
    "select-none": { userSelect: "none" },
    "select-text": { userSelect: "text" },
    "select-all": { userSelect: "all" },
    "select-auto": { userSelect: "auto" },

    // Outline
    "outline-none": { outline: "none" },

    // Appearance
    "appearance-none": { appearance: "none" },
};

// Apply utility styles function
function applyUtilityStyles() {
    document.querySelectorAll("[class]").forEach(element => {
        element.classList.forEach(cls => {
            if (utilityStyles[cls]) {
                Object.assign(element.style, utilityStyles[cls]);
            } else if (utilityStyles["::placeholder"][cls]) {
                // Apply placeholder-specific styles
                element.style.setProperty("::placeholder", utilityStyles["::placeholder"][cls]);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applyUtilityStyles);
