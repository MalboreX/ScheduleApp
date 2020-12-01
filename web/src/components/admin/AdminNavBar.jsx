import React from 'react'

class AdminNavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Расписание</a>
  <button className="navbar-toggler" aria-expanded="false" aria-controls="navbarColor02" aria-label="Toggle navigation" type="button" data-toggle="collapse" data-target="#navbarColor02">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" role="button" aria-expanded="false" aria-haspopup="true" href="#" data-toggle="dropdown">Dropdown</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <button className="btn btn-secondary" type="button">Выйти</button>
    </form>
  </div>
</nav>
        )
    }
}

export default AdminNavBar;