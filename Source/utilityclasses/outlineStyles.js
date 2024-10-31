function applyOutlineStyles() {
    const outlineClasses = {
        ".outline-black": "2px solid black",
        ".outline-white": "2px solid white"
    };

    Object.entries(outlineClasses).forEach(([className, outlineValue]) => {
        document.querySelectorAll(className).forEach(element => {
            element.style.outline = outlineValue;
        });
    });
}

// Apply outline styles on page load
document.addEventListener("DOMContentLoaded", applyOutlineStyles);
