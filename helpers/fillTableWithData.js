import {buttonsHelper} from "./buttons/buttonsHelper.js";
import data from "../database/data.js";
import {middlewareAfterReferrer} from "./middlewareAfterReferrer.js";

function createTableRow(data) {
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

    const buttonsCell = buttonsHelper(data.id);

    row.append(nameCell, createdCell, categoryCell, contentCell, datesCell, buttonsCell);

    return row;
}

export const fillTableWithData = (notesList = data) => {
    const filterList = middlewareAfterReferrer(notesList);
    if (filterList) notesList = filterList;

    const tableRows = notesList.map(item => createTableRow(item));
    document.querySelector("table tbody").append(...tableRows);
};
