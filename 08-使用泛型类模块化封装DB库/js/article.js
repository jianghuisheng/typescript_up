"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var articlemodel_1 = require("./articlemodel");
var article = new articlemodel_1.ArticleClass();
article.title = '今天吃什么啊';
article.desc = '随便炒个菜吧';
articlemodel_1.ArticleModel.add(article);
var result = articlemodel_1.ArticleModel.get(1);
console.log(result);
