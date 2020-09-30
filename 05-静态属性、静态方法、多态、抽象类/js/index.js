"use strict";
// class Person {
//   public name: String
//   constructor(name: String) {
//     this.name = name
//   }
//   run() {
//     console.log(`${this.name}在运动`)
//   }
//   work() {
//     console.log(`${this.name}在工作`)
//   }
//   // 静态属性
//   static age: number = 30
//   // 静态方法
//   static eat() {
//     console.log(`他在喝水`)
//     // 静态方法不能访问当前类里的属性
//     // 只能访问类里的静态属性
//     console.log(Person.age)
//   }
// }
// Person.eat()
// let Bom = new Person('Bom')
// Bom.run()
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   eat() {
//     console.log('这是一个吃的方法')
//   }
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat() {
//     console.log(`${this.name}吃肉`)
//   }
// }
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat() {
//     console.log(`${this.name}吃鱼`)
//   }
// }
// let Dogs = new Dog('Dog')
// let Cats = new Dog('Cat')
// console.log(Dogs.eat())
// console.log(Cats.eat())
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + "\u5403\u8089");
    };
    return Dog;
}(Animal));
var dog = new Dog('小黑');
console.log(dog.eat());
