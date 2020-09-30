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

// class Person {
//   // protected name: string
//   private name: string
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

// var firstMan = new Person('张三')

// // name 在类外面不可以访问
// console.log(firstMan.name)
// // 报错

// // name 在类里面可以访问
// console.log(firstMan.getName())
// // 张三

// class Boy extends Person {
//   constructor(name: string) {
//     super(name)
//   }
//   getName(): string {
//     return this.name
//   }
// }
// var thirdMan = new Boy('李四')

// // name 在子类里可以访问
// console.log(thirdMan.getName())
// // 李四
