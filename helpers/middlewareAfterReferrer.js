import data from "../database/data.js";
import {archivedKey} from "./buttons/archive.js";

export const middlewareAfterReferrer = (notesList) => {
    if (notesList.toString() === data.toString()) {
        if (!localStorage.getItem("referrer")) {
            localStorage.clear();
        } else {
            localStorage.removeItem("referrer");

            const archivedIds = JSON.parse(localStorage.getItem(archivedKey));

            if (archivedIds?.length)
                return notesList.filter(({id}) => !archivedIds.includes(id));
        }
    }
};