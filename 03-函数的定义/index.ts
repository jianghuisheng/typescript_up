// function run(): string {
//   return 'abc'
// }

// var func = function (): number {
//   return 123
// }
// func()

// function getInfo(name: string, age: number): string {
//   return `${name} --- ${age}`
// }
// getInfo('张三', 30)

// var getInfo = function (name: string, age: number): string {
//   return `${name} --- ${age}`
// }
// getInfo('张三', 30)

// function run(): void {
//   console.log('这是一个没有返回值的方法')
// }

// function getInfo(name: string, age?: number): string {
//   if (age) {
//     return `${name} --- ${age}`
//   } else {
//     return `${name} --- 年龄保密`
//   }
// }
// getInfo('张三')

// function getInfo(name: string, age: number = 20): string {
//   if (age) {
//     return `${name} --- ${age}`
//   } else {
//     return `${name} --- 年龄保密`
//   }
// }
// getInfo('张三')

// function sum(a: number, b: number, ...result: number[]): number {
//   // a+b = 1+2
//   let sum_result = a + b
//   // result 等于3、4、5、6
//   for (let i = 0; i < result.length; i++) {
//     sum_result += result[i]
//   }
//   return sum_result
// }
// console.log(sum(1, 2, 3, 4, 5, 6))

function getInfo(name: string): string
function getInfo(age: number): string
function getInfo(str: any): any {
  if (typeof str == 'string') {
    return '我叫' + str
  } else {
    return '我的年龄是' + str
  }
}
// function getInfo(name: string, age?: any): any {
//   if (age) {
//     return '我叫' + name + ',我的年龄是' + age
//   } else {
//     return '我叫' + name
//   }
// }
console.log(getInfo('张三'))
console.log(getInfo(30))
