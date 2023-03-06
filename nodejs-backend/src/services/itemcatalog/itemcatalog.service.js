const { Itemcatalog } = require('./itemcatalog.class');
const createModel = require('../../models/itemcatalog.model');
const hooks = require('./itemcatalog.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/itemcatalog', new Itemcatalog(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('itemcatalog');

  service.hooks(hooks);
};