module.exports = (db) => {
 let expenseIndexControllerCallback = (req, res) => {
     db.expense.expenseIndex((err, result) => {
       data = {
         req,
         result:result
       }
       if (result != null) {
        console.log("index controller", data);
       res.render('expense/index', data);
       } else {
        console.log("Time for new expense!");
       res.render('expense/new');
       }
     });
 };


  let expenseNewControllerCallback = (req, res) => {
      data = {
        req
      }
      res.render('expense/new', data);
  };


 let expenseCreateControllerCallback = (req, res) => {
      db.expense.expenseCreate(req.body,(err, result) => {
        data = {
          req,
          result
        }
        res.render('expense/create', data);
        console.log("create controller", data);
      });
  };

  let expenseShowControllerCallback = (req, res) => {
      db.expense.expenseShow(req.params.id, (err, result) => {
        data = {
          req,
          result: result
        }
        console.log("req",req.params.id);
        console.log("show controller!", result);
        res.render('expense/show', data);
      });
  };

  let expenseDeleteControllerCallback = (req, res) => {
      db.expense.expenseDelete(req.params.id, (err, result) => {
        data = {
          req
        }
        res.render('expense/delete', data);
      });
  };

  let expenseEditControllerCallback = (req, res) => {
      db.expense.expenseEdit(req.params.id, (err, result) => {
        data = {
          req,
          result
        };
        res.render('expense/edit', data);
      });
  };

  let expenseUpdateControllerCallback = (req, res) => {
      db.expense.expenseUpdate(req.body, req.params.id, (err, result) => {
        data = {
          req,
          result
        };
        res.render('expense/update', data);
      });
  };


return {
    expenseIndex: expenseIndexControllerCallback,
    expenseNew: expenseNewControllerCallback,
    expenseCreate: expenseCreateControllerCallback,
    expenseShow: expenseShowControllerCallback,
    expenseDelete: expenseDeleteControllerCallback,
    expenseEdit: expenseEditControllerCallback,
    expenseUpdate: expenseUpdateControllerCallback,
  }
}
