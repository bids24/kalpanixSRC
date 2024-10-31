// Text color mapping
const textColorClasses = {
    'text-transparent': 'transparent',
    'text-current': 'currentColor',
    'text-black': '#000000',
    'text-white': '#ffffff',
    
    // Grayscale
    'text-gray-100': '#f7fafc',
    'text-gray-200': '#edf2f7',
    'text-gray-300': '#e2e8f0',
    'text-gray-400': '#cbd5e0',
    'text-gray-500': '#a0aec0',
    'text-gray-600': '#718096',
    'text-gray-700': '#4a5568',
    'text-gray-800': '#2d3748',
    'text-gray-900': '#1a202c',

    // Red shades
    'text-red-100': '#fff5f5',
    'text-red-200': '#fed7d7',
    'text-red-300': '#feb2b2',
    'text-red-400': '#fc8181',
    'text-red-500': '#f56565',
    'text-red-600': '#e53e3e',
    'text-red-700': '#c53030',
    'text-red-800': '#9b2c2c',
    'text-red-900': '#742a2a',

    // Blue shades
    'text-blue-100': '#ebf8ff',
    'text-blue-200': '#bee3f8',
    'text-blue-300': '#90cdf4',
    'text-blue-400': '#63b3ed',
    'text-blue-500': '#4299e1',
    'text-blue-600': '#3182ce',
    'text-blue-700': '#2b6cb0',
    'text-blue-800': '#2c5282',
    'text-blue-900': '#2a4361',

    // Additional colors can be added similarly...
};

// Function to apply text color styles
function applyTextColorStyles() {
    // Select all elements
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        element.classList.forEach(className => {
            if (textColorClasses[className]) {
                element.style.color = textColorClasses[className];
            }
        });
    });
}

// Initialize function on page load
document.addEventListener('DOMContentLoaded', applyTextColorStyles);
