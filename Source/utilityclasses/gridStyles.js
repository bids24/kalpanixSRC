// Grid Styles Mapping
const gridStyles = {
    // Column and row span, start, end
    'col-auto': { property: 'gridColumn', value: 'auto' },
    'col-span-full': { property: 'gridColumn', value: '1 / -1' },
    'col-start-auto': { property: 'gridColumnStart', value: 'auto' },
    'col-end-auto': { property: 'gridColumnEnd', value: 'auto' },
    'row-auto': { property: 'gridRow', value: 'auto' },
    'row-start-auto': { property: 'gridRowStart', value: 'auto' },
    'row-end-auto': { property: 'gridRowEnd', value: 'auto' },

    // Row and column gap
    'gap-0': { property: 'gap', value: '0px' },
    'gap-px': { property: 'gap', value: '1px' },
    'gap-x-0': { property: 'columnGap', value: '0px' },
    'gap-x-px': { property: 'columnGap', value: '1px' },
    'gap-y-0': { property: 'rowGap', value: '0px' },
    'gap-y-px': { property: 'rowGap', value: '1px' },

    // Grid flows
    'grid-flow-row': { property: 'gridAutoFlow', value: 'row' },
    'grid-flow-row-dense': { property: 'gridAutoFlow', value: 'row dense' },
    'grid-flow-col': { property: 'gridAutoFlow', value: 'column' },
    'grid-flow-col-dense': { property: 'gridAutoFlow', value: 'column dense' },

    // Auto columns and rows
    'auto-cols-auto': { property: 'gridAutoColumns', value: 'auto' },
    'auto-cols-fr': { property: 'gridAutoColumns', value: 'minmax(0, 1fr)' },
    'auto-cols-max': { property: 'gridAutoColumns', value: 'max-content' },
    'auto-cols-min': { property: 'gridAutoColumns', value: 'min-content' },
    'auto-rows-auto': { property: 'gridAutoRows', value: 'auto' },
    'auto-rows-fr': { property: 'gridAutoRows', value: 'minmax(0, 1fr)' },
    'auto-rows-max': { property: 'gridAutoRows', value: 'max-content' },
    'auto-rows-min': { property: 'gridAutoRows', value: 'min-content' },

    // Place content, items, and self
    'place-content-around': { property: 'placeContent', value: 'space-around' },
    'place-content-between': { property: 'placeContent', value: 'space-between' },
    'place-content-center': { property: 'placeContent', value: 'center' },
    'place-content-end': { property: 'placeContent', value: 'end' },
    'place-content-evenly': { property: 'placeContent', value: 'space-evenly' },
    'place-content-start': { property: 'placeContent', value: 'start' },
    'place-content-stretch': { property: 'placeContent', value: 'stretch' },
    'place-items-auto': { property: 'placeItems', value: 'auto' },
    'place-items-center': { property: 'placeItems', value: 'center' },
    'place-items-end': { property: 'placeItems', value: 'end' },
    'place-items-start': { property: 'placeItems', value: 'start' },
    'place-items-stretch': { property: 'placeItems', value: 'stretch' },
    'place-self-auto': { property: 'placeSelf', value: 'auto' },
    'place-self-end': { property: 'placeSelf', value: 'end' },
    'place-self-start': { property: 'placeSelf', value: 'start' },
    'place-self-stretch': { property: 'placeSelf', value: 'stretch' }
};

// Function to dynamically apply grid styles
function applyGridStyles() {
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        element.classList.forEach(className => {
            // Handle column spans
            if (className.startsWith('col-span-')) {
                const span = className.replace('col-span-', '');
                element.style.gridColumn = `span ${span}`;
            }
            if (className.startsWith('col-start-')) {
                const start = className.replace('col-start-', '');
                element.style.gridColumnStart = start;
            }
            if (className.startsWith('col-end-')) {
                const end = className.replace('col-end-', '');
                element.style.gridColumnEnd = end;
            }

            // Handle row spans
            if (className.startsWith('row-span-')) {
                const span = className.replace('row-span-', '');
                element.style.gridRow = `span ${span}`;
            }
            if (className.startsWith('row-start-')) {
                const start = className.replace('row-start-', '');
                element.style.gridRowStart = start;
            }
            if (className.startsWith('row-end-')) {
                const end = className.replace('row-end-', '');
                element.style.gridRowEnd = end;
            }

            // Apply general grid styles
            if (gridStyles[className]) {
                const { property, value } = gridStyles[className];
                element.style[property] = value;
            }
        });
    });
}

// Initialize function on page load
document.addEventListener('DOMContentLoaded', applyGridStyles);
