import data from "../../database/data.js";
import {updateTable} from "../updateTable.js";

export const archivedKey = "archived"; // localstorage

export const archive = (id) => {
    const archivedTasks = localStorage.getItem(archivedKey)
        ? [...JSON.parse(localStorage.getItem(archivedKey)), id]
        : [id];
    localStorage.setItem(archivedKey, JSON.stringify([...new Set(archivedTasks)]));

    const archiveUser = data.filter(({id}) => !JSON.parse(localStorage.getItem(archivedKey)).includes(id));

    updateTable(archiveUser);
};