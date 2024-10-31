function applyListClasses() {
    const listClasses = {
        ".list-disc": "disc",
        ".list-decimal": "decimal",
        ".list-inside": "inside",
        ".list-outside": "outside"
    };

    Object.entries(listClasses).forEach(([className, propertyValue]) => {
        document.querySelectorAll(className).forEach(element => {
            if (className.includes("list-inside") || className.includes("list-outside")) {
                element.style.listStylePosition = propertyValue;
            } else {
                element.style.listStyleType = propertyValue;
            }
        });
    });
}

// Apply list classes on page load
document.addEventListener("DOMContentLoaded", applyListClasses);
