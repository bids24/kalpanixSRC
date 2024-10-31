function applyRingClasses() {
    const ringElements = document.querySelectorAll("[class*='ring']");

    ringElements.forEach(element => {
        const classes = element.classList;

        classes.forEach(cls => {
            if (cls.startsWith("ring-")) {
                const ringSize = cls === "ring" ? "2px" : cls.split("-")[1] + "px";
                if (cls === "ring" || cls.match(/ring-\d+/)) {
                    element.style.boxShadow = `0 0 0 ${ringSize} currentColor`;
                } else if (cls.startsWith("ring-opacity-")) {
                    const opacity = cls.split("-")[2] / 100;
                    element.style.opacity = opacity;
                } else if (cls.startsWith("ring-offset-")) {
                    const offsetSize = cls === "ring-offset-0" ? "0px" : cls.split("-")[2] + "px";
                    element.style.outlineOffset = offsetSize;
                } else if (cls.startsWith("ring-")) {
                    const color = cls.split("-")[1];
                    element.style.boxShadow = `0 0 0 ${ringSize} ${color}`;
                }
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applyRingClasses);
