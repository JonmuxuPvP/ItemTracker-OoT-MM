
const terminaInput = document.getElementById("termina-input");
const terminaDiv = document.getElementById("termina-map");

const hyruleInput = document.getElementById("hyrule-input")
const hyruleDiv = document.getElementById("hyrule-map");

const ocarinaInventories = document.getElementById("ocarina-inventories");
const ocarinaInput = document.getElementById("ocarina-input");

const majorasInventories = document.getElementById("majoras-inventories");
const majorasInput = document.getElementById("majoras-input");

addEvent(terminaInput, terminaDiv);
addEvent(hyruleInput, hyruleDiv);
addEvent(ocarinaInput, ocarinaInventories);
addEvent(majorasInput, majorasInventories);


function addEvent(input, div) {
    input.addEventListener("click", () => {
        if (input.checked) {
            div.classList.remove("display-none");
        } else {
            div.classList.add("display-none");
        }
    });
}