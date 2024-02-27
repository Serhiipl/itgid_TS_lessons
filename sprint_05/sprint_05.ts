// Task 01
// Напишите стрелочную функцию f01 принимающую два параметра - числа и возвращающая их произведение. Тип функций, аргументов во всех задачах спринта - прописываете самостоятельно.

const f01 = (a: number, b: number): number => a * b;

document.querySelector(".b-1").addEventListener("click", (): void => {
  document.querySelector(".out-1").textContent = String(f01(3, 4));
});

// Task 02
// Напишите стрелочную функцию f02 которая принимает строку и возвращает ее очищенную по краям (от пробелов), и приведенную к нижнему регистру. Тип функций, аргументов во всех задачах спринта - прописываете самостоятельно.

const f02 = (a: string): string => a.toLowerCase().trim();

document.querySelector(".b-2").addEventListener("click", (): void => {
  const result: string = f02("  Vladimir Harkonnen  ");
  document.querySelector(".out-2").textContent = result;
  console.log(result);
});

// Task 03
// Напишите стрелочную функцию f03 которая принимает строку и возвращает ее очищенную по краям (от пробелов), и приведенную к нижнему регистру. Предусмотрите что аргумент может быть не обязательный - в таком случае функция возвращает пустую строку. Тип функций, аргументов во всех задачах спринта - прописываете самостоятельно.

const f03 = (a?: string): string => {
  if (a) return a.toLowerCase().trim();
  return "";
};

document.querySelector(".b-3").addEventListener("click", (): void => {
  const result: string = f03(" Paul Atreides ");
  document.querySelector(".out-3").textContent = result;
  console.log(result);
  console.log(result.length);
});

// Task 04
// Напишите стрелочную функцию f04, которая принимает число - и возвращает true если число четное, и false в противном случае. Тип функций, аргументов во всех задачах спринта - прописываете самостоятельно.
// prettier-ignore
const f04 = (a: number): boolean => a % 2 === 0 ? true : false;

document.querySelector(".b-4").addEventListener("click", (): void => {
  document.querySelector(".out-4").textContent = String(f04(3));
});

// Task 05
// Напишите стрелочную функцию f05 которая принимает класс input и возвращает ЧИСЛО введенное в данный input. Тип функций, аргументов во всех задачах спринта - прописываете самостоятельно.

const f05 = (a: string): number => {
  let inp = document.querySelector(a) as HTMLInputElement;
  return Number(inp.value);
};

document.querySelector(".b-5").addEventListener("click", (): void => {
  document.querySelector(".out-5").textContent = String(f05(".i-5"));
});

// Task 06
// Напишите стрелочную функцию - процедуру f06 которая получает строки из .i-61 и .i-62 и выводит в .out-6 большую строку. Тип данных для стрелочной функции пропишите самостоятельно.

const f06 = (): void => {
  let inp1 = document.querySelector(".i-61") as HTMLInputElement;
  let inp2 = document.querySelector(".i-62") as HTMLInputElement;
  let bigestVal: string = inp1.value > inp2.value ? inp1.value : inp2.value;
  document.querySelector(".out-6").textContent = bigestVal;
};

document.querySelector(".b-6").addEventListener("click", f06);

// Task 07
// Напишите стрелочную функцию f07 которая получает email и проверяет что срока содержит символ '@'. Если содержит то, возвращает строку, приведенную к нижнему регистру и с обрезанными по краям пробелами. Если строка не содержит @, то возвращает false. Тип функций, аргументов во всех задачах спринта - прописываете самостоятельно.

const f07 = (a: string): string | boolean => {
  if (a.includes("@")) {
    return a.toLowerCase().trim();
  }
  return false;
};

document.querySelector(".b-7").addEventListener("click", (): void => {
  document.querySelector(".out-7").textContent = String(
    f07(" glossuRaBBan@mail.ru ")
  );
});

// Task 08
// Напишите стрелочную функцию f08 которая получает два числа как аргументы и возвращает случайное целое число в указанном диапазоне. Задайте параметрам значение по умолчанию 0 и 100. Тип функций, аргументов во всех задачах спринта - прописываете самостоятельно.

const f08 = (a: number = 0, b: number = 100): number => {
  return Math.floor(Math.random() * (b - a + 1) + a);
};

document.querySelector(".b-8").addEventListener("click", (): void => {
  document.querySelector(".out-8").textContent = String(f08(100, 110));
});

// Task 09
// Напишите стрелочную функцию f09 которая возвращает строку вида 'rgb(xxx,xxx,xxx)', где xxx - случайные числа от 0 до 255 генерируемые функцией f08. Тип функций, аргументов во всех задачах спринта - прописываете самостоятельно.

const f09 = (): string => {
  return `rgb(${f08(0, 255)},${f08(0, 255)},${f08(0, 255)})`;
};

document.querySelector(".b-9").addEventListener("click", (): void => {
  const color: string = f09();
  (<HTMLElement>document.querySelector(".out-9")).style.backgroundColor = color;
  document.querySelector(".out-9").textContent = color;
});

// Task 10
// Напишите стрелочную функцию f10 которая при каждом клике увеличивает переменную angle на 30, а потом присваивает блоку .out-10 свойство transform: rotate(angledeg) где angle - значение из переменной angle. Тип функций, аргументов во всех задачах спринта - прописываете самостоятельно.

let angle: number = 0;

const f10 = (): void => {
  angle += 30;
  (<HTMLElement>(
    document.querySelector(".out-10")
  )).style.transform = `rotate(${angle}deg)`;
};

document.querySelector(".b-10").addEventListener("click", f10);
