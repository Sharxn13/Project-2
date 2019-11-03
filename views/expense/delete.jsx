const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');

class Delete extends React.Component {
  render() {
    return(
      <Layout>
        <Nav>
        </Nav>
        <body>
          <h1>Expense Deleted</h1>
        </body>
      </Layout>
    );
  }
}

module.exports = Delete;