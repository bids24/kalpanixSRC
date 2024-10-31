const transformStyles = {
    // General Transform
    "transform": { transform: "transform" },
    "transform-none": { transform: "none" },
    "transform-gpu": { transform: "translateZ(0)" },

    // Transform Origin
    "origin-center": { transformOrigin: "center" },
    "origin-top": { transformOrigin: "top" },
    "origin-top-right": { transformOrigin: "top right" },
    "origin-right": { transformOrigin: "right" },
    "origin-bottom-right": { transformOrigin: "bottom right" },
    "origin-bottom": { transformOrigin: "bottom" },
    "origin-bottom-left": { transformOrigin: "bottom left" },
    "origin-left": { transformOrigin: "left" },
    "origin-top-left": { transformOrigin: "top left" },

    // Translation (X and Y axes)
    "translate-x-0": { transform: "translateX(0)" },
    "translate-x-1": { transform: "translateX(0.25rem)" },
    "translate-x-2": { transform: "translateX(0.5rem)" },
    // Add similar entries for other translate-x-* classes
    "translate-y-0": { transform: "translateY(0)" },
    "translate-y-1": { transform: "translateY(0.25rem)" },
    "translate-y-2": { transform: "translateY(0.5rem)" },
    // Add similar entries for other translate-y-* classes
    "-translate-x-1": { transform: "translateX(-0.25rem)" },
    // Add similar entries for other -translate-x-* and -translate-y-* classes

    // Scaling (X and Y axes)
    "scale-0": { transform: "scale(0)" },
    "scale-50": { transform: "scale(0.5)" },
    "scale-75": { transform: "scale(0.75)" },
    "scale-90": { transform: "scale(0.9)" },
    "scale-100": { transform: "scale(1)" },
    "scale-110": { transform: "scale(1.1)" },
    // Add similar entries for scale-x-* and scale-y-* classes

    // Rotation
    "rotate-0": { transform: "rotate(0deg)" },
    "rotate-45": { transform: "rotate(45deg)" },
    "rotate-90": { transform: "rotate(90deg)" },
    "rotate-180": { transform: "rotate(180deg)" },
    "-rotate-45": { transform: "rotate(-45deg)" },
    // Add similar entries for other rotate-* classes

    // Skewing (X and Y axes)
    "skew-x-0": { transform: "skewX(0deg)" },
    "skew-x-3": { transform: "skewX(3deg)" },
    "skew-x-6": { transform: "skewX(6deg)" },
    "skew-x-12": { transform: "skewX(12deg)" },
    "skew-y-0": { transform: "skewY(0deg)" },
    "skew-y-3": { transform: "skewY(3deg)" },
    "skew-y-6": { transform: "skewY(6deg)" },
    // Add similar entries for -skew-x-* and -skew-y-* classes
};

// Apply transform styles
function applyTransformStyles() {
    document.querySelectorAll("[class]").forEach(element => {
        element.classList.forEach(cls => {
            if (transformStyles[cls]) {
                Object.assign(element.style, transformStyles[cls]);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applyTransformStyles);
