const backgrounds = [
    {
        backgroundSize: {
            "bg-auto": "auto",
            "bg-cover": "cover",
            "bg-contain": "contain",
            "bg-50%": "50%",
            "bg-100%": "100%",
            "bg-200%": "200%",
            "bg-fit-height": "fit-height",
            "bg-fit-width": "fit-width",
            "bg-inherit": "inherit",
            "bg-initial": "initial",
            "bg-unset": "unset"
        }
    },
    {
        backgroundPosition: {
            "bg-top": "top",
            "bg-bottom": "bottom",
            "bg-left": "left",
            "bg-right": "right",
            "bg-center": "center",
            "bg-top-left": "top left",
            "bg-top-right": "top right",
            "bg-bottom-left": "bottom left",
            "bg-bottom-right": "bottom right",
            "bg-center-left": "center left",
            "bg-center-right": "center right",
            "bg-50%": "50%",
            "bg-100%": "100%"
        }
    },
    {
        backgroundAttachment: {
            "bg-fixed": "fixed",
            "bg-scroll": "scroll",
            "bg-local": "local",
            "bg-inherit": "inherit",
            "bg-initial": "initial",
            "bg-unset": "unset"
        }
    },
    {
        backgroundRepeat: {
            "bg-repeat": "repeat",
            "bg-no-repeat": "no-repeat",
            "bg-repeat-x": "repeat-x",
            "bg-repeat-y": "repeat-y",
            "bg-space": "space",
            "bg-round": "round",
            "bg-inherit": "inherit",
            "bg-initial": "initial",
            "bg-unset": "unset"
        }
    },
    // Uncomment the following section to include backgroundOpacity
    // {
    //     backgroundOpacity: {
    //         ".bg-opacity-0": "0",     
    //         ".bg-opacity-10": "0.1",
    //         ".bg-opacity-20": "0.2",
    //         ".bg-opacity-30": "0.3",
    //         ".bg-opacity-40": "0.4",
    //         ".bg-opacity-50": "0.5", 
    //         ".bg-opacity-60": "0.6",
    //         ".bg-opacity-70": "0.7",
    //         ".bg-opacity-80": "0.8",
    //         ".bg-opacity-90": "0.9",
    //         ".bg-opacity-100": "1"    
    //     }
    // }
];
function applyBackground() {
    const elements = document.querySelectorAll('[class*="bg-"]');

    elements.forEach(elem => {
        elem.classList.forEach(className => {
            if (className.includes('bg-')) {
                // const values = className.split('-');
                
                backgrounds.forEach(obj => {
                    const propName = Object.keys(obj)[0];
                    const propValues = obj[propName];

                    if (propValues.hasOwnProperty(className)) {
                        elem.style[propName] = propValues[className];
                    }
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', applyBackground);