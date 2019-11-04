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
  // app.get('/', expenseControllerCallbacks.expenseIndex);
  // app.get('/expense/new', expenseControllerCallbacks.expenseNew);
  // app.post('/expense/create', expenseControllerCallbacks.expenseCreate);
  // app.get('/expense/:id',expenseControllerCallbacks.expenseShow);
  // app.get('/expense/:id/edit', expenseControllerCallbacks.expenseEdit);
  // app.put('/expense/:id', expenseControllerCallbacks.expenseUpdate);
  // app.delete('/expense:id', expenseControllerCallbacks.expenseDelete);

app.get('/', expenseControllerCallbacks.expenseIndex);
  app.get('/expense/new', expenseControllerCallbacks.expenseNew);
  app.post('/expense', expenseControllerCallbacks.expenseCreate);
  app.get('/expense/:id',expenseControllerCallbacks.expenseShow);
  app.get('/expense/:id/edit', expenseControllerCallbacks.expenseEdit);
  app.put('/expense/:id', expenseControllerCallbacks.expenseUpdate);
  app.delete('/expense/:id', expenseControllerCallbacks.expenseDelete);

  //statistic routes
  app.get('/stats/new', statsControllerCallbacks.statsNew);
  app.post('/stats/create', statsControllerCallbacks.statsCreate);

};