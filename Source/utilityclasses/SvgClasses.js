function applySvgClasses() {
    const svgElements = document.querySelectorAll("svg[class*='fill-'], svg[class*='stroke-']");

    svgElements.forEach(element => {
        const classes = element.classList;

        classes.forEach(cls => {
            if (cls === "fill-current") {
                element.style.fill = "currentColor";
            } else if (cls === "stroke-current") {
                element.style.stroke = "currentColor";
            } else if (cls.startsWith("stroke-")) {
                const strokeWidth = parseInt(cls.split("-")[1], 10);
                element.style.strokeWidth = strokeWidth ? `${strokeWidth}px` : "0";
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applySvgClasses);
