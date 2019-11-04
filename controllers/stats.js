module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let statsNewControllerCallback = (req, res) => {
      data = {
        req
      }
      res.render('stats/new', data);
  };

  let statsCreateControllerCallback = (req, res) => {
      db.stats.statisticByCategory(req, (err, result) => {
        if (result != null) {
          db.stats.statisticTotalExpense(req, (err, result2) => {
            data = {
              req,
              result,
              result2
            }
            res.render('stats/create', data);
         });
        } else {
          data = {
            req
          }
          res.render('errors/time-period', data);
        }
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    statsNew: statsNewControllerCallback,
    statsCreate: statsCreateControllerCallback
  };
}