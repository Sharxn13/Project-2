const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Show extends React.Component {
  render() {
    const list = this.props.result.map(expense  => {
      return (
        <div>
          <div className="card text-white bg-dark mb-3">
            <p>Category: {expense.category} </p>
            <p>Date: {moment(expense.date).format('ll')} </p>
            <p>Amount: {expense.amount} </p>
            <p>Message: {expense.message}</p>
            <form action={`/expense/${expense.id}/edit`} method="GET">
              <button class='bx bxs-edit' type="submit"></button>
            </form>
            <form action={`/expense/${expense.id}?_method=delete`} method="POST">
              <button class="bx bxs-trash" type="submit"/>
            </form>
          </div>
        </div>
      );
     })
    return (
      <Layout>
        <Nav>
        </Nav>
        <head />
        <body>
          <h1>Single Expense</h1>
          {list}
        </body>
      </Layout>
    );
  }
}

module.exports = Show;