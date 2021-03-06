module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let statsNewControllerCallback = (req, res) => {
      res.render('stats/new', data);
  };

  let statsCreateControllerCallback = (req, res) => {
      db.stats.statisticByCategory(req, (err, result) => {
        if (result != null) {
          db.stats.statisticTotalExpense(req, (err, result2) => {
            data = {
                result,
                result2
            }
            res.render('stats/create', data);
         });
        } else {
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