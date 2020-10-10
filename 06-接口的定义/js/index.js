"use strict";
// interface FullName {
//   firstName: string
//   secondName?: string
// }
var MD5 = function (key, value) {
    return key + value;
};
console.log(MD5('username', 'password'));
// var arr1:UserArr = [123,456]
var arr2 = ['Lucy', 'Augus'];
// var obj1: UserObj = { age: 20 }
var obj2 = { age: '20' };
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    // 可以不传参数，但是必须要定义方法
    Dog.prototype.eat = function (food) {
        console.log(this.name + '吃' + food);
    };
    return Dog;
}());
var dog = new Dog('小黑');
dog.eat('肉');
