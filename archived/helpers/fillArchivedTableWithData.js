import data from "../../database/data.js";
import {archivedKey} from "../../helpers/buttons/archive.js";

function createTableRow([category, quantity]) {
    const row = document.createElement("tr");

    const noteCategoryCell = document.createElement("td");
    noteCategoryCell.textContent = category;

    const archivedQuantity = JSON.parse(localStorage.getItem(archivedKey));
    const archivedQ = data.filter(n => archivedQuantity?.includes(n.id) && n.category === category).length;

    const activeCell = document.createElement("td");
    activeCell.textContent = quantity - archivedQ;

    const archivedCell = document.createElement("td");
    archivedCell.textContent = archivedQ;

    row.append(noteCategoryCell, activeCell, archivedCell);

    return row;
}

export const fillArchivedTableWithData = (notesList = data) => {
    const counts = notesList.reduce((acc, {category}) => ({
        ...acc,
        [category]: ++acc[category] ||  1,
    }), {});

    const tableRows = Object.entries(counts).map(item => createTableRow(item));
    document.querySelector("table tbody").append(...tableRows);
};