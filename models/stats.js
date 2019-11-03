/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let statisticByCategory = (values, callback) => {
    const queryArray = [values.body.start_date, values.body.end_date];
    const queryString = 'SELECT category, sum(amount) AS cat_expense FROM expenses WHERE date BETWEEN $2 AND $3 GROUP BY category';

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

  let statisticTotalExpense = (values, callback) => {
    const queryArray = [values.body.start_date, values.body.end_date];
    const queryString = 'SELECT sum(total_expense.cat_expense) FROM (SELECT category, sum(amount) AS cat_expense FROM expenses date BETWEEN $2 AND $3 GROUP BY category) AS total_expense';
    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult);
        }else{
          callback(null, null);
        }
      }
    });
  };

  return {
    statisticByCategory,
    statisticTotalExpense,
  };
};