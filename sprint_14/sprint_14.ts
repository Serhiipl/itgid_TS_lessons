// Task 01
// Создайте класс Test со статическим свойством a (number) равное 55.
class Test {
  static a: number = 55;
}

// Проверка
console.log(Test.a);

// Task 02
// Запустите код написанный ниже. Да, статические свойства можно менять, однако лучше не злоупотреблять подобным кодом, ведь статические данные - на то и статические, чтобы не меняться.

Test.a = 99;
console.log(Test.a);

// Task 03
// Создайте класс Test_03 со статическим readonly свойством a (number) равное 222.
class Test_03 {
  static readonly a: number = 222;
}

console.log(Test_03.a);

// Task 04
// В классе можно совмещать свойства обычные и static с одинаковыми именами. Создайте класс Test_04 со свойством x (number) равное 4 и со свойством static x (number) равное 5.

class Test_04 {
  x: number = 4;
  static x: number = 5;
}

// Проверка
console.log(Test_04.x);
let obj_04 = new Test_04();
console.log(obj_04.x);

// Task 05
// Статическими могут быть не только свойства, но и методы. Создайте класс Test_05 со статическим методом avogadro,
// метод возвращает число 6.022. Не забудьте прописать тип метода.
class Test_05 {
  static avogadro(): number {
    return 6.022;
  }
}
// Проверка
console.log(Test_05.avogadro());

// Task 06
// Напишите класс Test_06 со статическим методом perimeter.
// Метод принимает две стороны прямоугольника a, b number и возвращает периметр прямоугольника. Не забывайте про типы данных.

class Test_06 {
  static perimeter(a: number, b: number): number {
    return (a + b) * 2;
  }
}

// Проверка
console.log(Test_06.perimeter(2, 3)); // ожидаем 10

// Task 07
// Статические методы могут использовать другие статические свойства через this. Создайте класс Test_07.
// В нем пропишите статическое свойство passwordLength = 8.
// Создайте статический метод validate, который принимает пароль как аргумент и возвращает true/false если длина пароля больше чем passwordLength. Не забывайте прописывать типы данных.

class Test_07 {
  static passwordLength: number = 8;
  static validate(pass: string): boolean {
    return pass.length > this.passwordLength;
  }
}

// Проверка
console.log(Test_07.validate("abba12345"));

// Task 08
// Статические методы и свойства могут наследоваться. Создайте класс Test_08, который наследуется от класса Test_07. Ничего не пишите в класс. Запустите проверку.

class Test_08 extends Test_07 {}

// Проверка
console.log("Test_08");
console.log(Test_08.validate("abba12345"));

// Task 09
// Создайте класс Test_09, который наследуется от класса Test_07. В классе создайте статическое свойство passwordLength = 10. Запустите проверку.

class Test_09 extends Test_07 {
  static passwordLength: number = 10;
}

// Проверка
console.log(Test_09.passwordLength);
console.log(Test_09.validate("abba12345"));

// Task 10
// Статические свойства могут быть не только public, но и private. Изучите пример.

class Test_10 {
  private static foo: number = 70;
  public static foo10(): number {
    return this.foo * 10;
  }
}

// Проверка
console.log(Test_10.foo10());
