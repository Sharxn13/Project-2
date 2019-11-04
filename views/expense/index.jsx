const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Index extends React.Component {
  render() {
    const list = this.props.result.map(expense => {
      return (
        <tr>
        <td scope="col" class="sort">{expense.category}</td>
        <td scope="col" class="sort">{moment(expense.date).format('ll')}</td>
        <td scope="col" class="sort">{expense.amount}</td>
        <td scope="col">{expense.message.length < 30 ? expense.message : expense.message.substring(0,30)+"..."}</td>
        <td scope="col">
          <form action={`/expense/${expense.id}`} method="GET">
            <button class='bx bxs-show' type="submit"></button>
          </form>
          <form action={`/expense/${expense.id}/edit`} method="GET">
            <button class='bx bxs-edit' type="submit"></button>
          </form>
          <form action={`/expense/${expense.id}?_method=delete`} method="POST">
            <button class="bx bxs-trash" type="submit"></button>
          </form>
        </td>
      </tr>
      );
     })
    return (
      <Layout>
        <Nav>
        </Nav>
        <body>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4 "><b>Welcome to Expense Trackerr!</b></h1>
            </div>
          </div>
          <div class="container">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                {list}
              </tbody>
            </table>
          </div>
        </body>
      </Layout>
    );
  }
}

module.exports = Index;