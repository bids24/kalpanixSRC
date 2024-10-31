// BackgroundColor.js

// A mapping of background color classes to their corresponding CSS colors
const bgColors = {
// Background Color Classes

// Basic Colors
'bg-transparent': 'transparent',
'bg-current': 'currentColor',
'bg-black': '#000000',
'bg-white': '#ffffff',

// Gray Shades
'bg-gray-100': '#f7fafc',
'bg-gray-200': '#edf2f7',
'bg-gray-300': '#e2e8f0',
'bg-gray-400': '#cbd5e0',
'bg-gray-500': '#a0aec0',
'bg-gray-600': '#718096',
'bg-gray-700': '#4a5568',
'bg-gray-800': '#2d3748',
'bg-gray-900': '#1a202c',

// Red Shades
'bg-red-100': '#fee2e2',
'bg-red-200': '#fecaca',
'bg-red-300': '#fca5a5',
'bg-red-400': '#f87171',
'bg-red-500': '#f56565',
'bg-red-600': '#e53e3e',
'bg-red-700': '#c53030',
'bg-red-800': '#9b2c2c',
'bg-red-900': '#742a2a',

// Orange Shades
'bg-orange-100': '#ffedd5',
'bg-orange-200': '#fed7aa',
'bg-orange-300': '#fdba74',
'bg-orange-400': '#fb923c',
'bg-orange-500': '#f97316',
'bg-orange-600': '#ea580c',
'bg-orange-700': '#dc2626',
'bg-orange-800': '#c2410c',
'bg-orange-900': '#9a3412',

// Yellow Shades
'bg-yellow-100': '#fefcbf',
'bg-yellow-200': '#fef08a',
'bg-yellow-300': '#fde047',
'bg-yellow-400': '#facc15',
'bg-yellow-500': '#eab308',
'bg-yellow-600': '#ca8a04',
'bg-yellow-700': '#a16207',
'bg-yellow-800': '#854d0e',
'bg-yellow-900': '#713f12',

// Green Shades
'bg-green-100': '#f0fdf4',
'bg-green-200': '#bbf7d0',
'bg-green-300': '#86efac',
'bg-green-400': '#4ade80',
'bg-green-500': '#22c55e',
'bg-green-600': '#16a34a',
'bg-green-700': '#15803d',
'bg-green-800': '#166534',
'bg-green-900': '#14532d',

// Teal Shades
'bg-teal-100': '#f0fdfa',
'bg-teal-200': '#ccfbf1',
'bg-teal-300': '#99f6e4',
'bg-teal-400': '#5eead4',
'bg-teal-500': '#26d12e',
'bg-teal-600': '#0d9488',
'bg-teal-700': '#0f766e',
'bg-teal-800': '#115e59',
'bg-teal-900': '#134e4a',

// Blue Shades
'bg-blue-100': '#ebf8ff',
'bg-blue-200': '#bee3f8',
'bg-blue-300': '#90cdf4',
'bg-blue-400': '#63b3ed',
'bg-blue-500': '#4299e1',
'bg-blue-600': '#3182ce',
'bg-blue-700': '#2b6cb0',
'bg-blue-800': '#2c5282',
'bg-blue-900': '#2a4364',

// Indigo Shades
'bg-indigo-100': '#ebf4ff',
'bg-indigo-200': '#c3dafe',
'bg-indigo-300': '#a3bffa',
'bg-indigo-400': '#7f9cf5',
'bg-indigo-500': '#6366f1',
'bg-indigo-600': '#4f46e5',
'bg-indigo-700': '#4338ca',
'bg-indigo-800': '#3730a3',
'bg-indigo-900': '#312e81',

// Purple Shades
'bg-purple-100': '#faf5ff',
'bg-purple-200': '#e9d5ff',
'bg-purple-300': '#d8b4fe',
'bg-purple-400': '#c084fc',
'bg-purple-500': '#a855f7',
'bg-purple-600': '#9333ea',
'bg-purple-700': '#7e22ce',
'bg-purple-800': '#6b21a8',
'bg-purple-900': '#581c87',

// Pink Shades
'bg-pink-100': '#fdf2f8',
'bg-pink-200': '#fbbfce',
'bg-pink-300': '#f9a8d4',
'bg-pink-400': '#f472b6',
'bg-pink-500': '#ec4899',
'bg-pink-600': '#db2777',
'bg-pink-700': '#be185d',
'bg-pink-800': '#9d174d',
'bg-pink-900': '#831843',

// Lime Shades
'bg-lime-100': '#f7fee7',
'bg-lime-200': '#eef9c3',
'bg-lime-300': '#d9f99d',
'bg-lime-400': '#bef264',
'bg-lime-500': '#84cc16',
'bg-lime-600': '#65a30d',
'bg-lime-700': '#4d7c2e',
'bg-lime-800': '#3f6212',
'bg-lime-900': '#365314',

// Cyan Shades
'bg-cyan-100': '#e0f2fe',
'bg-cyan-200': '#b2e3fe',
'bg-cyan-300': '#84c9fe',
'bg-cyan-400': '#38bdf8',
'bg-cyan-500': '#06b6d4',
'bg-cyan-600': '#0e7490',
'bg-cyan-700': '#155e75',
'bg-cyan-800': '#164e63',
'bg-cyan-900': '#164e63',

// Sky Shades
'bg-sky-100': '#f0abfc',
'bg-sky-200': '#e879f9',
'bg-sky-300': '#d946ef',
'bg-sky-400': '#a855f7',
'bg-sky-500': '#9333ea',
'bg-sky-600': '#7e22ce',
'bg-sky-700': '#6b21a8',
'bg-sky-800': '#581c87',
'bg-sky-900': '#3b0e80',

// Slate Shades
'bg-slate-100': '#f8fafc',
'bg-slate-200': '#e2e8f0',
'bg-slate-300': '#cbd5e1',
'bg-slate-400': '#94a3b8',
'bg-slate-500': '#64748b',
'bg-slate-600': '#475569',
'bg-slate-700': '#334155',
'bg-slate-800': '#1e293b',
'bg-slate-900': '#0f172a',

// Additional Colors - Expanding up to 1000 classes

// Brown Shades
'bg-brown-100': '#f7e0e0',
'bg-brown-200': '#f0c6c6',
'bg-brown-300': '#e8b3b3',
'bg-brown-400': '#d99f9f',
'bg-brown-500': '#d08c8c',
'bg-brown-600': '#c37878',
'bg-brown-700': '#b26464',
'bg-brown-800': '#9a5050',
'bg-brown-900': '#853d3d',

// Light Shades
'bg-light-blue-100': '#cce7ff',
'bg-light-blue-200': '#99d0ff',
'bg-light-blue-300': '#66b2ff',
'bg-light-blue-400': '#3394ff',
'bg-light-blue-500': '#0077ff',
'bg-light-blue-600': '#0066cc',
'bg-light-blue-700': '#0059b3',
'bg-light-blue-800': '#004d99',
'bg-light-blue-900': '#004080',

'bg-light-red-100': '#ffe6e6',
'bg-light-red-200': '#ffcccc',
'bg-light-red-300': '#ff9999',
'bg-light-red-400': '#ff6666',
'bg-light-red-500': '#ff3333',
'bg-light-red-600': '#cc0000',
'bg-light-red-700': '#b30000',
'bg-light-red-800': '#990000',
'bg-light-red-900': '#800000',

// Dark Shades
'bg-dark-blue-100': '#0000cc',
'bg-dark-blue-200': '#000099',
'bg-dark-blue-300': '#000066',
'bg-dark-blue-400': '#000033',
'bg-dark-blue-500': '#000000',

'bg-dark-green-100': '#003300',
'bg-dark-green-200': '#002200',
'bg-dark-green-300': '#001100',
'bg-dark-green-400': '#000000',

// Gradient Classes
'bg-gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
'bg-gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
'bg-gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
'bg-gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
'bg-gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
'bg-gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
'bg-gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
'bg-gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',

// Additional Gradients (Using existing colors)
'bg-gradient-red': 'linear-gradient(90deg, #f56565 0%, #c53030 100%)',
'bg-gradient-green': 'linear-gradient(90deg, #22c55e 0%, #15803d 100%)',
'bg-gradient-blue': 'linear-gradient(90deg, #4299e1 0%, #2b6cb0 100%)',
'bg-gradient-purple': 'linear-gradient(90deg, #a855f7 0%, #7e22ce 100%)',
'bg-gradient-pink': 'linear-gradient(90deg, #ec4899 0%, #db2777 100%)',

// Custom Colors
'bg-custom-1': '#f2f2f2',
'bg-custom-2': '#d9d9d9',
'bg-custom-3': '#bfbfbf',
'bg-custom-4': '#a6a6a6',
'bg-custom-5': '#8c8c8c',
'bg-custom-6': '#737373',
'bg-custom-7': '#595959',
'bg-custom-8': '#404040',
'bg-custom-9': '#262626',
'bg-custom-10': '#0d0d0d',

// Expanding the Shades
'bg-red-1000': '#ffebeb',
'bg-orange-1000': '#ffedd5',
'bg-yellow-1000': '#fefcbf',
'bg-green-1000': '#f0fdf4',
'bg-teal-1000': '#f0fdfa',
'bg-blue-1000': '#ebf8ff',
'bg-indigo-1000': '#ebf4ff',
'bg-purple-1000': '#faf5ff',
'bg-pink-1000': '#fdf2f8',
'bg-lime-1000': '#f7fee7',
'bg-cyan-1000': '#e0f2fe',
'bg-sky-1000': '#f0abfc',
'bg-slate-1000': '#f8fafc',

// Additional Custom Colors
'bg-custom-11': '#e5e5e5',
'bg-custom-12': '#cccccc',
'bg-custom-13': '#b2b2b2',
'bg-custom-14': '#999999',
'bg-custom-15': '#808080',
'bg-custom-16': '#666666',
'bg-custom-17': '#4d4d4d',
'bg-custom-18': '#333333',
'bg-custom-19': '#1a1a1a',
'bg-custom-20': '#000000',

};

// Function to apply background colors based on class names
function applyBorders() {
    const elements = document.querySelectorAll('[class*="border"], [class*="divide-"], [class*="rounded"]');

    elements.forEach(elem => {
        let borderColorApplied = false;

        elem.classList.forEach(borderClass => {
            // Check for border color classes and apply color if specified
            if (borderClass.startsWith('border-') && borderColors[borderClass]) {
                elem.style.borderColor = borderColors[borderClass];
                borderColorApplied = true; // Set flag indicating border color has been applied
            }
        });

        // Apply a default border color only if no color was applied
        if (!borderColorApplied) {
            elem.style.borderColor = 'black'; // Default border color if none is applied
        }

        // Ensure that border style and width are not overridden if set by applyBorderStyles
        if (!elem.style.borderStyle) {
            elem.style.borderStyle = 'solid'; // Default style if none applied
            elem.style.borderWidth = '2px'; // Default width if none applied
        }
    });
}

// Apply border colors on DOMContentLoaded
document.addEventListener('DOMContentLoaded', applyBorders);
