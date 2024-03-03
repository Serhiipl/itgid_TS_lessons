"use strict";
// Task 01
// Пример из реального фреймворка
// Создан абстрактный класс SignupFormAbstract. Создайте на его основе класс SignupForm (не применяйте конструктор), который реализует свойства и методы абстрактного класса.
// Для метода validatePassword - реализуйте удаление пробелов по краям и вычисление длины.
// Если длина меньше 8 символов, возвращайте false, в остальных случаях - true.
// Значений свойств по умолчанию - пустые строки.
class SignupFormAbstract {
}
class SignupForm extends SignupFormAbstract {
    username = "";
    email = "";
    password = "";
    validatePassword(password) {
        this.password = password.trim();
        if (this.password.length >= 8) {
            return true;
        }
        else {
            return false;
        }
    }
}
const ob_01 = new SignupForm();
// console.log(ob_01.validatePassword("    1234567o   "));
// console.log(ob_01.password);
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// Task 02
// Создан абстрактный класс SignupFormAbstract. Создайте на его основе класс SignupForm_02, который реализуем свойства и методы абстрактного класса.
// Для метода validatePassword - реализуйте удаление пробелов по краям и вычисление длины. Если длина меньше 8 символов, возвращайте false, в остальных случаях - true.
//  Значений свойств по умолчанию - пустые строки. Реализуйте в классе конструктор, который задает значения username, email, password при создании объекта.
class SignupForm_02 extends SignupFormAbstract {
    username = "";
    email = "";
    password = "";
    constructor(username, email, password) {
        super();
        this.username = username;
        this.email = email;
        this.password = password;
    }
    validatePassword(password) {
        this.password = password.trim();
        if (this.password.length >= 8) {
            return true;
        }
        else {
            return false;
        }
    }
}
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// console.log(new SignupForm_02("abba", "abba@email.ua", "234"));
// console.log(user1.validatePassword("@password123")); // Очікується: true
// Task 03
// Пример из реального фреймворка
// Создайте абстрактный класс CF. Класс содержит абстрактные поля name, email, subject, body, verifyCode все string, и абстрактный метод sendEmail, который принимает аргумент email, тип метода boolean.
class CF {
}
// Task 04
// Создайте класс ContactForm на основе класса CF. Свойства реализуйте как пустые строки, добавьте класс конструктор, который позволяет заполнить свойства name, email, subject, body, verifyCode при создании объекта.
// Метод sendEmail, реализуйте как функцию, возвращающую true.
class ContactForm extends CF {
    name = "";
    email = "";
    subject = "";
    body = "";
    verifyCode = "";
    constructor(name, email, subject, body, verifyCode) {
        super();
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.body = body;
        this.verifyCode = verifyCode;
    }
    sendEmail() {
        return true;
    }
}
// const ob_02 = new ContactForm(
//   "igryk",
//   "igryk@example.ua",
//   "Block DIV in our live",
//   "body",
//   "veriryned"
// );
// console.log(ob_02);
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// Task 05
// Пример из реального фреймворка
// Создайте абстрактный класс User, который содержит абстрактные свойства id - number, username - string, email - string, status - number.
//  Напишите абстрактный метод findByUsername, который принимает имя пользователя - username, и возвращает id пользователя или false.
class User {
}
// Task 06
// Создайте на основе абстрактного класса User класс Client, где реализуйте все необходимые свойства и методы. По умолчанию числовые значения равны 0, строковые пустой строке.
// Метод должен возвращать 0. Не применяйте конструктор.
class Client extends User {
    id = 10;
    username = "";
    email = "";
    status = 0;
    findByUsername(username) {
        return this.username === username ? this.id : false;
    }
}
// const ob_03 = new Client();
// ob_03.username = "gor";
// console.log(ob_03.findByUsername("igor"));
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// Task 07
// Пример из реального фреймворка
// Реализуйте абстрактный класс ArticleInstance содержащий абстрактные свойства:
// number article_id
// number author_id
// string language
// number created
// number updated
// string published
// number hits_count
// string intro_text
// string full_text
// string title
// string meta_keywords
// string meta_description
// Добавьте два readonly свойства общие для всех классов наследников PUBLISHED_YES = 'Yes', PUBLISHED_NO = 'No';
class ArticleInstance {
    PUBLISHED_YES = "Yes";
    PUBLISHED_NO = "No";
}
// Task 08
// Создайте на основе абстрактного класса ArticleInstance класс Article, где реализуйте все необходимые свойства и методы.
// По умолчанию числовые значения равны 0, строковые пустой строке. Не применяйте конструктор.
class Article extends ArticleInstance {
    article_id = 0;
    author_id = 0;
    language = "";
    created = 0;
    updated = 0;
    published = "";
    hits_count = 0;
    intro_text = "";
    full_text = "";
    title = "";
    meta_keywords = "";
    meta_description = "";
    PUBLISHED_YES = "Yes";
    PUBLISHED_NO = "No";
}
// const article = new Article();
// article.article_id = 1;
// article.author_id = 2;
// article.language = "en";
// article.created = Date.UTC(
//   new Date().getFullYear(),
//   new Date().getMonth(),
//   new Date().getDay()
// );
// article.updated = Date.now();
// article.published = article.PUBLISHED_YES;
// article.hits_count = 100;
// article.intro_text = "Introduction text";
// article.full_text = "Full article text";
// article.title = "Article Title";
// article.meta_keywords = "keyword1, keyword2";
// article.meta_description = "Article description";
// console.log(article);
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// Task 09
// Пример из реального фреймворка
// Создайте абстрактный класс BundleCSS, содержащий абстрактные свойства:
// sourcePath - строка
// basePath - строка
// baseUrl - строка
// depends - массив строк
// сssOptions - массив строк
// Добавьте абстрактный метод init, void.
// Добавьте абстрактный метод publish, void.
class BundleCSS {
}
// Task 10
// Создайте на базе BundleCSS класс CssBundle, реализуйте свойства и методы. Задайте начальные значения для строк и массивов (пустые строки, пустые массивы). Не применяйте конструктор.
class CssBundle extends BundleCSS {
    sourcePath = "";
    basePath = "";
    baseUrl = "";
    depends = [];
    cssOptions = [];
    init() { }
    publish() { }
}
const cssBundle = new CssBundle();
// Вивід властивостей для перевірки
// console.log("Source Path:", (cssBundle.sourcePath = "./css/"));
// console.log("Base Path:", (cssBundle.basePath = "./javascript/sprint_13.js"));
// console.log("Base URL:", (cssBundle.baseUrl = "./sprint_13.ts"));
// console.log("Depends:", cssBundle.depends);
// console.log("CSS Options:", cssBundle.cssOptions);
//  Виклик методів init та publish для перевірки
// cssBundle.init();
// cssBundle.publish();
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
//# sourceMappingURL=sprint_13.js.map