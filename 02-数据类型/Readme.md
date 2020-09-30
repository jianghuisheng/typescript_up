### Typescript 中为了使编写的代码更规范，更有利于维护，增加了类型校验，一个标识符一旦定义了类型，后续便不能再修改，主要有以下几种数据类型。

### 1.布尔类型(boolean)

```
// 布尔类型
var flag: boolean = true
flag = 123; // 错误
flag = false;  // 正确
```

### 2.数字类型(number)

```
var num: number = 123
num = 'str' // 错误
num = 456 // 正确
```

### 3.字符类型(string)

```
var str: string = 'this is TypeScript'
str = true // 错误
str = 'Hello World' // 正确
```

### 4.数组类型(array)

```
var arr:number[]=[11,22,33]
var arr:Array<number> = [11,22,33]
```

### 5.元组类型(tuple),为数组中每个位置的元素指定类型

```
var arr:[number,string]=[123,'this is TypeScript'];
```

### 6.枚举类型(enum)

```
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
```
