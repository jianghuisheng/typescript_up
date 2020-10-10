/* function logClass(params: any) {
  params.prototype.url = 'www.baidu.com'
  params.prototype.run = function () {
    console.log('this is run function')
  }
}
@logClass
class HttpClient {
  constructor() {}
  getData() {}
}
var http = new HttpClient()
console.log(http.url)
http.run() */

/* function logClass(target: any) {
  return class extends target {
    url: any = '我是装饰器里的url'
    getData() {
      this.url = '我是装饰器里修改过后的url'
      console.log(this.url)
    }
  }
}
@logClass
class HttpClient {
  public url: string | undefined
  constructor() {
    this.url = 'mock'
  }
  getData() {
    console.log(this.url)
  }
}
var http = new HttpClient()
http.getData()
console.log(http.url) */

// 方法装饰器
function logMethod(params: any) {
  return function (target: any, methodName: any, desc: any) {
    // target 如果是静态成员则是类的构造函数
    // target 如果是实例成员则是类的原型对象
    // methodName 为当前方法
    // desc 为方法的描述,包含是配置、枚举、可写等信息

    // 在装饰里扩展类的属性和方法
    target.apiUrl = 'www.qq.com'
    target.run = function () {
      console.log('this is run function')
    }
  }
}

class HttpClient {
  public url: string | undefined
  constructor() {}
  @logMethod('www.baidu.com')
  getData() {}
}

var http = new HttpClient()
// console.log(http.apiUrl)
// www.qq.com

// http.run()
// this is run function
