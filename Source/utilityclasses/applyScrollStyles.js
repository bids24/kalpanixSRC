function applyScrollClasses() {
    const scrollElements = document.querySelectorAll("[class*='overscroll']");

    scrollElements.forEach(element => {
        const classes = element.classList;

        classes.forEach(cls => {
            if (cls.startsWith("overscroll-")) {
                switch (cls) {
                    case "overscroll-contain":
                        element.style.overflow = "hidden";
                        element.style.overflowY = "scroll";
                        element.style.overscrollBehavior = "contain";
                        break;
                    case "overscroll-x-auto":
                        element.style.overflowX = "auto";
                        break;
                    case "overscroll-x-contain":
                        element.style.overflowX = "hidden";
                        element.style.overscrollBehaviorX = "contain";
                        break;
                    case "overscroll-x-none":
                        element.style.overflowX = "hidden";
                        break;
                    case "overscroll-y-auto":
                        element.style.overflowY = "auto";
                        break;
                    case "overscroll-y-contain":
                        element.style.overflowY = "hidden";
                        element.style.overscrollBehaviorY = "contain";
                        break;
                    case "overscroll-y-none":
                        element.style.overflowY = "hidden";
                        break;
                }
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applyScrollClasses);
