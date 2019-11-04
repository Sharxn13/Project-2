/*
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {


  let expenseIndex = (callback) => {
   const queryString = 'SELECT * FROM expenses';

   dbPoolInstance.query(queryString, (error, queryResult) => {
     if( error ){
       // invoke callback function with results after query has executed
       callback(error, null);
     }else{
       // invoke callback function with results after query has executed
       if( queryResult.rows.length > 0 ){
         callback(null, queryResult.rows);
       }
       else{
         callback(null, null);
       }
     }
   });
 };

  let expenseCreate = (v1, callback) => {
    const queryArray = [v1.category, v1.date, v1.amount, v1.message];
    const queryString = 'INSERT INTO expenses (category, date, amount, message) VALUES ($1, $2, $3, $4) RETURNING *';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };


  let expenseShow = (v1, callback) => {
    const values = [v1];
    dbPoolInstance.query('SELECT * FROM expenses WHERE id = $1', values, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let expenseDelete = (values, callback) => {
    const queryArray = [parseInt(values)];
    const queryString = 'DELETE FROM expenses where id = $1 RETURNING *';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };


  let expenseEdit = (values, callback) => {
    const queryArray = [parseInt(values)];
    const queryString = 'SELECT * from expenses where ID = $1';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let expenseUpdate = (v1, v2, callback) => {
    const queryArray = [v1.category, v1.date, v1.amount, v1.message, v2];
    const queryString = 'UPDATE expenses SET category = $1, date = $2, amount = $3, message = $4 where id = $5 RETURNING *';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };



  return {
    expenseIndex,
    expenseCreate,
    expenseShow,
    expenseDelete,
    expenseEdit,
    expenseUpdate,
  };
};