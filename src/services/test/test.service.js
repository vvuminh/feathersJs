// Initializes the `test` service on path `/test`
const createService = require('./test.class.js');
const hooks = require('./test.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/test', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('test');

  service.hooks(hooks);
};
