// Task 01
// Создайте массив чисел ar_1 содержащих элементы  77, 88, 99 в таком же порядке как указано. Тип укажите самостоятельно. Выведите в консоль.

const ar_1: number[] = [77, 88, 99];

// Task 02
// Создайте массив чисел ar_2 содержащих элементы 99, 100, 110 в таком же порядке как указано. Тип укажите самостоятельно. Выведите в .out-2 разделитель знак подчеркивания. В этой и далее задачах с разделителем приемлемым будет ответ и 99_100_110_ и 99_100_110.

const ar_2: number[] = [99, 100, 110];

let out: number[] = [];
ar_2.forEach((i) => {
  out.push(i);
});
document.querySelector(".out-2").textContent = out.join("_");

// Task 03
// Создайте массив ar_3, состоящий из строк 'Hello', 'Hi', 'Trust'. Тип данных укажите самостоятельно. Напишите функцию, f03, которая фильтрует массив ar3, возвращая новый массив, в котором находятся элементы длиной не менее 4 символов.

const ar_3: string[] = ["Hello", "Hi", "Trust"];

let f03 = (a: string[]): string[] => {
  const filteredArr = ar_3.filter((i) => i.length >= 4);
  return filteredArr;
};

document.querySelector(".b-3").addEventListener("click", (): void => {
  document.querySelector(".out-3").textContent = f03(ar_3).join(" ");
});

// Task 04
// Создайте массив ar_4 состоящий из чисел. Заполните значениями самостоятельно. Напишите функцию f04, которая принимает массив как аргумент, и возвращает сумму элементов массива. Тип данных функции напишите самостоятельно.

const ar_4: number[] = [5, 4, 7, 7, 8, 9];

let f04 = (a: number[]): number => {
  return a.reduce((acc, i) => acc + i, 0);
};

document.querySelector(".b-4").addEventListener("click", (): void => {
  document.querySelector(".out-4").textContent = String(f04(ar_4));
});

// Task 05
// Создайте функцию, которая выводит массив ar_5 в .out-5. Вывод осуществляйте циклом. Разделитель - дефис.

const ar_5: number[] = [];
ar_5[2] = 333;
ar_5[4] = 777;

let f05 = (): void => {
  let out = [];

  for (let i of ar_5) {
    out.push(i);
  }
  document.querySelector(".out-5").textContent = out.join("-");
};

document.querySelector(".b-5").addEventListener("click", f05);

// Task 06
// Напишите функцию, f06, которая создает массив состоящий только из чисел массива ar_06 и возвращает его.

const ar_06: (number | boolean)[] = [1, false, 2, true, 5, false];

let f06 = (): number[] => {
  let outArr: number[] = [];

  for (let i of ar_06) {
    if (typeof i === "number") {
      outArr.push(i);
    }
  }
  console.log(outArr);
  return outArr;
};

document.querySelector(".b-6").addEventListener("click", (): void => {
  document.querySelector(".out-6").textContent = f06().join("=");
});

// Task 07
// Создайте readonly массив ar_07 содержащий всего два значения true, false. Тип задайте самостоятельно. Выведите массив в консоль.

const ar_07: readonly boolean[] = [true, false];

// Task 08
// Создайте функцию, которая читает число из input.i-8 и если число четное, то делает его push в массив ar_08, если не четное то unshift в массив. Массив создайте глобально по отношению к функции. Результат - выводите в .out-8, разделитель - подчеркивание.

const ar_08: number[] = [];
const input8 = <HTMLInputElement>document.querySelector(".i-8");

let f08 = (): void => {
  let iValue: number = +input8.value;
  iValue % 2 == 0 ? ar_08.push(iValue) : ar_08.unshift(iValue);
  document.querySelector(".out-8").textContent = ar_08.join("_");
};

document.querySelector(".b-8").addEventListener("click", f08);

// Task 09
// Создайте функцию, которая принимает целое число n как аргумент и возвращает массив длиной n наполненный случайными числами от 0 до 10.

let f09 = (a: number): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < a; i++) {
    arr.push(Math.floor(Math.random() * 11));
  }
  return arr;
};

document.querySelector(".b-9").addEventListener("click", (): void => {
  document.querySelector(".out-9").textContent = f09(4).join("_");
});

// Task 10
// Создайте функцию, которая принимает массив ar_10 и возвращает два массива, первый из которых содержит только четные числа из исходного массива, а второй только нечетные числа.

let f10 = (ar: number[]): number[][] => {
  let ar101: number[][] = [[], []];
  ar.filter((el: number) =>
    el % 2 == 0 ? ar101[0].push(el) : ar101[1].push(el)
  );

  return ar101;
};

document.querySelector(".b-10").addEventListener("click", (): void => {
  const ar_10: number[] = [22, 33, 44, 55, 66, 66, 88, 77];
  document.querySelector(".out-101").textContent = f10(ar_10)[0].join("_");
  document.querySelector(".out-102").textContent = f10(ar_10)[1].join("_");
});

// Task 11
// Создайте функцию, которая выводит в .out-11 одномерный массив ar_11. Если в массиве встречается число 1, то на выводе оно заменяется на 'X' - латинскую X в верхнем регистре. Разделитель - пробел.

const ar_11: number[] = [1, 0, 0, 0, 0];

let f11 = (): void => {
  const arr111: (string | number)[] = [];
  for (let el of ar_11) {
    el === 1 ? arr111.push("X") : arr111.push(el);
  }
  document.querySelector(".out-11").textContent = arr111.join(" ");
};

document.querySelector(".b-11").addEventListener("click", f11);

// Task 12
// Создайте функцию, которая выводит в .out-12 одномерный массив ar_12. Если в массиве встречается число 1, то на выводе оно заменяется на 'X' - латинскую X в верхнем регистре. Разделитель - пробел. При нажатии кнопки значение 1 в массиве должно смещаться вправо, а старое положение заменять на 0. Положение единицы определяется счетчиком count.

const ar_12: number[] = [1, 0, 0, 0, 0];
let count: number = 0;

let f12 = (): void => {
  const arr112: (string | number)[] = [];
  if (count <= ar_12.length - 1) {
    ar_12[count] = 1;
    ar_12[count - 1] = 0;
    count++;
  } else {
    count = 0;
    ar_12[ar_12.length - 1] = 0;
    ar_12[count] = 1;
    count++;
  }
  for (let el of ar_12) {
    el === 1 ? arr112.push("X") : arr112.push(el);
  }
  document.querySelector(".out-12").textContent = arr112.join(" ");
};

document.querySelector(".b-12").addEventListener("click", f12);

// Task 13
//  Создайте функцию которая в массиве ar_13 заменяет числа 1 на 0, а 0 на 1. Выводит массив на страницу, разделитель между элементами - пробел, разделитель между строками перенос строки.

const ar_13: number[][] = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];

let f13 = (): void => {
  const nArr: number[][] = [];
  for (let i of ar_13) {
    const nRow: number[] = [];
    for (let j of i) {
      if (j == 1) {
        nRow.push(0);
      } else if (j == 0) {
        nRow.push(1);
      }
    }
    nArr.push(nRow);
  }
  let out: string = nArr.map((nRow) => nRow.join(" ")).join("\n");
  document.querySelector(".out-13").textContent = out;
  console.log(out);
};

document.querySelector(".b-13").addEventListener("click", f13);

// Task 14
// Создайте кортеж k14 тип данных string, string и заполните его 'type', 'script'. Для проверки выведите в консоль.

const k14: [string, string] = ["type", "script"];
console.log(k14);

// Task 15
// Создайте кортеж k15 тип данных number, number и заполните его числами 77, 99. Для проверки выведите в консоль.

const k15: [number, number] = [77, 99];
console.log(k15);

// Task 16
// Создан кортеж k16. Напишите функцию, которая меняет в нем числа - добавляет к каждому числу по 10 и выводит в .out-16 сумму элементов кортежа.

const k16: [number, number] = [77, 88];

let f16 = (): void => {
  document.querySelector(".out-16").textContent = String(
    k16.map((i) => i + 10).reduce((acc, i) => acc + i, 0)
  );
};

document.querySelector(".b-16").addEventListener("click", f16);

// Task 17
// Создан кортеж k17. Напишите функцию, которая выводит в .out-17 сумму элементов кортежа. Обратите внимание - количество элементов кортежа при проверке может меняться.

let k17: [...number[]] = [2, 2, 3, 4];

let f17 = (): void => {
  let out: number = k17.reduce((acc, i) => acc + i, 0);
  document.querySelector(".out-17").textContent = String(out);
};

document.querySelector(".b-17").addEventListener("click", f17);

// Task 18
// Создан кортеж k18 readonly тип boolean, содержащий элемент true, false. Напишите функцию f18, которая выводит в .out-18 значения кортежа через пробел. Кортеж объявлен глобально по отношению к функции.

let k18: readonly [boolean, boolean] = [true, false];

let f18 = (): void => {
  document.querySelector(".out-18").textContent = k18.join(" ");
};

document.querySelector(".b-18").addEventListener("click", f18);

// Task 19
// Создан кортеж k19 readonly тип boolean, содержащий элемент true, false. Напишите функцию f19, которая выводит в .out-19 длину кортежа. Кортеж объявлен глобально по отношению к функции.

let k19: readonly [boolean, boolean] = [true, false];

let f19 = () => {
  document.querySelector(".out-19").textContent = k19.length.toString();
};

document.querySelector(".b-19").addEventListener("click", f19);

// Task 20
// Создайте кортеж k20, содержащий массив чисел [2, 3]. Выведите в консоль.

const k20: [number, number] = [2, 3];
console.log(k20);
