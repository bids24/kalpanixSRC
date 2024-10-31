// Function to handle group-hover styles
function applyGroupHoverStyles() {
    // Select all elements that should trigger a group hover
    const groups = document.querySelectorAll('.group');

    groups.forEach(group => {
        group.addEventListener('mouseenter', () => {
            group.querySelectorAll('.group-hover').forEach(element => {
                element.classList.add('hovered');
            });
        });

        group.addEventListener('mouseleave', () => {
            group.querySelectorAll('.group-hover').forEach(element => {
                element.classList.remove('hovered');
            });
        });
    });
}

// Apply group-hover styles on page load
document.addEventListener('DOMContentLoaded', applyGroupHoverStyles);
