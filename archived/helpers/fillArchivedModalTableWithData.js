import data from "../../database/data.js";
import {unarchiveButtonHelper} from "./unarchiveButtonHelper.js";
import {archivedKey} from "../../helpers/buttons/archive.js";

function createArchivedModalTableRow(data, notes) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = data.name;

    const createdCell = document.createElement("td");
    createdCell.textContent = data.created;

    const categoryCell = document.createElement("td");
    categoryCell.textContent = data.category;

    const contentCell = document.createElement("td");
    contentCell.style.textOverflow = 'ellipsis';
    contentCell.classList.add("mw-30", "overflow-hidden");
    contentCell.textContent = data.content;

    const datesCell = document.createElement("td");
    datesCell.classList.add("overflow-auto");
    datesCell.textContent = data.dates?.join(', ');

    const unarchiveCell = unarchiveButtonHelper(data, notes);

    row.append(nameCell, createdCell, categoryCell, contentCell, datesCell, unarchiveCell);

    return row;
}

const archivedQuantity = JSON.parse(localStorage.getItem(archivedKey));
const updateUnarchived = data.filter(n => archivedQuantity?.includes(n.id));

export const fillArchivedModalTableWithData = (notesList = updateUnarchived) => {
    const tableRows = notesList.map(item => createArchivedModalTableRow(item, notesList));
    document.querySelector("div#archivedModal table tbody").append(...tableRows);
};