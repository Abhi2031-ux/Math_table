const input = document.getElementById("number");
const output_sec = document.querySelector('.output_section');
const table_sec = document.querySelector('.table_sec');
const table_for = document.querySelector('.table');

const plus_sec = document.querySelector('.plus_sec');
const plus_1 = document.getElementById("plus_1");
const plus_2 = document.getElementById("plus_2");
const plus_box_1 = document.querySelector('.plus_box_1');
const plus_box_2 = document.querySelector('.plus_box_2');
const plus_for = document.querySelector('.plus');
const plus_final_ans = document.querySelector('.plus_final_ans');

const mienis_sec = document.querySelector('.mienis_sec');
const mienis_1 = document.getElementById("mienis_1");
const mienis_2 = document.getElementById("mienis_2");
const mienis_box_1 = document.querySelector('.mienis_box_1');
const mienis_box_2 = document.querySelector('.mienis_box_2');
const mienis_for = document.querySelector('.mienis');
const mienis_final_ans = document.querySelector('.mienis_final_ans');


const multi_sec = document.querySelector('.multiply_sec');
const multi_1 = document.getElementById("multi_1");
const multi_2 = document.getElementById("multi_2");
const multi_box_1 = document.querySelector('.multi_box_1');
const multi_box_2 = document.querySelector('.multi_box_2');
const multiply_num_1 = document.querySelector('.multiply_num_1');
const multiply_num_2 = document.querySelector('.multiply_num_2');
const multi_for = document.querySelector('.multi');
const final_answer = document.querySelector('.final_answer');

const answer_1 = document.querySelector('.answer_1');
const answer_2 = document.querySelector('.answer_2');

const calculater_sec = document.querySelector('.calculater_sec');
const calculater_for = document.querySelector('.cal');
const calculater_input = document.getElementById("calculater_input");

input.addEventListener("input", createTable);
input.value = 2;
plus_1.value = 2;
plus_2.value = 2;
mienis_1.value = 4;
mienis_2.value = 2;
multi_1.value = 2;
multi_2.value = 2;

// answer_1.style.display = 'none';
// final_answer.style.display = 'none';


createTable();

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

plus_1.addEventListener("input", createPlus);
plus_2.addEventListener("input", createPlus);
mienis_1.addEventListener("input", createMienis);
mienis_2.addEventListener("input", createMienis);
multi_1.addEventListener("input", createMultiply);
multi_2.addEventListener("input", createMultiply);

function createPlus() {
    plus_box_1.innerHTML = plus_1.value;
    plus_box_2.innerHTML = "+" + plus_2.value;
    plus_final_ans.innerHTML = Number(plus_box_1.innerHTML) + Number(plus_box_2.innerHTML);
}

function createMienis() {
    mienis_box_1.innerHTML = mienis_1.value;
    mienis_box_2.innerHTML = "-" + mienis_2.value;
    mienis_final_ans.innerHTML = Number(mienis_box_1.innerHTML) - Number(mienis_box_2.innerHTML.slice(1));
}

function createMultiply() {
    multiply_num_1.innerHTML = multi_1.value;
    multiply_num_2.innerHTML = multi_2.value;

    // final_answer.style.display = "flex";
    final_answer.innerHTML = ""; // clear old result

    let num1 = multi_1.value;
    let num2 = multi_2.value;

    if (num1.length === 1 || num2.length === 1) {
        final_answer.style.display = "flex";
        final_answer.style.justifyContent = "end";
        final_answer.innerHTML = num1 * num2;
    } else if (num1.length < 20) {
        console.log("what");

        final_answer.style.display = "block";

        let rows = [];

        // reverse second number (for manual multiplication)
        let reversed = num2.split("").reverse();

        reversed.forEach((digit, index) => {
            let partial = num1 * digit;

            // add zeros at end (shift)
            let shifted = partial + "0".repeat(index);

            rows.push(shifted);

            let newDiv = document.createElement("div");
            newDiv.className = `new_row_${index}`;
            newDiv.innerHTML = shifted;

            final_answer.appendChild(newDiv);
        });

        // final sum
        let total = rows.reduce((sum, val) => sum + Number(val), 0);

        let resultDiv = document.createElement("div");
        resultDiv.className = "final_result";
        resultDiv.innerHTML = total;

        final_answer.appendChild(resultDiv);
    } else {
        alert("You maxium add 20 number")
    }
}


function append(value) {
    calculater_input.value += value;
}

function Delete() {
    calculater_input.value = calculater_input.value.slice(0, -1);

}

function clearDisplay() {
    calculater_input.value = "";

}

function calculate() {
    try {
        calculater_input.value = eval(calculater_input.value);

    } catch (error) {
        calculater_input.value = "Error";

    }
}
createPlus()
createMienis()
createMultiply()

table_for.addEventListener("click", () => {
    table_sec.style.display = "block";
    plus_sec.style.display = "none";
    mienis_sec.style.display = "none";
    multi_sec.style.display = "none";
    calculater_sec.style.display = "none";
});

plus_for.addEventListener("click", () => {
    table_sec.style.display = "none";
    plus_sec.style.display = "block";
    mienis_sec.style.display = "none";
    multi_sec.style.display = "none";
    calculater_sec.style.display = "none";
});

mienis_for.addEventListener("click", () => {
    table_sec.style.display = "none";
    plus_sec.style.display = "none";
    mienis_sec.style.display = "block";
    multi_sec.style.display = "none";
    calculater_sec.style.display = "none";
});

multi_for.addEventListener("click", () => {
    table_sec.style.display = "none";
    plus_sec.style.display = "none";
    mienis_sec.style.display = "none";
    multi_sec.style.display = "block";
    calculater_sec.style.display = "none";
});

calculater_for.addEventListener("click", () => {
    table_sec.style.display = "none";
    plus_sec.style.display = "none";
    mienis_sec.style.display = "none";
    multi_sec.style.display = "none";
    calculater_sec.style.display = "flex";
});

// let a = 6;
// console.log("O".repeat(a));

console.log("HELLO WORLD")