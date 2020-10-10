import { ArticleClass, ArticleModel } from './articlemodel'
var article = new ArticleClass()
article.title = '今天吃什么啊'
article.desc = '随便炒个菜吧'
ArticleModel.add(article)
var result = ArticleModel.get(1)
console.log(result)
