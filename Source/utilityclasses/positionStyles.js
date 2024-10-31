function applyPositioningStyles() {
    const clearValues = ["left", "right", "both", "none"];
    const floatValues = ["left", "right", "none"];
    const alignValues = ["baseline", "bottom", "middle", "text-bottom", "text-top", "top"];
    const objectValues = ["center", "bottom", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", "contain"];
    const zValues = Array.from({ length: 50 }, (_, i) => i + 1);

    clearValues.forEach(clear => {
        document.querySelectorAll(`.clear-${clear}`).forEach(el => el.style.clear = clear);
    });

    floatValues.forEach(float => {
        document.querySelectorAll(`.float-${float}`).forEach(el => el.style.float = float);
    });

    alignValues.forEach(align => {
        document.querySelectorAll(`.align-${align}`).forEach(el => el.style.verticalAlign = align);
    });

    objectValues.forEach(object => {
        document.querySelectorAll(`.object-${object}`).forEach(el => el.style.objectPosition = object.replace('-', ' '));
    });

    zValues.forEach(zIndex => {
        document.querySelectorAll(`.z-${zIndex}`).forEach(el => el.style.zIndex = zIndex);
    });

    // Position classes
    ["static", "relative", "absolute", "fixed", "sticky"].forEach(position => {
        document.querySelectorAll(`.${position}`).forEach(el => el.style.position = position);
    });

    // Inset values
    const insetValues = {
        "0": "0",
        "1": "0.25rem",
        "px": "1px",
        "full": "100%"
    };

    Object.entries(insetValues).forEach(([key, value]) => {
        document.querySelectorAll(`.inset-${key}`).forEach(el => el.style.top = el.style.right = el.style.bottom = el.style.left = value);
        document.querySelectorAll(`.inset-x-${key}`).forEach(el => {
            el.style.left = value;
            el.style.right = value;
        });
        document.querySelectorAll(`.inset-y-${key}`).forEach(el => {
            el.style.top = value;
            el.style.bottom = value;
        });
        document.querySelectorAll(`.top-${key}`).forEach(el => el.style.top = value);
        document.querySelectorAll(`.bottom-${key}`).forEach(el => el.style.bottom = value);
        document.querySelectorAll(`.left-${key}`).forEach(el => el.style.left = value);
        document.querySelectorAll(`.right-${key}`).forEach(el => el.style.right = value);
    });

    // Negative values
    const negativeValues = {
        "0": "0",
        "px": "-1px",
        "full": "-100%"
    };

    Object.entries(negativeValues).forEach(([key, value]) => {
        document.querySelectorAll(`.-top-${key}`).forEach(el => el.style.top = value);
        document.querySelectorAll(`.-bottom-${key}`).forEach(el => el.style.bottom = value);
        document.querySelectorAll(`.-left-${key}`).forEach(el => el.style.left = value);
        document.querySelectorAll(`.-right-${key}`).forEach(el => el.style.right = value);
        document.querySelectorAll(`.-inset-${key}`).forEach(el => {
            el.style.top = value;
            el.style.right = value;
            el.style.bottom = value;
            el.style.left = value;
        });
        document.querySelectorAll(`.-inset-x-${key}`).forEach(el => {
            el.style.left = value;
            el.style.right = value;
        });
        document.querySelectorAll(`.-inset-y-${key}`).forEach(el => {
            el.style.top = value;
            el.style.bottom = value;
        });
    });
}

// Apply positioning styles on page load
document.addEventListener("DOMContentLoaded", applyPositioningStyles);
