import { MySqlDB } from './index'
class ArticleClass {
  title: string | undefined
  desc: string | undefined
}
var ArticleModel = new MySqlDB<ArticleClass>()
export { ArticleClass, ArticleModel }
