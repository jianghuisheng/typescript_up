"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 类装饰器1
function logClass1(params) {
    return function (target) {
        console.log('类装饰器1');
    };
}
// 类装饰器2
function logClass2(params) {
    return function (target) {
        console.log('类装饰器2');
    };
}
// 属性装饰器
function logAttribute(params) {
    return function (target, attrName) {
        console.log('属性装饰器');
    };
}
// 方法装饰器
function logMethod(params) {
    return function (target, methodName, desc) {
        console.log('方法装饰器');
    };
}
// 方法参数装饰器1
function logParmas1(params) {
    return function (target, methodName, paramsIndex) {
        console.log('方法参数装饰器1');
    };
}
// 方法参数装饰器2
function logParmas2(params) {
    return function (target, methodName, paramsIndex) {
        console.log('方法参数装饰器2');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () { };
    HttpClient.prototype.setData = function (attr1, attr2) { };
    __decorate([
        logAttribute()
    ], HttpClient.prototype, "url", void 0);
    __decorate([
        logMethod()
    ], HttpClient.prototype, "getData", null);
    __decorate([
        __param(0, logParmas1()), __param(1, logParmas2())
    ], HttpClient.prototype, "setData", null);
    HttpClient = __decorate([
        logClass1('www.baidu.com'),
        logClass2('www.qq.com')
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
// 属性装饰器
// 方法装饰器
// 方法参数装饰器2
// 方法参数装饰器1
// 类装饰器2
// 类装饰器1
