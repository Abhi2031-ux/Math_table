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
    } else if (num1.length < 20 ) {
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

// function createMultiply() {
//     multiply_num_1.innerHTML = multi_1.value;
//     multiply_num_2.innerHTML = multi_2.value;

//     final_answer.style.display = "flex";

//     if (multiply_num_1.innerHTML.length === 1 || multiply_num_2.innerHTML.length === 1) {
//         final_answer.innerHTML = multi_1.value * multi_2.value;
//     } else {
//         for (let i = 1; multiply_num_2.innerHTML.length > i; i++) {
//             let newDiv = document.createElement("div");
//             newDiv.className = `new_row_${i}`;
//             newDiv.innerHTML = "1";
//             final_answer.insertAdjacentElement("beforebegin", newDiv);
//             console.log("row", i);
//         }

//         console.log("amamamamam")
//     }


//     // let new_multi_box = multi_box_2.innerHTML.slice(1)
//     // console.log(new_multi_box);

//     // if(multi_box_2.innerHTML.length == 3) {
//     //     console.log("multi_box_2 has 1 digit");

//     //     for (let i = 1; i < new_multi_box.length + 1; i++) {
//     //         let newDiv = document.createElement("div");
//     //         newDiv.className = `new_row_${i}`;
//     //         newDiv.innerHTML = "1";
//     //         final_answer.insertAdjacentElement("beforebegin", newDiv);
//     //         console.log("row", i);
//     //     }
//     // }


//     // if (multi_2.value.length == 1) {
//     //     answer_1.innerHTML = multi_1.value * multi_2.value;
//     //     final_answer.style.display = "none";
//     //     answer_2.style.display = "none";

//     // } else if (multi_2.value.at(-1) == 0) {
//     //     a = multi_1.value.length;
//     //     answer_1.innerHTML = "0".repeat(a);
//     //     answer_2.style.display = "flex";
//     //     final_answer.style.display = "flex";

//     //     answer_2.innerHTML = multi_2.value[0] * multi_1.value + "x";

//     //     num_1 = Number(answer_1.innerHTML);
//     //     console.log(num_1);
//     //     num_2 = Number(answer_2.innerHTML.slice(0, -1) + "0");

//     //     if (answer_1.innerHTML.at(-1) == "0") {
//     //         final_answer.innerHTML = num_1 + num_2;
//     //     }

//     //     console.log("num_1 is: ", num_1);
//     //     console.log("num_2 is: ", num_2);

//     // } else if (multi_2.value.length == 2) {
//     //     final_answer.style.display = "flex";

//     //     if (answer_1.innerHTML.at(-1) != "0") {
//     //         num_1 = Number(answer_1.innerHTML);
//     //         final_answer.innerHTML = num_1 + num_2;
//     //     }

//     // }
// }

createPlus()
createMienis()
createMultiply()

table_for.addEventListener("click", () => {
    table_sec.style.display = "block";
    plus_sec.style.display = "none";
    mienis_sec.style.display = "none";
    multi_sec.style.display = "none";
});

plus_for.addEventListener("click", () => {
    table_sec.style.display = "none";
    plus_sec.style.display = "block";
    mienis_sec.style.display = "none";
    multi_sec.style.display = "none";
});

mienis_for.addEventListener("click", () => {
    table_sec.style.display = "none";
    plus_sec.style.display = "none";
    mienis_sec.style.display = "block";
    multi_sec.style.display = "none";
});

multi_for.addEventListener("click", () => {
    table_sec.style.display = "none";
    plus_sec.style.display = "none";
    mienis_sec.style.display = "none";
    multi_sec.style.display = "block";
});

// let a = 6;
// console.log("O".repeat(a));

console.log("HELLO WORLD")