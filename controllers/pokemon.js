module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.pokemon.getAll((error, allPokemon) => {
        response.render('pokemon/index', { allPokemon });
      });
  };

  // let stud = (request, response)=>{
  //   const whenQueryDone = (students)=>{
  //       console.log("WELCOME!!!",result);
  //       db.students.getAll((error, allStudent)=>{
  //           console.log("done with 2 queries!!!");
  //           const data = {
  //               student = allStudent,
  //               students = students
  //           }
  //           response.render('something', data);
  //       });
  //   };
  //   db.students.getstudent(whenQueryDone);
  //   console.log("RESULT!");
  // };

    let selectAllStudentsCallback = (request, response) => {
      db.school.getAllStudents((error, result) => {
        response.render('pokemon/index', { result });
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    selectAllStudents: selectAllStudentsCallback
  };

}
