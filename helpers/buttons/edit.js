import data from "../../database/data.js";
import {updateTable} from "../updateTable.js";
import {dateFormatter} from "../dateFormatter.js";

export const edit = (id) => {
    const formEdit = document.querySelector("form.edit");
    const noteById = {...data.find((note) => note.id === id)};

    document.querySelector("form.edit div input#editName").value = noteById.name;
    document.querySelector("form.edit div select#editCategory").disabled = true;
    document.querySelector(`form.edit div select#editCategory option[value="${noteById.category}"]`).selected = true;
    document.querySelector("form.edit div input#editContent").value = noteById.content;

    formEdit.addEventListener('submit', (event) => {
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

        const date = dateFormatter(formDataObject.date);
        delete formDataObject.date;

        const editedNote = {
            ...noteById,
            dates: date ? [...noteById.dates, date] : noteById.dates,
            ...formDataObject
        };

        const index = data.findIndex((note) => note.id === id);
        data.splice(index, 1, editedNote);
        formEdit.reset();

        updateTable(data);
    }, {once: true});
};