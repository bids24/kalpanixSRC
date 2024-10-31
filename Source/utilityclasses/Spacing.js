function applySpacingClasses() {
    const spacingElements = document.querySelectorAll("[class*='space-']");

    spacingElements.forEach(element => {
        const classes = element.classList;

        let spaceX = 0;
        let spaceY = 0;
        let reverseX = false;
        let reverseY = false;

        classes.forEach(cls => {
            if (cls.startsWith("space-x-")) {
                spaceX = parseInt(cls.split("-")[2], 10) || 1;
            } else if (cls.startsWith("space-y-")) {
                spaceY = parseInt(cls.split("-")[2], 10) || 1;
            } else if (cls === "space-x-reverse") {
                reverseX = true;
            } else if (cls === "space-y-reverse") {
                reverseY = true;
            } else if (cls.startsWith("-space-x-")) {
                spaceX = -(parseInt(cls.split("-")[3], 10) || 1);
            } else if (cls.startsWith("-space-y-")) {
                spaceY = -(parseInt(cls.split("-")[3], 10) || 1);
            }
        });

        if (spaceX !== 0) {
            element.style.display = "flex";
            element.style.flexDirection = reverseX ? "row-reverse" : "row";
            Array.from(element.children).forEach((child, index) => {
                if (index !== 0) {
                    child.style.marginLeft = `${spaceX * 4}px`;
                }
            });
        }

        if (spaceY !== 0) {
            element.style.display = "flex";
            element.style.flexDirection = reverseY ? "column-reverse" : "column";
            Array.from(element.children).forEach((child, index) => {
                if (index !== 0) {
                    child.style.marginTop = `${spaceY * 4}px`;
                }
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", applySpacingClasses);
