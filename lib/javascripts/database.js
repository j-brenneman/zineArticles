var db = require('monk')(process.env.MONGOLAB_URI);
var articles = db.get('articles');

module.exports = {

  articleInsert: function (article) {
    articles.insert({title: article.title, backgroundURL: article.url,
                     backgroundColor: article.color,
                     excerpt: article.excerpt, body: article.body});
  },
  articlesFind: function (cb) {
    articles.find({}, cb);
  },
  articleFind: function (article, cb) {
    articles.findOne({_id: article}, cb)
  },
  articleUpdate: function (articleId, article) {
    articles.update({_id: articleId},
                    {$set:
                      {title: article.title, backgroundURL: article.url,
                       backgroundColor: article.color, excerpt: article.excerpt,
                       body: article.body}
                    }
    );
  },
  articleDelete: function (articleId) {
    articles.remove({_id: articleId});
  }

}
