import {archivedKey} from "../../helpers/buttons/archive.js";
import {fillArchivedModalTableWithData} from "./fillArchivedModalTableWithData.js";
import {fillArchivedTableWithData} from "./fillArchivedTableWithData.js";

export const unarchiveButtonHelper = (data, notes) => {
    const buttonCell = document.createElement("td");

    const buttonUnarchive = document.createElement("button");
    buttonCell.appendChild(buttonUnarchive);
    buttonUnarchive.title = "Unarchive";
    buttonUnarchive.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">\n' +
        '  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>\n' +
        '</svg>';

    buttonUnarchive.addEventListener("click", () => {
        const archivedList = JSON.parse(localStorage.getItem(archivedKey));
        const unarchiveById = archivedList?.filter(id => data.id !== id);
        localStorage.setItem("archived", JSON.stringify(unarchiveById));

        document.querySelector("div#archivedModal table").removeChild(document.querySelector("div#archivedModal table tbody"));
        document.querySelector("div#archivedModal table").appendChild(document.createElement("tbody"));
        const updatedList = notes?.filter(({id}) => unarchiveById?.includes(id));
        fillArchivedModalTableWithData(updatedList);

        document.querySelector("table").removeChild(document.querySelector("table tbody"));
        document.querySelector("table").appendChild(document.createElement("tbody"));
        fillArchivedTableWithData();
    });

    return buttonCell;
};