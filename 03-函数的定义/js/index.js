"use strict";
// function run(): string {
//   return 'abc'
// }
function getInfo(str) {
    if (typeof str == 'string') {
        return '我叫' + str;
    }
    else {
        return '我的年龄是' + str;
    }
}
// function getInfo(name: string, age?: any): any {
//   if (age) {
//     return '我叫' + name + ',我的年龄是' + age
//   } else {
//     return '我叫' + name
//   }
// }
console.log(getInfo('张三'));
console.log(getInfo(30));
