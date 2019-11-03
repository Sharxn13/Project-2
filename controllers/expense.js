module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let expenseIndexControllerCallback = (req, res) => {
      db.expense.expenseIndex((err, result) => {
        data = {
          req,
          result
        }
        if (result != null) {
        res.render('expenses/index', data);
        } else {
        res.render('expenses/new', data);
        }
      });
  };

  let expenseNewControllerCallback = (req, res) => {
      data = {
        req
      }
      res.render('expenses/new', data);
  };

  let expenseCreateControllerCallback = (req, res) => {
      db.expense.expenseCreate(req.body, (err, result) => {
        data = {
          req,
          result
        }
        res.render('expenses/create', data);
      });
  };

  let expenseShowControllerCallback = (req, res) => {
      db.expense.expenseShow(req.params.id, (err, result) => {
        data = {
          req,
          result
        }
        res.render('expenses/show', data);
      });
  };

  let expenseDeleteControllerCallback = (req, res) => {
      db.expense.expenseDelete(req.params.id, (err, result) => {
        data = {
          req
        }
        res.render('expenses/delete', data);
      });
  };

  let expenseEditControllerCallback = (req, res) => {
      db.expense.expenseEdit(req.params.id, (err, result) => {
        data = {
          req,
          result
        };
        res.render('expenses/edit', data);
      });
  };

  let expenseUpdateControllerCallback = (req, res) => {
      db.expense.expenseUpdate(req.body, req.params.id, (err, result) => {
        data = {
          req,
          result
        };
        res.render('expenses/update', data);
      });
  };

  let expenseSortControllerCallback = (req, res) => {
      db.expense.expenseSort(req.body, (err, result) => {
        data = {
          req,
          result
        };
        res.render('expenses/indexSort', data);
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    expenseIndex: expenseIndexControllerCallback,
    expenseNew: expenseNewControllerCallback,
    expenseCreate: expenseCreateControllerCallback,
    expenseShow: expenseShowControllerCallback,
    expenseDelete: expenseDeleteControllerCallback,
    expenseEdit: expenseEditControllerCallback,
    expenseUpdate: expenseUpdateControllerCallback,
    expenseSort: expenseSortControllerCallback,
  }
}