"use strict";
var flag = true;
// flag = 123; // 错误
flag = false; // 正确
var num = 123;
// num = 'str' // 错误
num = 456; // 正确
var str = 'this is TypeScript';
// str = true // 错误
str = 'Hello World'; // 正确
var arr = [11, 22, 33];
var arr = [11, 22, 33];
var newArr = [123, 'ywl'];
var newArr2 = [1, 2, 3, 'ywl'];
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1.5] = "red";
    Color[Color["orange"] = 2.5] = "orange";
})(Color || (Color = {}));
var a = Color.blue; // 如果没有赋值，默认从下标0开始
console.log(a); // 0
var b = Color.red; // 赋值后，得到的将是所赋值的结果
console.log(b); // 1.5
var c = Color.orange; // 没有指定值的枚举元素，其值为前一元素加1
console.log(c); // 2.5
