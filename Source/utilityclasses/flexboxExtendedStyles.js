// Extended Flexbox styles mapping
const extendedFlexStyles = {
    'content-around': 'space-around',
    'content-between': 'space-between',
    'content-center': 'center',
    'content-end': 'flex-end',
    'content-evenly': 'space-evenly',
    'content-start': 'flex-start',
    'flex-nowrap': 'nowrap',
    'justify-items-auto': 'auto',
    'justify-items-center': 'center',
    'justify-items-end': 'end',
    'justify-items-start': 'start',
    'justify-items-stretch': 'stretch',
    'justify-self-auto': 'auto',
    'justify-self-center': 'center',
    'justify-self-end': 'end',
    'justify-self-start': 'start',
    'justify-self-stretch': 'stretch',
    'space-x-7': '7px',
    'space-x-px': '1px',
    'space-x-reverse': 'reverse',
    'space-y-px': '1px',
    'space-y-reverse': 'reverse'
};

// Function to apply extended flex styles
function applyExtendedFlexStyles() {
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        let justifyContent = '';
        let alignContent = '';
        let flexWrap = '';
        let justifyItems = '';
        let justifySelf = '';
        let spaceX = '';
        let spaceY = '';

        element.classList.forEach(className => {
            // Apply justify content
            if (extendedFlexStyles[className]) {
                if (className.startsWith('content-')) {
                    justifyContent = extendedFlexStyles[className];
                }
                if (className.startsWith('justify-items-')) {
                    justifyItems = extendedFlexStyles[className];
                }
                if (className.startsWith('justify-self-')) {
                    justifySelf = extendedFlexStyles[className];
                }
                if (className.startsWith('space-x-')) {
                    spaceX = extendedFlexStyles[className];
                }
                if (className.startsWith('space-y-')) {
                    spaceY = extendedFlexStyles[className];
                }
            }

            // Apply flex wrap
            if (className === 'flex-nowrap') {
                flexWrap = 'nowrap';
            }
        });

        // Apply styles to the element
        if (justifyContent) {
            element.style.display = 'flex';
            element.style.justifyContent = justifyContent;
        }
        if (justifyItems) {
            element.style.alignItems = justifyItems; // Treating justify-items for simplicity
        }
        if (justifySelf) {
            element.style.alignSelf = justifySelf; // Treating justify-self for simplicity
        }
        if (flexWrap) {
            element.style.flexWrap = flexWrap;
        }

        // Apply spacing
        if (spaceX) {
            const children = element.children;
            for (let i = 0; i < children.length - 1; i++) {
                children[i].style.marginRight = spaceX;
            }
        }
        if (spaceY) {
            const children = element.children;
            for (let i = 0; i < children.length - 1; i++) {
                children[i].style.marginBottom = spaceY;
            }
        }
    });
}

// Initialize function on page load
document.addEventListener('DOMContentLoaded', applyExtendedFlexStyles);
