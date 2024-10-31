function applyPaddingStyles() {
    const paddingValues = {
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "11": "2.75rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "56": "14rem",
        "64": "16rem",
        "px": "1px"
    };

    Object.entries(paddingValues).forEach(([key, paddingValue]) => {
        // Apply to all sides
        document.querySelectorAll(`.p-${key}`).forEach(el => el.style.padding = paddingValue);

        // Apply individually
        document.querySelectorAll(`.pb-${key}`).forEach(el => el.style.paddingBottom = paddingValue);
        document.querySelectorAll(`.pr-${key}`).forEach(el => el.style.paddingRight = paddingValue);
        document.querySelectorAll(`.pt-${key}`).forEach(el => el.style.paddingTop = paddingValue);
        document.querySelectorAll(`.pl-${key}`).forEach(el => el.style.paddingLeft = paddingValue);

        // Apply to x-axis and y-axis
        document.querySelectorAll(`.px-${key}`).forEach(el => {
            el.style.paddingLeft = paddingValue;
            el.style.paddingRight = paddingValue;
        });
        document.querySelectorAll(`.py-${key}`).forEach(el => {
            el.style.paddingTop = paddingValue;
            el.style.paddingBottom = paddingValue;
        });
    });
}

// Apply padding styles on page load
document.addEventListener("DOMContentLoaded", applyPaddingStyles);
