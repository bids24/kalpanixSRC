function applyNumericStyles() {
    const numericClasses = {
        ".lining-nums": "lining-nums",
        ".normal-nums": "normal",
        ".oldstyle-nums": "oldstyle-nums",
        ".stacked-fractions": "stacked-fractions"
    };

    Object.entries(numericClasses).forEach(([className, style]) => {
        document.querySelectorAll(className).forEach(element => {
            element.style.fontVariantNumeric = style;
        });
    });
}

// Apply numeric styles on page load
document.addEventListener("DOMContentLoaded", applyNumericStyles);
