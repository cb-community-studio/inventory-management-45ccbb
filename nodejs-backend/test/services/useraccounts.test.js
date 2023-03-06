const assert = require('assert');
const app = require('../../src/app');

describe('\'useraccounts\' service', () => {
  it('registered the service', () => {
    const service = app.service('useraccounts');

    assert.ok(service, 'Registered the service (useraccounts)');
  });
});
