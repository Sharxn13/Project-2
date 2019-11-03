const React = require('react');

class Nav extends React.Component {
    render() {
        let personalised = this.props.children;
        return (
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/"><i class='bx bxs-wallet'></i> ExpensePedia</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class='bx bxs-dollar-circle'></i></a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/expenses/new"><i class='bx bxs-plus-circle'></i> New</a>
                  <a class="dropdown-item" href="/statistics/new"><i class='bx bxs-chart'></i> Statistics</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        );
    };
};

module.exports = Nav;