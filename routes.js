module.exports = (app, allModels) => {

  /*
   *  =========================================
   *         ALL ROUTES FOR CONTROLLER
   *  =========================================
   */

  // require the controller
  const expenseControllerCallbacks = require('./controllers/expense')(allModels);
  const statsControllerCallbacks = require('./controllers/stats')(allModels);

  //expense routes
  app.get('/', expenseControllerCallbacks.expenseIndex);
  app.get('/expenses/new', expenseControllerCallbacks.expenseNew);
  app.post('/expenses/create', expenseControllerCallbacks.expenseCreate);
  app.get('/expenses/:id',expenseControllerCallbacks.expenseShow);
  app.get('/expenses/:id/edit', expenseControllerCallbacks.expenseEdit);
  app.put('/expenses/:id', expenseControllerCallbacks.expenseUpdate);
  app.delete('/expenses/:id', expenseControllerCallbacks.expenseDelete);
  app.post('/', expenseControllerCallbacks.expenseSort);

  //statistic routes
  app.get('/stats/new', statsControllerCallbacks.statsNew);
  app.post('/stats/create', statsControllerCallbacks.statsCreate);

};