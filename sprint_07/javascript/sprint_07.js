"use strict";
// Task 01
// Создайте enum с именем WebExt содержащий расширения файлов для изображений в веб - PNG, JPEG, GIF, WEBP. Расширения писать в верхнем регистре. Числовые значения для расширений не вводить. Выведите в консоль для проверки.
var WebExt;
(function (WebExt) {
    WebExt[WebExt["PNG"] = 0] = "PNG";
    WebExt[WebExt["JPEG"] = 1] = "JPEG";
    WebExt[WebExt["GIF"] = 2] = "GIF";
    WebExt[WebExt["WEBP"] = 3] = "WEBP";
})(WebExt || (WebExt = {}));
console.log(WebExt);
// Task 02
// Создайте enum с именем Days, содержащий названия дней недели: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. При этом Monday соответствует число 1, Tuesday число 2 и т.д. Выведите в консоль.
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
console.log(Days);
// Task 03
// Создайте enum с именем CardinalPoints содержащий стороны света: north, south, east, west. Для каждой стороны задайте число north - 12, east - 3, south - 6, west - 9. Выведите в консоль.
var CardinalPoints;
(function (CardinalPoints) {
    CardinalPoints[CardinalPoints["north"] = 12] = "north";
    CardinalPoints[CardinalPoints["east"] = 3] = "east";
    CardinalPoints[CardinalPoints["south"] = 6] = "south";
    CardinalPoints[CardinalPoints["west"] = 9] = "west";
})(CardinalPoints || (CardinalPoints = {}));
console.log(CardinalPoints);
// Task 04
// Создан enums Data_04. Напишите функцию f04, которая получает keys из Data_04 с помощью Object.keys и выводит в .out-4 через пробел. Числовые данные должны быть отфильтрованы.
var Data_04;
(function (Data_04) {
    Data_04[Data_04["Alex"] = 0] = "Alex";
    Data_04[Data_04["Steve"] = 1] = "Steve";
    Data_04[Data_04["Valorie"] = 2] = "Valorie";
    Data_04[Data_04["Hex"] = 3] = "Hex";
})(Data_04 || (Data_04 = {}));
const f04 = () => {
    document.querySelector(".out-4").textContent = String(Object.keys(Data_04)
        .filter((val) => isNaN(Number(val)))
        .join(" "));
};
document.querySelector(".b-4").addEventListener("click", f04);
// Task 05
// Создан enum Wolves. Напишите функцию f05, которая возвращает текстовые характеристики волка в виде массива.
var Wolves;
(function (Wolves) {
    Wolves[Wolves["Intense speed"] = 5] = "Intense speed";
    Wolves[Wolves["Intelligence"] = 3] = "Intelligence";
    Wolves[Wolves["Teleportation"] = 2] = "Teleportation";
    Wolves[Wolves["Bite"] = 10] = "Bite";
})(Wolves || (Wolves = {}));
const f05 = () => {
    return Object.keys(Wolves).filter((val) => !isNaN(Number(Wolves[val])));
};
document.querySelector(".b-5").addEventListener("click", () => {
    console.log(f05());
});
// Task 06
// Создан enum TrafficLight, напишите функцию, которая возращает сокращенное название цветов в виде массива.
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Green"] = "G";
    TrafficLight["Yellow"] = "Y";
    TrafficLight["Red"] = "R";
})(TrafficLight || (TrafficLight = {}));
const f06 = () => {
    return Object.values(TrafficLight);
};
document.querySelector(".b-6").addEventListener("click", () => {
    console.log(f06());
});
// Task 07
// Создайте enum с названием TsTypes, где перечисляются типы данных: number, string, boolean и им соответствуют сокращения num, str, bool. Выведите в консоль.
var TsTypes;
(function (TsTypes) {
    TsTypes["number"] = "num";
    TsTypes["string"] = "str";
    TsTypes["boolean"] = "bool";
})(TsTypes || (TsTypes = {}));
console.log(TsTypes);
// Task 08
// Создайте enum Time которая содержит перечисление hr, min, sec, AM, PM и соответствующее им значения hour, minute, second, Ante Meridiem, Post Meridiem. Выведите в консоль.
var Time;
(function (Time) {
    Time["hr"] = "hour";
    Time["min"] = "minute";
    Time["sec"] = "second";
    Time["AM"] = "Ante Meridiem";
    Time["PM"] = "Post Meridiem";
})(Time || (Time = {}));
console.log(Time);
// Task 09
// Создайте функцию, которая принимает аргумент типа TsTypes, и возвращает, если number - число 1, если string то строку '1', если boolean то true. Тип данных функции укажите самостоятельно.
// enum TsTypes
const f09 = (arg) => {
    if (arg === TsTypes.number) {
        return 1;
    }
    else if (arg === TsTypes.string) {
        return "1";
    }
    else if (arg === TsTypes.boolean) {
        return true;
    }
};
document.querySelector(".b-9").addEventListener("click", () => {
    console.log(f09(TsTypes.boolean));
});
// Task 10
// Создайте enum Roles, содержащий ключи admin со значением 1, writer со значением 5, и user со значением 10. Напишите функцию f10, которая может принимать аргумент - тип Roles и если переданная роль admin или writer то возвращает true, в противном случае - false.
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 1] = "admin";
    Roles[Roles["writer"] = 5] = "writer";
    Roles[Roles["user"] = 10] = "user";
})(Roles || (Roles = {}));
const f10 = (arg) => {
    if (arg === Roles.admin || arg === Roles.writer) {
        return true;
    }
    return false;
};
document.querySelector(".b-10").addEventListener("click", () => {
    console.log(f10(Roles.writer));
});
//# sourceMappingURL=sprint_07.js.map