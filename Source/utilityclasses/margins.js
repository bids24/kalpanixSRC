function applyMarginClasses() {
    const marginClasses = {
        // Basic margin classes
        ".m-0": "0",
        ".m-1": "0.25rem",
        ".m-2": "0.5rem",
        ".m-3": "0.75rem",
        ".m-4": "1rem",
        ".m-5": "1.25rem",
        ".m-6": "1.5rem",
        ".m-8": "2rem",
        ".m-10": "2.5rem",
        ".m-12": "3rem",
        ".m-16": "4rem",
        ".m-20": "5rem",
        ".m-24": "6rem",
        ".m-32": "8rem",
        ".m-40": "10rem",
        ".m-48": "12rem",
        ".m-56": "14rem",
        ".m-64": "16rem",
        ".m-auto": "auto",
        ".m-px": "1px",
        // Margin direction classes
        ".mt-0": "0",
        ".mt-1": "0.25rem",
        ".mb-0": "0",
        ".mr-0": "0",
        ".ml-0": "0",
        // Add all other directional classes following the same pattern as above...
        // Negative margin classes
        ".-m-1": "-0.25rem",
        ".-m-2": "-0.5rem",
        // Add all other negative classes following the same pattern...
        // Margin x-axis and y-axis classes
        ".mx-0": "0",
        ".my-0": "0",
        // Add additional classes as needed...
    };

    Object.entries(marginClasses).forEach(([className, value]) => {
        document.querySelectorAll(className).forEach(element => {
            const direction = className.slice(1, 2); // e.g., "t" for ".mt-*"
            switch (direction) {
                case "t":
                    element.style.marginTop = value;
                    break;
                case "b":
                    element.style.marginBottom = value;
                    break;
                case "r":
                    element.style.marginRight = value;
                    break;
                case "l":
                    element.style.marginLeft = value;
                    break;
                case "x":
                    element.style.marginLeft = value;
                    element.style.marginRight = value;
                    break;
                case "y":
                    element.style.marginTop = value;
                    element.style.marginBottom = value;
                    break;
                default:
                    element.style.margin = value;
            }
        });
    });
}

// Apply margin classes on page load
document.addEventListener("DOMContentLoaded", applyMarginClasses);
