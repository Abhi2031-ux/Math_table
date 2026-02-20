const input = document.getElementById("number");
const output_sec = document.querySelector('.output_section');

input.addEventListener("input", createTable);
input.value = 2;

createTable();

input.value = 2;


function createTable() {

    if (input.value === 0 || input.value === "") {
        input.value = 1;
    }

    output_sec.innerHTML = "";
    
    for (let i = 1; i < 11; i++) {
        console.log(input.value + " x " + i + " = " + input.value * i);        
        output_sec.innerHTML += `${input.value} x ${i} = ${input.value * i}<br>`;
    }
}
