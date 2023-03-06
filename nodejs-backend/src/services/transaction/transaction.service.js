const { Transaction } = require('./transaction.class');
const createModel = require('../../models/transaction.model');
const hooks = require('./transaction.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/transaction', new Transaction(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('transaction');

  service.hooks(hooks);
};