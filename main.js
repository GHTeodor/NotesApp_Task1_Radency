import {fillTableWithData} from "./helpers/fillTableWithData.js";
import {create, formCreate} from "./helpers/buttons/create.js";

formCreate.addEventListener('submit', create);

fillTableWithData();