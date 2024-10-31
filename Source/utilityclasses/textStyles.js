const textStyles = {
    // Antialiasing
    "antialiased": { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" },
    "subpixel-antialiased": { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" },

    // Text Opacity
    "text-opacity-0": { opacity: "0" },
    "text-opacity-25": { opacity: "0.25" },
    "text-opacity-50": { opacity: "0.5" },
    "text-opacity-75": { opacity: "0.75" },
    "text-opacity-100": { opacity: "1" },

    // Text Breaks
    "break-normal": { wordBreak: "normal", overflowWrap: "normal" },
    "break-words": { overflowWrap: "break-word" },
    "break-all": { wordBreak: "break-all" },
    "truncate": { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" },

    // Text Transform
    "uppercase": { textTransform: "uppercase" },
    "lowercase": { textTransform: "lowercase" },
    "capitalize": { textTransform: "capitalize" },
    "normal-case": { textTransform: "none" },

    // Line Height
    "leading-none": { lineHeight: "1" },
    "leading-tight": { lineHeight: "1.25" },
    "leading-snug": { lineHeight: "1.375" },
    "leading-normal": { lineHeight: "1.5" },
    "leading-relaxed": { lineHeight: "1.625" },
    "leading-loose": { lineHeight: "2" },
    "leading-3": { lineHeight: ".75rem" },
    "leading-4": { lineHeight: "1rem" },
    "leading-5": { lineHeight: "1.25rem" },
    "leading-6": { lineHeight: "1.5rem" },
    "leading-7": { lineHeight: "1.75rem" },
    "leading-8": { lineHeight: "2rem" },
    "leading-9": { lineHeight: "2.25rem" },
    "leading-10": { lineHeight: "2.5rem" },

    // Decoration
    "underline": { textDecoration: "underline" },
    "line-through": { textDecoration: "line-through" },
    "no-underline": { textDecoration: "none" },

    // Font Weight
    "font-hairline": { fontWeight: "100" },
    "font-thin": { fontWeight: "200" },
    "font-light": { fontWeight: "300" },
    "font-normal": { fontWeight: "400" },
    "font-medium": { fontWeight: "500" },
    "font-semibold": { fontWeight: "600" },
    "font-bold": { fontWeight: "700" },
    "font-extrabold": { fontWeight: "800" },
    "font-black": { fontWeight: "900" },

    // Font Size
    "text-xs": { fontSize: "0.75rem" },
    "text-sm": { fontSize: "0.875rem" },
    "text-base": { fontSize: "1rem" },
    "text-lg": { fontSize: "1.125rem" },
    "text-xl": { fontSize: "1.25rem" },
    "text-2xl": { fontSize: "1.5rem" },
    "text-3xl": { fontSize: "1.875rem" },
    "text-4xl": { fontSize: "2.25rem" },
    "text-5xl": { fontSize: "3rem" },
    "text-6xl": { fontSize: "4rem" },

    // Font Family
    "font-sans": { fontFamily: "sans-serif" },
    "font-serif": { fontFamily: "serif" },
    "font-mono": { fontFamily: "monospace" },

    // Text Alignment
    "text-left": { textAlign: "left" },
    "text-center": { textAlign: "center" },
    "text-right": { textAlign: "right" },
    "text-justify": { textAlign: "justify" },

    // Font Style
    "italic": { fontStyle: "italic" },
    "not-italic": { fontStyle: "normal" },

    // Whitespace Handling
    "whitespace-normal": { whiteSpace: "normal" },
    "whitespace-nowrap": { whiteSpace: "nowrap" },
    "whitespace-pre": { whiteSpace: "pre" },

    // Letter Spacing
    "tracking-tighter": { letterSpacing: "-0.05em" },
    "tracking-tight": { letterSpacing: "-0.025em" },
    "tracking-normal": { letterSpacing: "0" },
    "tracking-wide": { letterSpacing: "0.025em" },
    "tracking-wider": { letterSpacing: "0.05em" },
    "tracking-widest": { letterSpacing: "0.1em" }
};

// Apply styles by class name
function applyTextStyles() {
    document.querySelectorAll("[class]").forEach(element => {
        element.classList.forEach(cls => {
            if (textStyles[cls]) {
                Object.assign(element.style, textStyles[cls]);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applyTextStyles);
