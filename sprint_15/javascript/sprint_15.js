"use strict";
// Task 01
// Интерфейсы в TS могут выполнять функцию описания структуры объектов, создавать кастомизированные типы. Давайте сделаем несколько примеров.
// Создайте интерфейс IGoods, который описывает свойства title - string, amount - number, color - string (не обязательный).
const article = {
    title: "burger",
    amount: 25,
    colour: "red",
};
const ppperson = {
    id: 76,
    username: "Fernando",
    password: "qwerty1",
    hash: "sdf34iwr4",
    created: 1231231,
};
const obj_31 = {
    message_id: 32546,
    user_id: 25654,
    username: "Скринька Пандори",
    time: "2024-01-31 17:45:25",
    body: "Країни ЄС цього року нададуть...",
};
const obj_32 = {
    message_id: 3876214,
    user_id: 657412,
    username: "ITGid - info",
    time: "2024-01-29 08:25:15",
    body: "Небольшой анонс на сегодня...",
};
const clock = {}; // не изменяйте данную строку.
clock.h = 21;
clock.m = 31;
clock.s = 59;
const shoes = {
    title: "Boot",
    amount: 450,
    size: [39, 40, 41, 42, 43, 44, 45],
};
const sneakers = {
    color: ["red", "green", "blue"],
    title: "Skechers",
    amount: 200,
    size: [40, 41, 42, 43, 44],
};
const shopCart = {
    addToCart() {
        return 44;
    },
    clearCart() { },
};
const rect_01 = {
    a: 2,
    b: 3,
    area() {
        return this.a * this.b;
    },
};
// console.log(rect_01.area());
// Для проверки создайте объект rect_01 на базе интерфейса IRect, задайте размеры и реализуйте area(). После проверки - закомментируйте объект.
// Task 09
// Создадим абстрактный класс, ARect, который описывает геометрическую фигуру. Абстрактный класс содержит два абстрактных свойства a, b (числа) и метод area (не абстрактный), который возвращает this.a * this.b - число.
// Обратите внимание - мы реализовали метод в абстрактном классе, в интерфейсе реализация невозможна.
class ARect {
    area() {
        return this.a * this.b;
    }
}
// Task 10
// Повторим то, что прошли. Создайте на основе абстрактного класса ARect класс Rectangular.
// Добавьте конструктор, который принимает два числа и заполняет свойства a, b.
// Создайте на базе класса объект со сторонами 0.5 и 20 и выведите полученную площадь в консоль. После проверки - закомментируйте код создания объекта.
class Rectangular extends ARect {
    a;
    b;
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
}
class Paragraph {
    tag;
    paired;
    text;
    getWidth() {
        return 0;
    }
}
// Task 14
// Создайте класс Rect, который имплементирует интерфейсы IFigureA, IFigureB и реализует методы getSquare, getPerimeter.
class Rect {
    a;
    b;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getSquare() {
        return this.a * this.b;
    }
    getPerimeter() {
        return this.a * 2 + this.b * 2;
    }
}
const obj_14 = new Rect(5, 4);
console.log("area " + obj_14.getSquare());
console.log("perimetr " + obj_14.getPerimeter());
// Для проверки, на базе класса создайте объект obj_14, со сторонами 5 и 4 и выведите его площадь и периметр.
// Task 15
// Создан Абстрактный класс AExample. Напишите интерфейс IExample, который соответствует его структуре.
class AExample {
    src = "";
    format;
    alt = "";
    title = "";
    width = 100;
    widthUnits = "%";
    render() {
        const img = document.createElement("img");
        img.src = this.src;
        img.alt = this.alt;
        img.title = this.title;
        img.style.width = this.width + this.widthUnits;
        return img;
    }
}
//# sourceMappingURL=sprint_15.js.map