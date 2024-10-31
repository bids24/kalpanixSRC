function applyTableStyles() {
    const tables = document.querySelectorAll(".table");

    tables.forEach(table => {
        const classes = table.classList;

        classes.forEach(cls => {
            switch (cls) {
                case "table":
                    table.style.display = "table";
                    break;
                case "table-caption":
                    table.style.display = "table-caption";
                    break;
                case "table-cell":
                    table.style.display = "table-cell";
                    break;
                case "table-column":
                    table.style.display = "table-column";
                    break;
                case "table-column-group":
                    table.style.display = "table-column-group";
                    break;
                case "table-footer-group":
                    table.style.display = "table-footer-group";
                    break;
                case "table-header-group":
                    table.style.display = "table-header-group";
                    break;
                case "table-row-group":
                    table.style.display = "table-row-group";
                    break;
                case "table-row":
                    table.style.display = "table-row";
                    break;
                case "table-auto":
                    table.style.tableLayout = "auto";
                    break;
                case "table-fixed":
                    table.style.tableLayout = "fixed";
                    break;
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applyTableStyles);
