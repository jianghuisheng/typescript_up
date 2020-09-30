// interface FullName {
//   firstName: string
//   secondName?: string
// }

// function printName(name: FullName) {
//   console.log(name.firstName + '--' + name.secondName)
// }

// printName({
//   firstName: '李',
//   secondName: '四',
// })

// var obj = {
//   age: 20,
//   firstName: 'zhang',
//   secondName: 'san',
// }
// printName(obj)

// interface Config {
//   type: string
//   url: string
//   data?: string
//   dataType: string
// }

// function Ajax(config: Config) {
//   var xhr = new XMLHttpRequest()
//   xhr.open(config.type, config.url, true)
//   xhr.send(config.data)
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       if (config.dataType == 'json') {
//         JSON.parse(xhr.response)
//       } else {
//         console.log(xhr.responseText)
//       }
//     }
//   }
// }

// Ajax({
//   type: 'get',
//   url: 'http://wwww.baidu.com',
//   dataType: 'json',
// })

interface encrypt {
  (key: string, value: string): string
}
var MD5: encrypt = function (key: string, value: string): string {
  return key + value
}
console.log(MD5('username', 'password'))

interface UserArr {
  [index: number]: string
}
// var arr1:UserArr = [123,456]
var arr2: UserArr = ['Lucy', 'Augus']

interface UserObj {
  [index: string]: string
}
// var obj1: UserObj = { age: 20 }
var obj2: UserObj = { age: '20' }

interface Animal {
  name: string
  eat(str: string): void
}
class Dog implements Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  // 可以不传参数，但是必须要定义方法
  eat(food: string) {
    console.log(this.name + '吃' + food)
  }
}
var dog = new Dog('小黑')
dog.eat('肉')
