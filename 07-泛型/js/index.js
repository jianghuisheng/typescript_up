"use strict";
// function getData<T>(value: T): T {
//   return value
// }
// getData<number>(123456)
// class MinClass<T> {
//   public list: T[] = []
//   add(value: T): void {
//     this.list.push(value)
//   }
//   min(): T {
//     var minNum = this.list[0]
//     for (var i = 0; i < this.list.length; i++) {
//       if (minNum > this.list[i]) {
//         minNum = this.list[i]
//       }
//     }
//     return minNum
//   }
// }
// var num = new MinClass<number>()
// num.add(12)
// interface Config {
//   <T>(value: T): T
// }
// var getData: Config = function <T>(value: T): T {
//   return value
// }
// var myData: Config<string> = getData
// myData('list')
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MySql.prototype.updated = function (info, id) {
        console.log(info, id);
        return true;
    };
    return MySql;
}());
// class User {
//   username: string | undefined
//   password: string | undefined
// }
// var user = new User()
// user.username = 'admin'
// user.password = '123456'
// var USER_DB = new MySql<User>()
// USER_DB.add(user)
var Article = /** @class */ (function () {
    function Article(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return Article;
}());
var article = new Article({
    title: '哈哈哈',
    desc: '搞笑故事',
    status: 0,
});
var article2 = new Article({
    title: '哈哈哈2',
    desc: '搞笑故事2',
    status: 1,
});
var ARTICLE_DB = new MySql();
ARTICLE_DB.add(article);
ARTICLE_DB.updated(article2, 10);
