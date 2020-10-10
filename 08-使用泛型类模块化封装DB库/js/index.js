"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlDB = void 0;
var MySqlDB = /** @class */ (function () {
    function MySqlDB() {
        console.log('数据库建立连接');
    }
    MySqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MySqlDB.prototype.update = function (info, id) {
        throw new Error('update');
    };
    MySqlDB.prototype.delete = function (id) {
        throw new Error('delete');
    };
    MySqlDB.prototype.get = function (id) {
        var list = [
            {
                title: '今天吃啥',
                desc: '青椒炒肉',
            },
            {
                title: '明天吃啥',
                desc: '凉拌黄瓜',
            },
        ];
        return list;
    };
    return MySqlDB;
}());
exports.MySqlDB = MySqlDB;
