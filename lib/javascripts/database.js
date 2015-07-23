var db = require('monk')('localhost/zineArticles');
var articles = db.get('articles');


module.exports = {

  articleInsert: function (article) {
    articles.insert({title: article.title, backgroundURL: article.url,
                     backgroundColor: article.color,
                     excerpt: article.excerpt, body: article.body});
  },
  articlesFind: function (cb) {
    articles.find({}, cb);
  }
}
