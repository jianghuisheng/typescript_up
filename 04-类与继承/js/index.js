"use strict";
// class Person {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   getName(): string {
//     return this.name
//   }
//   setName(name: string): void {
//     this.name = name
//   }
// }
// // var p = new Person('张三')
// // p.setName('李四')
// // console.log(p.getName())
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
// class Me extends Person {
//   constructor(name: string) {
//     super(name)
//   }
//   getName(): string {
//     return '我是' + this.name
//   }
// }
// var man = new Me('王五')
// man.setName('哈哈')
// // console.log(man.getName())
// class Person2 {
//   public name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   getName(): string {
//     return this.name
//   }
//   setName(name: string): void {
//     this.name = name
//   }
// }
// var firstMan = new Person2('wl')
// console.log(firstMan.name)
// console.log(firstMan.getName())
// class Boy extends Person2 {
//   constructor(name: string) {
//     super(name)
//   }
//   getName(): string {
//     return this.name
//   }
// }
// var thirdMan = new Boy('李四')
// console.log(thirdMan.getName())
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var firstMan = new Person('张三');
// name 在类外面不可以访问
console.log(firstMan.name);
// 报错
// name 在类里面可以访问
console.log(firstMan.getName());
// 张三
var Boy = /** @class */ (function (_super) {
    __extends(Boy, _super);
    function Boy(name) {
        return _super.call(this, name) || this;
    }
    Boy.prototype.getName = function () {
        return this.name;
    };
    return Boy;
}(Person));
var thirdMan = new Boy('李四');
// name 在子类里可以访问
console.log(thirdMan.getName());
// 李四
