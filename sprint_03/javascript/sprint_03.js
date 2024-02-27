"use strict";
// Task 01
// По нажатию кнопки .b-1 запускается функция f01. Функция должна присвоить переменной s_1 введенный в input.i-1 текст. Тип переменной s_1 задайте самостоятельно. Для проверки выведите s_1 в консоль.
// тут объявляете s_1
let s_1;
function f01() {
    let input = document.querySelector(".i-1");
    if (input) {
        s_1 = input.value;
    }
    console.log(s_1);
}
document.querySelector(".b-1").addEventListener("click", f01);
// Task 02
// По нажатию кнопки .b-2 запускается функция f02. Функция должна присвоить переменной res_2  ЧИСЛО введенное в input.i-2. Тип переменной res_2 задайте самостоятельно. Для проверки выведите res_2 в консоль.
// тут объявляете res_2
let res_2;
function f02() {
    let input = document.querySelector(".i-2");
    if (input) {
        res_2 = +input.value;
    }
    console.log(res_2);
}
document.querySelector(".b-2").addEventListener("click", f02);
// Task 03
// Созданы две переменные n_31 и n_31. Напишите функцию f03, которая присваивает в переменную max_3 большее из данных двух переменных значение. Для проверки выведите max в консоль.
let n_31 = 22;
let n_32 = 44;
// тут объявляем max_3
let max_3;
function f03() {
    max_3 = Math.max(n_31, n_32);
    console.log(max_3);
}
document.querySelector(".b-3").addEventListener("click", f03);
// Task 04
// Напишите функцию, f04, которая получает два ЧИСЛА из input.i-41 и input.i-41 и меньшее присваивает в переменную min_4. Тип данных min_4 определите самостоятельно. Для проверки выведите min_4 в консоль.
// тут объявляем min_4
let min_4;
function f04() {
    let i41 = document.querySelector(".i-41");
    let i42 = document.querySelector(".i-42");
    min_4 = Math.min(+i41.value, +i42.value);
    console.log(min_4);
}
document.querySelector(".b-4").addEventListener("click", f04);
// Task 05
// Напишите функцию, f05, которая проверяет что в input.i-51 и input.i-52 введены числа и при положительном результате проверки в переменную sum_5 кладет результат - сумму данных чисел, при отрицательном результате в переменную error_5 (начальное значение всегда false) кладется значение true. Типы данных определите самостоятельно. Выведите переменные в консоль.
// тут объявляем sum_5
let sum_5;
// тут объявляем error_5
let error_5 = false;
function f05() {
    let i51 = document.querySelector(".i-51");
    let i52 = document.querySelector(".i-52");
    // if (parseInt(i51.value) && parseInt(i52.value)) {
    if (!isNaN(+i51.value) && !isNaN(+i52.value)) {
        // мені здається це правильне рішення, тому що при parseInt() та прикладовим значенням i51 = 2323sdfsdv   console.log(sum_5) => NaN
        sum_5 = +i51.value + +i52.value;
        error_5 = false;
        console.log(sum_5, error_5);
    }
    else {
        error_5 = true;
        console.log(error_5);
    }
}
// }
document.querySelector(".b-5").addEventListener("click", f05);
// Task 06
// Напишите функцию, f06, что проверяет что в input.i-61 и input.i-62 введены строки, которые можно привести к числам. При положительном результате проверки в переменную sum_6 кладет результат - сумму данных чисел, а в переменную error_6 кладем false, при отрицательном результате в переменную error_6 кладется значение true, а в переменную sum_6 кладем 0. Типы данных определите самостоятельно. Переменную sum_6 выведите в .out-6. Переменную error_6 в консоль.
// тут объявляем sum_6
let sum_6;
// тут объявляем error_6
let error_6;
function f06() {
    let i61 = document.querySelector(".i-61");
    let i62 = document.querySelector(".i-62");
    if (parseFloat(i61.value) && parseFloat(i62.value)) {
        sum_6 = parseFloat(i61.value) + parseFloat(i62.value);
        error_6 = false;
    }
    else {
        sum_6 = 0;
        error_6 = true;
    }
    document.querySelector(".out-6").textContent = String(sum_6);
    console.log(error_6);
}
document.querySelector(".b-6").addEventListener("click", f06);
// Task 07
// Функция f07 получает строки из input.i-71 и input.i-72. В переменную max_7 функция должна записать большую из двух строк. Прямым сравнением. Тип переменной max_7 задайте самостоятельно. Выведите переменную max_7 в .out-7.
// тут объявляем max_7
let max_7;
function f07() {
    let i71 = document.querySelector(".i-71");
    let i72 = document.querySelector(".i-72");
    i71.value > i72.value ? (max_7 = i71.value) : (max_7 = i72.value);
    document.querySelector(".out-7").textContent = max_7;
}
document.querySelector(".b-7").addEventListener("click", f07);
// Task 08
// Функция f08 должна прочитать выбранное value из select.s-8 и записать значение в переменную val_8. Тип val_8 определите самостоятельно. Выведите val_8 в .out-8.
let val_8;
function f08() {
    let v8 = document.querySelector(".s-8");
    val_8 = v8.value;
    document.querySelector(".out-8").textContent = val_8;
}
document.querySelector(".b-8").addEventListener("click", f08);
// Task 09
// Создайте переменную val_9 и пропишите ей любое целое число от 2 до 6. Тип данных задайте самостоятельно. Напишите функцию f09, которая будучи запущена сделает option внутри select.s-9 с таким value selected. Значение val_9 выводите в .out-9.
const val_9 = "5";
function f09() {
    let select = document.querySelector(".s-9");
    select.value = val_9;
    document.querySelector(".out-9").textContent = val_9;
}
document.querySelector(".b-9").addEventListener("click", f09);
// //Task 10
// Создайте переменную res_10 тип boolean, значение false. При изменении состояния checkbox.ch-10 изменяйте содержимое переменной res_10. Если checkbox выбран записывайте true, если нет - false. Выводите res_10 в .out-10.
let res_10 = false;
function f10() {
    const chBox = document.querySelector(".ch-10");
    chBox.checked ? (res_10 = true) : (res_10 = false);
    document.querySelector(".out-10").textContent = String(res_10);
}
document.querySelector(".ch-10").addEventListener("change", f10);
// // Task 11
// Создайте переменную res_11 тип number значение 0. При изменении состояния checkbox.ch-11 изменяйте содержимое переменной res_11. Если checkbox выбран записывайте в res_11 значение value, если нет - 0. Выводите res_11 в .out-11.
let res_11 = 0;
function f11() {
    const checkbox = document.querySelector(".ch-11");
    checkbox.checked ? (res_11 = +checkbox.value) : (res_11 = 0);
    document.querySelector(".out-11").textContent = String(res_11);
}
document.querySelector(".ch-11").addEventListener("change", f11);
// // Task 12
// Создайте переменную res_12 тип number значение 0. При нажатии кнопки .b-12 функция должна читать содержимое переменной res_12 и если она равна 1 то делать checkbox.ch-12 состояние checked, если равна нулю сбрасывать состояние checked.
let res_12 = 0;
function f12() {
    const checkB = document.querySelector(".ch-12");
    res_12 === 1 ? (checkB.checked = true) : (checkB.checked = false);
}
document.querySelector(".b-12").addEventListener("click", f12);
// Task 13
// Функция f13 получает из input.i-13 число и выводит в .out-13 строку вида 43210 т.е. от введенного числа до нуля. Если ввели 5, то вывод должен быть 543210.
function f13() {
    let val = "";
    let inp = document.querySelector(".i-13");
    for (let i = Number(inp.value); i >= 0; i--) {
        val += i;
    }
    document.querySelector(".out-13").textContent = val;
}
document.querySelector(".b-13").addEventListener("click", f13);
// Task 14
// Функция f14 получает из input.i-14 число и присваивает переменной res_14 true если введенное число является четным, false если не четным. Переменную res_14 выведите в .out-14.
let res_14;
function f14() {
    let inp = document.querySelector(".i-14");
    if (+inp.value % 2 === 0) {
        res_14 = true;
    }
    else {
        res_14 = false;
    }
    document.querySelector(".out-14").textContent = String(res_14);
}
document.querySelector(".b-14").addEventListener("click", f14);
// Task 15
// Создайте переменную s_15 со значением'cdcdbdcsd'. И переменную res_15. Функция должна считать сколько в переменной s_15 символов 'c'. Количество присваивать в переменную res_15. Функция должна выводить s_15 в .out-151 и res_15 в .out-152.
let s_15 = "cdcdbdcsd";
let res_15 = 0;
function f15() {
    for (let i = 0; i < s_15.length; i++) {
        if (s_15[i] === "c")
            res_15++;
    }
    document.querySelector(".out-151").textContent = s_15;
    document.querySelector(".out-152").textContent = String(res_15);
}
document.querySelector(".b-15").addEventListener("click", f15);
// Task 16
// Создан элемент input.i-16. При вводе символов в него выводите количество введенных символов в переменную res_16. Выводите переменную res_16 в .out-16.
let res_16;
function f16() {
    let inp = document.querySelector(".i-16");
    res_16 = inp.value.length;
    document.querySelector(".out-16").textContent = String(res_16);
}
document.querySelector(".i-16").addEventListener("input", f16);
// Task 17
// Создайте переменную res_17 тип boolean значение false. Создан элемент input.i-17. Функция при нажатии кнопки читает содержимое res_17 и если значение false то делает input.i-17 disabled. Если true - enabled.
let res_17 = false;
function f17() {
    let input = document.querySelector(".i-17");
    !res_17 ? (input.disabled = true) : (input.disabled = false);
}
document.querySelector(".b-17").addEventListener("click", f17);
// Task 18
// Создайте строку переменную s_18 равную '10000'. Создайте переменную count_18 равную 0.  При нажатии кнопки .b-18 запускается функция f18. Функция прибавляет единицу к count_18, а потом s_18[count_18] делает равной единице. Остальные символы строки 0.
// Т.е. когда count = 0 строка выглядит '10000'
// Т.е. когда count = 1 строка выглядит '010000'
// Т.е. когда count = 2 строка выглядит '001000'
// Т.е. когда count = 3 строка выглядит '000100'
// Т.е. когда count = 4 строка выглядит '000010'
// Т.е. когда count = 5 строка выглядит '000001'
// Выведите count_18 в .out-181 и s_18 в .out-182
// тут объявляем
let s_18 = "10000";
let count_18 = 0;
function f18() {
    count_18++;
    let arr = s_18.split("");
    arr[count_18 - 1] = "0";
    arr[count_18] = "1";
    // let char = arr.pop();
    // arr.unshift(char);
    s_18 = arr.join("");
    document.querySelector(".out-181").textContent = String(count_18);
    document.querySelector(".out-182").textContent = s_18;
}
document.querySelector(".b-18").addEventListener("click", f18);
// Task 19
// Создайте с помощью цикла строку s_19 в которой идет ряд 5_x_3_x_1_x_. Т.е. пользователь вводит число, например 5, а функция генерирует строку от 5 до 0 и заменяет четные числа на x. Разделитель подчеркивание. Число функция берет из input.i-19. Выведите строку в .out-19.
let s_19 = "";
function f19() {
    let input = document.querySelector(".i-19");
    for (let i = +input.value; i >= 0; i--) {
        if (i % 2 !== 0) {
            s_19 += `${i}_`;
        }
        else {
            s_19 += `x_`;
        }
    }
    document.querySelector(".out-19").textContent = String(s_19);
}
document.querySelector(".b-19").addEventListener("click", f19);
// Тask 20
// Создайте переменную s_20 куда положите значение нуль. При нажатии кнопки запускается функция f20, которая получает число с .i-20 и считает сумму ряда чисел от введеного до нуля. Например введено 5, искомая сумма 5 + 4 + 3 + 2 + 1. Сумма присваивается в s_20. Выведите s_20 в .out-20.
let s_20 = 0;
let input = document.querySelector(".i-20");
function f20() {
    for (let i = +input.value; i > 0; i--) {
        s_20 += i;
    }
    document.querySelector(".out-20").textContent = String(s_20);
    s_20 = 0;
}
document.querySelector(".b-20").addEventListener("click", f20);
//# sourceMappingURL=sprint_03.js.map