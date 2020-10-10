export namespace A {
  interface Animal {
    name: string
    eat(): void
  }
  export class Dog implements Animal {
    name: string
    constructor(theName: string) {
      this.name = theName
    }
    eat() {
      console.log(`${this.name} 在吃狗粮。`)
    }
  }
  export class Cat implements Animal {
    name: string
    constructor(theName: string) {
      this.name = theName
    }
    eat() {
      console.log(`${this.name} 在吃猫粮。`)
    }
  }
}

export namespace B {
  interface Animal {
    name: string
    eat(): void
  }
  // 使用了命空间后要添加export导出
  export class Dog implements Animal {
    name: string
    constructor(theName: string) {
      this.name = theName
    }
    eat() {
      console.log(`${this.name} 在吃狗粮。`)
    }
  }
  // 使用了命空间后要添加export导出
  export class Cat implements Animal {
    name: string
    constructor(theName: string) {
      this.name = theName
    }
    eat() {
      console.log(`${this.name} 在吃猫粮。`)
    }
  }
}

var dog = new A.Dog('小黑')
dog.eat()

var cat = new B.Cat('小花')
cat.eat()
