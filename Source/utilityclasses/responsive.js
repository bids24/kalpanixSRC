function applyResponsiveClasses() {
    const responsiveElements = document.querySelectorAll("[class*='sm:'], [class*='md:'], [class*='lg:'], [class*='xl:']");

    // Define breakpoints
    const breakpoints = {
        sm: window.matchMedia("(min-width: 640px)"),
        md: window.matchMedia("(min-width: 768px)"),
        lg: window.matchMedia("(min-width: 1024px)"),
        xl: window.matchMedia("(min-width: 1280px)")
    };

    // Function to apply classes based on screen width
    function updateClasses() {
        responsiveElements.forEach(element => {
            // Reset classes
            Array.from(element.classList).forEach(cls => {
                if (cls.includes(":")) {
                    element.classList.remove(cls.split(":")[1]);
                }
            });

            // Apply classes based on breakpoints
            Object.entries(breakpoints).forEach(([key, mediaQuery]) => {
                if (mediaQuery.matches) {
                    // Find classes that start with `sm:`, `md:`, `lg:`, or `xl:` and apply them
                    Array.from(element.classList)
                        .filter(cls => cls.startsWith(`${key}:`))
                        .forEach(cls => {
                            element.classList.add(cls.split(":")[1]);
                        });
                }
            });
        });
    }

    // Add event listeners for each breakpoint
    Object.values(breakpoints).forEach(mediaQuery => {
        mediaQuery.addListener(updateClasses);
    });

    // Initial update
    updateClasses();
}

// Apply responsive classes on page load
document.addEventListener("DOMContentLoaded", applyResponsiveClasses);
