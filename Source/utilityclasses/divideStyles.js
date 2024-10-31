// Divide styles mapping
const divideStyles = {
    'divide-black': '#000000',
    'divide-blue-100': '#ebf8ff',
    'divide-current': 'currentColor',
    'divide-gray-100': '#f7fafc',
    'divide-green-100': '#f0fff4',
    'divide-indigo-100': '#ebf4ff',
    'divide-none': 'none',
    'divide-opacity-0': 'rgba(0, 0, 0, 0)',
    'divide-pink-100': '#fff5f7',
    'divide-purple-100': '#faf5ff',
    'divide-red-100': '#fff5f5',
    'divide-solid': 'solid',
    'divide-dashed': 'dashed',
    'divide-dotted': 'dotted',
    'divide-double': 'double',
    'divide-transparent': 'transparent',
    'divide-white': '#ffffff',
    'divide-yellow-100': '#fefcbf'
};

// Orientation and reverse mappings
const orientationClasses = {
    'divide-x': 'borderLeftWidth',
    'divide-y': 'borderTopWidth',
    'divide-x-reverse': 'borderRightWidth',
    'divide-y-reverse': 'borderBottomWidth'
};

// Function to apply divide styles
function applyDivideStyles() {
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        let borderColor = '';
        let borderStyle = 'solid';
        let orientationProperty = '';

        element.classList.forEach(className => {
            // Apply color based on divide class
            if (divideStyles[className]) {
                borderColor = divideStyles[className];
            }
            // Apply border style (solid, dashed, etc.)
            if (['divide-solid', 'divide-dashed', 'divide-dotted', 'divide-double'].includes(className)) {
                borderStyle = divideStyles[className];
            }
            // Apply orientation based on x/y divide class
            if (orientationClasses[className]) {
                orientationProperty = orientationClasses[className];
            }
        });

        // Apply the styles only if an orientation class is detected
        if (orientationProperty) {
            element.style[orientationProperty] = '1px';
            element.style.borderColor = borderColor;
            element.style.borderStyle = borderStyle;
        }
    });
}

// Initialize function on page load
document.addEventListener('DOMContentLoaded', applyDivideStyles);
