const users = require("./users/users.service.js");
const useraccounts = require("./useraccounts/useraccounts.service.js");
const itemcatalog = require("./itemcatalog/itemcatalog.service.js");
const transaction = require("./transaction/transaction.service.js");
const suppliers = require("./suppliers/suppliers.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(useraccounts);
  app.configure(itemcatalog);
  app.configure(transaction);
  app.configure(suppliers);
  // ~cb-add-configure-service-name~
};
