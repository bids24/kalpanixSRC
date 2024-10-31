function applyShadowClasses() {
    const shadowElements = document.querySelectorAll("[class*='shadow']");

    shadowElements.forEach(element => {
        const classes = element.classList;

        classes.forEach(cls => {
            if (cls.startsWith("shadow-")) {
                switch (cls) {
                    case "shadow-xs":
                        element.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
                        break;
                    case "shadow-sm":
                        element.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.1)";
                        break;
                    case "shadow":
                        element.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
                        break;
                    case "shadow-md":
                        element.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                        break;
                    case "shadow-lg":
                        element.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                        break;
                    case "shadow-xl":
                        element.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                        break;
                    case "shadow-2xl":
                        element.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
                        break;
                    case "shadow-inner":
                        element.style.boxShadow = "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)";
                        break;
                    case "shadow-outline":
                        element.style.boxShadow = "0 0 0 3px rgba(66, 153, 225, 0.6)";
                        break;
                    case "shadow-none":
                        element.style.boxShadow = "none";
                        break;
                }
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applyShadowClasses);
