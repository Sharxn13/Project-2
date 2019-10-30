/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM students';

    dbPoolInstance.query(query, (error, queryResult) => {
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

  // let getStudents = (callback)=> {
  //   console.log("WOW INSIDE STUDENTS!", callback);
  //   let query = 'SELECT * FROM students';

  //   dbPoolInstance.query(query,(error,queryResult)=>{
  //       console.log("SQL query Result", queryResult.rows);
  //       const result = queryResult.rows;
  //       callback(result);
  //   })
  // }

  return {
    getAll,
    //getAllStudents,
  };
};
