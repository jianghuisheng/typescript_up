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

abstract class Animal {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  // abstract eat() {
  //   console.log(1111)
  // }
  abstract eat(): any
}
class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat() {
    console.log(`${this.name}吃肉`)
  }
}
var dog = new Dog('小黑')
console.log(dog.eat())
