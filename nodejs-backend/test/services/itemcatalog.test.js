const assert = require('assert');
const app = require('../../src/app');

describe('\'itemcatalog\' service', () => {
  it('registered the service', () => {
    const service = app.service('itemcatalog');

    assert.ok(service, 'Registered the service (itemcatalog)');
  });
});
