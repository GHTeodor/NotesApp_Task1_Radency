import {updateTable} from "../updateTable.js";
import data from "../../database/data.js";
import {archivedKey} from "./archive.js";

export const remove = (id) => {
    const index = data.findIndex(n => n.id === id);
    data.splice(index, 1);

    const archivedTasks = JSON.parse(localStorage.getItem(archivedKey));
    const filterArchivedUsers = data.filter(({id}) => !archivedTasks?.includes(id));

    updateTable(filterArchivedUsers);
};