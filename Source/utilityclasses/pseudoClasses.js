function applyPseudoClasses() {
    // Define hover and focus classes with corresponding styles
    const hoverElements = document.querySelectorAll("[class*='hover-']");
    const focusElements = document.querySelectorAll("[class*='focus-']");

    hoverElements.forEach(element => {
        // Find classes that start with 'hover-' and remove 'hover-' to get base class name
        const hoverClasses = Array.from(element.classList)
            .filter(cls => cls.startsWith("hover-"))
            .map(cls => cls.replace("hover-", ""));

        element.addEventListener("mouseenter", () => {
            hoverClasses.forEach(cls => element.classList.add(cls));
        });

        element.addEventListener("mouseleave", () => {
            hoverClasses.forEach(cls => element.classList.remove(cls));
        });
    });

    focusElements.forEach(element => {
        // Find classes that start with 'focus-' and remove 'focus-' to get base class name
        const focusClasses = Array.from(element.classList)
            .filter(cls => cls.startsWith("focus-"))
            .map(cls => cls.replace("focus-", ""));

        element.addEventListener("focus", () => {
            focusClasses.forEach(cls => element.classList.add(cls));
        });

        element.addEventListener("blur", () => {
            focusClasses.forEach(cls => element.classList.remove(cls));
        });
    });
}

// Apply pseudo-class functionality on page load
document.addEventListener("DOMContentLoaded", applyPseudoClasses);
