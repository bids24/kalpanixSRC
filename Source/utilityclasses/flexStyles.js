// Flexbox styles mapping
const flexStyles = {
    'flex-row': 'row',
    'flex-row-reverse': 'row-reverse',
    'flex-col': 'column',
    'flex-col-reverse': 'column-reverse',
    'flex-initial': 'initial',
    'flex-1': '1 1 0%',
    'flex-auto': '1 1 auto',
    'flex-none': 'none',
    'flex-no-wrap': 'nowrap',
    'flex-wrap': 'wrap',
    'flex-wrap-reverse': 'wrap-reverse',
    'items-stretch': 'stretch',
    'self-start': 'flex-start',
    'justify-start': 'flex-start',
    'content-start': 'flex-start',
    'flex-grow': '1',
    'flex-grow-0': '0',
    'flex-shrink': '1',
    'flex-shrink-0': '0'
};

// Order mapping
const orderClasses = (order) => {
    return order ? order : '0'; // Default order is 0
};

// Function to apply flex styles
function applyFlexStyles() {
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        let flexDirection = '';
        let flexWrap = '';
        let alignItems = '';
        let justifyContent = '';
        let flexGrow = '';
        let flexShrink = '';
        let flexBasis = '';
        let order = '';

        element.classList.forEach(className => {
            // Apply flex direction
            if (flexStyles[className]) {
                if (className.startsWith('flex-')) {
                    if (['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'].includes(className)) {
                        flexDirection = flexStyles[className];
                    } else if (['flex-wrap', 'flex-wrap-reverse', 'flex-no-wrap'].includes(className)) {
                        flexWrap = flexStyles[className];
                    } else if (['flex-initial', 'flex-1', 'flex-auto', 'flex-none'].includes(className)) {
                        flexBasis = flexStyles[className];
                    } else if (['flex-grow', 'flex-grow-0'].includes(className)) {
                        flexGrow = flexStyles[className];
                    } else if (['flex-shrink', 'flex-shrink-0'].includes(className)) {
                        flexShrink = flexStyles[className];
                    }
                }
            }

            // Align items
            if (className.startsWith('items-')) {
                alignItems = flexStyles[className] || alignItems;
            }

            // Justify content
            if (className.startsWith('justify-')) {
                justifyContent = flexStyles[className] || justifyContent;
            }

            // Align self
            if (className.startsWith('self-')) {
                alignItems = flexStyles[className] || alignItems;
            }

            // Order class
            if (className.startsWith('order-')) {
                order = orderClasses(className.split('-')[1]);
            }
        });

        // Apply the styles to the element
        if (flexDirection) {
            element.style.display = 'flex';
            element.style.flexDirection = flexDirection;
        }
        if (flexWrap) {
            element.style.flexWrap = flexWrap;
        }
        if (alignItems) {
            element.style.alignItems = alignItems;
        }
        if (justifyContent) {
            element.style.justifyContent = justifyContent;
        }
        if (flexGrow) {
            element.style.flexGrow = flexGrow;
        }
        if (flexShrink) {
            element.style.flexShrink = flexShrink;
        }
        if (flexBasis) {
            element.style.flexBasis = flexBasis;
        }
        if (order) {
            element.style.order = order;
        }
    });
}

// Initialize function on page load
document.addEventListener('DOMContentLoaded', applyFlexStyles);
