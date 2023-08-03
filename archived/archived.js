import {fillArchivedTableWithData} from "./helpers/fillArchivedTableWithData.js";
import {fillArchivedModalTableWithData} from "./helpers/fillArchivedModalTableWithData.js";

export const referrerKey = "referrer";
window.addEventListener("beforeunload", () => localStorage.setItem(referrerKey, true));

fillArchivedTableWithData();

fillArchivedModalTableWithData();