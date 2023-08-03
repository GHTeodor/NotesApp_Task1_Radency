import {getCurrentDateFormatted} from "../dateFormatter.js";
import {updateTable} from "../updateTable.js";
import data from "../../database/data.js";

export const formCreate = document.querySelector("form.create");

export const create = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
        const regexName = /^[a-zA-Z\s]{2,20}$/;
        const regexCategory = /^[a-zA-Z\s]{2,20}$/;
        const regexContent = /^[\w\s\d.,;:?!]{2,200}$/;

        if (!regexName.test(formDataObject.name)) throw new Error("Name is required.\nLength 2-20 Symbols.\nEn.");
        if (!regexCategory.test(formDataObject.category)) throw new Error("Category is required.\nLength 2-20 Symbols.\nEn.");
        if (!regexContent.test(formDataObject.content)) throw new Error("Content is required.\nLength 2-200 Symbols.\nEn+digits.");
    } catch (e) {
        return alert(e.message);
    }
    
    const newNote = {
        id: data[data.length - 1].id + 1 || 1,
        created: getCurrentDateFormatted(),
        dates: [],
        ...formDataObject
    };

    data.push(newNote);
    formCreate.reset();

    updateTable(data);
};