var flag: boolean = true
// flag = 123; // 错误
flag = false // 正确

var num: number = 123
// num = 'str' // 错误
num = 456 // 正确

var str: string = 'this is TypeScript'
// str = true // 错误
str = 'Hello World' // 正确

var arr: number[] = [11, 22, 33]
var arr: Array<number> = [11, 22, 33]

var newArr: [number, string] = [123, 'ywl']
var newArr2 = [1, 2, 3, 'ywl']

enum Color {
  blue,
  red = 1.5,
  orange,
}
var a: Color = Color.blue // 如果没有赋值，默认从下标0开始
console.log(a) // 0

var b: Color = Color.red // 赋值后，得到的将是所赋值的结果
console.log(b) // 1.5

var c: Color = Color.orange // 没有指定值的枚举元素，其值为前一元素加1
console.log(c) // 2.5
