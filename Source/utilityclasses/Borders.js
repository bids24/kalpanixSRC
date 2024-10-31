// Border style, width, opacity, and rounding mapping
const borderStyles = {
    'border-solid': 'solid',
    'border-dashed': 'dashed',
    'border-dotted': 'dotted',
    'border-double': 'double',
    'border-none': 'none',
    'border': '1px',
    'border-0': '0px',
    'border-2': '2px',
    'border-4': '4px',
    'border-8': '8px',
    'border-opacity-25': '0.25',
    'border-opacity-50': '0.5',
    'border-opacity-75': '0.75',
    'border-opacity-100': '1',
    'divide-x': '1px solid',
    'divide-y': '1px solid',
    'border-collapse': 'collapse',
    'border-separate': 'separate',
    // Rounded styles
    'rounded': '4px',
    'rounded-2xl': '1rem',
    'rounded-3xl': '1.5rem',
    'rounded-t-xl': '0.75rem',
    'rounded-r-xl': '0.75rem',
    'rounded-b-xl': '0.75rem',
    'rounded-l-xl': '0.75rem',
    // Additional rounded corner classes
    'rounded-t-2xl': '1rem',
    'rounded-r-2xl': '1rem',
    'rounded-b-2xl': '1rem',
    'rounded-l-2xl': '1rem',
    // Extend as needed...
};

// Function to apply additional border styles
function applyAdditionalBorderStyles() {
    // Select all elements
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        element.classList.forEach(className => {
            if (borderStyles[className]) {
                // Apply specific border style if found in mapping
                if (className.startsWith('border-')) {
                    element.style.borderStyle = borderStyles[className];
                } else if (className.startsWith('rounded')) {
                    element.style.borderRadius = borderStyles[className];
                } else if (className.startsWith('divide')) {
                    element.style.border = borderStyles[className];
                } else if (className.startsWith('border-opacity')) {
                    element.style.opacity = borderStyles[className];
                }
            }
        });
    });
}

// Initialize function on page load
document.addEventListener('DOMContentLoaded', applyAdditionalBorderStyles);
