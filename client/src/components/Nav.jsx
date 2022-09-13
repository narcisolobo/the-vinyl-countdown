import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary mb-3">
      <div className="container">
        <span className="h1 mb-0 navbar-brand">The Vinyl Countdown</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className='nav-link' to={'/records'}>All Records</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to={'/records/new'}>Add a Record</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
