var paginator = require('waterline-paginator');
var callbacks = require('../../util/callbacks');
var isAdmin = require('../../policies/isAdmin');
module.exports = {
  prefix: '/v2/user',
  urls: ['/'],
  routers: {
    all: function (req, res) {
      var limit = req.query.limit;
      var page = req.query.page;
      paginator.paginate({
        model: req.models.User,
        limit: limit,
        page: page
      }, callbacks.listData(res));
    }
  },
  policies: {
    all: isAdmin
  }
};
