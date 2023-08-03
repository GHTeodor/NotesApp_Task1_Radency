import {fillTableWithData} from "./fillTableWithData.js";

export const updateTable = (data) => {
    document.querySelector("table").removeChild(document.querySelector("table tbody"));
    document.querySelector("table").appendChild(document.createElement("tbody"));
    fillTableWithData(data);
};