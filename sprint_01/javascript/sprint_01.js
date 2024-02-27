"use strict";
// Task 01
// Создайте константу p_01 (строка) содержащую строку 'type script'. Выведите в консоль.
const p_01 = "type script";
console.log(p_01);
// Task 02
// Создайте константу p_02 (строка) содержащую пустую строку. Выведите p_02 в консоль.
const p_02 = "";
console.log(p_02);
// Task 03
//Созданы две константы s_031 и s_032. Создайте константу s_3 и присвойте ей конкатенацию констант s_031 и s_032. Тип данных s_3 задайте явно. Для проверки - выведите s_3 в консоль.
const s_031 = "uno";
const s_032 = " pomidorro";
const s_3 = s_031 + s_032;
console.log(s_3);
// Task 04
// Создайте две константы (number) c именем n_041 и n_042. Присвойте им числа 22 и 44. Создайте переменную s_04 куда положите произведение (умножение) чисел n_041 и n_042. Тип данных s_04 задайте явно. Выведите результат в .out-4.
const n_041 = 22;
const n_042 = 44;
const s_04 = n_041 * n_042;
document.querySelector(".out-4").textContent = String(s_04);
// Task 05
// Созданы две константы n_051 и n_052. Создайте переменную s_05 куда положите сумму чисел n_051 и n_052. Выведите результат в .out-5. При необходимости выполните приведение типов данных.
const n_051 = "33";
const n_052 = 22;
const s_05 = +n_051 + n_052;
console.log(s_05);
document.querySelector(".out-5").innerHTML = String(s_05);
// Task 06
// Создана переменная k_06 с типом данных any. Выведите в консоль ее тип данных.
let k_06;
console.log(typeof k_06);
// Task 07
// Создана переменная k_07 с типом данных any. Значение ей не задано. Допишите строку где присвойте переменной k_07 число 101. Выведите в консоль тип данных переменной k_07. Выведите на страницу в .out-7 значение переменной k_07.
let k_07;
// тут новая строка с привоением
k_07 = 101;
console.log(typeof k_07);
document.querySelector(".out-7").textContent = k_07;
// Task 08
// Создайте константу p_08 равную 0.07 и константу t_08 равную 0.04. Создайте переменную res_8 куда положите сумму данных констант. Тип данных - определите самостоятельно, явно. Результат выведите в .out-8.
const p_08 = 0.07;
const t_08 = 0.04;
const res_8 = p_08 + t_08;
document.querySelector(".out-8").textContent = String(res_8);
// Task 09
// Созданы константы p_09 и t_09. Выведите их сумму в .out-9.
const p_09 = 200;
const t_09 = 400;
document.querySelector(".out-9").innerHTML = String(p_09 + t_09);
//Task 10
// Получите в переменную p_10 (тип number) число из .p-10. Переменную выведите в консоль.
const p_10 = +document.querySelector(".p-10").innerHTML;
console.log(p_10);
// Task 11
// Создайте константу p_11 и получите в нее число из .p-11. Константу выведите в консоль.
const p_11 = parseInt(document.querySelector(".p-11").innerHTML);
console.log(p_11);
// Task 12
// Создайте константу p_12 и получите в нее число из .p-12. Константу выведите в консоль.
const p_12 = parseFloat(document.querySelector(".p-12").innerHTML);
console.log(p_12);
// Task 13
// Создайте переменную n_13 тип число, без присвоения значения и переменную s_13 тип строка без присвоения значения. Получите из .p-13 данные. Если данные можно привести к числу то, присвойте число в n_13. Если строка - то присвойте строку в s_13. Выведите в консоль n_13, s_13.
let n_13;
let s_13;
let inputItem = document.querySelector(".p-13").innerHTML;
isNaN(parseInt(inputItem)) ? (s_13 = inputItem) : (n_13 = inputItem);
console.log(n_13);
console.log(s_13);
// Task 14
// Создайте переменную b_14 с типом данных boolean. Не присваивайте ей значения. Выведите в консоль содержимое переменной и тип данных.
let b_14;
console.log(b_14);
console.log(typeof b_14);
// Task 15
// Создайте переменную b_15 с типом данных boolean и значением false. Выведите в .out-15 содержимое переменной b_15.
let b_15 = false;
document.querySelector(".out-15").textContent = String(b_15);
// Task 16
// Созданы две константы b_161 и b_162. Создайте константу b_16 куда поместите && данных констант. Тип данных определите самостоятельно. Результат выведите в консоль.
const b_161 = true;
const b_162 = false;
const b_16 = b_161 && b_162;
console.log(b_16);
// Task 17
// Созданы две константы b_171 и b_172. Создайте константу b_17 куда поместите || данных констант. Тип данных определите самостоятельно. Результат выведите в .out-17.
const b_171 = true;
const b_172 = false;
const b_17 = b_171 || b_172;
console.log(b_17);
// Task 18
// Создайте переменную b_18, тип boolean, значение false. Создайте переменную b_negative куда поместите ! (отрицание) переменной b_18. Выведите результат в консоль.
let b_18 = false;
let b_negative = !b_18;
console.log(b_negative);
// Task 19
// Создайте переменную b_19, тип boolean и поместите в нее значение из .p-19. Выведите в консоль.
let b_19 = Boolean(document.querySelector(".p-19").textContent);
console.log(b_19);
// Тask 20
// Создайте переменную b_20, тип boolean и поместите в нее значение из .p-20 (число из .p-20). Выведите в консоль.
let b_20 = Boolean(+document.querySelector(".p-20").innerHTML);
console.log(b_20);
//# sourceMappingURL=sprint_01.js.map