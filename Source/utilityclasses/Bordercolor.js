// Border color mapping
const borderColors = {
    'border-transparent': 'transparent',
    'border-current': 'currentColor',
    'border-black': '#000000',
    'border-white': '#ffffff',
    'border-gray-100': '#f7fafc',
    'border-gray-200': '#edf2f7',
    'border-gray-300': '#e2e8f0',
    'border-gray-400': '#cbd5e0',
    'border-gray-500': '#a0aec0',
    'border-gray-600': '#718096',
    'border-gray-700': '#4a5568',
    'border-gray-800': '#2d3748',
    'border-gray-900': '#1a202c',
    'border-red-100': '#fff5f5',
    'border-red-200': '#fed7d7',
    'border-red-300': '#feb2b2',
    'border-red-400': '#fc8181',
    'border-red-500': '#f56565',
    'border-red-600': '#e53e3e',
    'border-red-700': '#c53030',
    'border-red-800': '#9b2c2c',
    'border-red-900': '#742a2a',
    'border-orange-100': '#fffaf0',
    'border-orange-200': '#feebc8',
    'border-orange-300': '#fbd38d',
    'border-orange-400': '#f6ad55',
    'border-orange-500': '#ed8936',
    'border-orange-600': '#dd6b20',
    'border-orange-700': '#c05621',
    'border-orange-800': '#9c4221',
    'border-orange-900': '#7b341e',
    'border-yellow-100': '#fefcbf',
    'border-yellow-200': '#fef08a',
    'border-yellow-300': '#fde047',
    'border-yellow-400': '#facc15',
    'border-yellow-500': '#eab308',
    'border-yellow-600': '#ca8a04',
    'border-yellow-700': '#a16207',
    'border-yellow-800': '#854d0e',
    'border-yellow-900': '#7c2d12',
    'border-green-100': '#f0fff4',
    'border-green-200': '#c6f6d5',
    'border-green-300': '#9ae6b4',
    'border-green-400': '#68d391',
    'border-green-500': '#48bb78',
    'border-green-600': '#38a169',
    'border-green-700': '#2f855a',
    'border-green-800': '#276749',
    'border-green-900': '#22543d',
    'border-teal-100': '#e6fffa',
    'border-teal-200': '#b2f5ea',
    'border-teal-300': '#81e6d9',
    'border-teal-400': '#4fd1c5',
    'border-teal-500': '#38b2a5',
    'border-teal-600': '#319795',
    'border-teal-700': '#2c7a7f',
    'border-teal-800': '#285e61',
    'border-teal-900': '#234e52',
    'border-blue-100': '#ebf8ff',
    'border-blue-200': '#bee3f8',
    'border-blue-300': '#90cdf4',
    'border-blue-400': '#63b3ed',
    'border-blue-500': '#4299e1',
    'border-blue-600': '#3182ce',
    'border-blue-700': '#2b6cb0',
    'border-blue-800': '#2c5282',
    'border-blue-900': '#2a4361',
    'border-indigo-100': '#ebf8ff',
    'border-indigo-200': '#c3dafe',
    'border-indigo-300': '#a3bffa',
    'border-indigo-400': '#7f9cf5',
    'border-indigo-500': '#667eea',
    'border-indigo-600': '#5a67d8',
    'border-indigo-700': '#4c51bf',
    'border-indigo-800': '#434190',
    'border-indigo-900': '#3c366b',
    'border-purple-100': '#faf5ff',
    'border-purple-200': '#e9d8fd',
    'border-purple-300': '#d6bcfa',
    'border-purple-400': '#b794f4',
    'border-purple-500': '#9f7aea',
    'border-purple-600': '#805ad5',
    'border-purple-700': '#6b46c1',
    'border-purple-800': '#553c9a',
    'border-purple-900': '#44337a',
    'border-pink-100': '#fff5f7',
    'border-pink-200': '#fed7e2',
    'border-pink-300': '#fbbfce',
    'border-pink-400': '#f687b3',
    'border-pink-500': '#ed64a6',
    'border-pink-600': '#d53f8c',
    'border-pink-700': '#b83280',
    'border-pink-800': '#97266d',
    'border-pink-900': '#702459'
};

// Function to apply border styles
function applyBorderStyles() {
    // Get all elements in the document
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        // Loop through each class of the element
        element.classList.forEach(className => {
            // If the className is a border color in the mapping, apply it as a border
            if (borderColors[className]) {
                element.style.border = `1px solid ${borderColors[className]}`;
            }
        });
    });
}

// Call the function once on page load
document.addEventListener('DOMContentLoaded', applyBorderStyles);
