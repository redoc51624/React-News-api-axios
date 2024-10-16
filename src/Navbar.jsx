import './App.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">Vikas-News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="dropdown-item nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="dropdown-item nav-link" aria-current="page" to="/About">About Us</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    News Category
                                </a>
                                <ul className="dropdown-menu">
                                    <NavLink className="dropdown-item nav-link" aria-current="page" to="business">Business</NavLink>
                                    <NavLink className="dropdown-item nav-link" aria-current="page" to="/entertainment">Entertainment</NavLink>
                                    <NavLink className="dropdown-item nav-link" aria-current="page" to="/health">Health</NavLink>
                                    <NavLink className="dropdown-item nav-link" aria-current="page" to="/science">Science</NavLink>
                                    <NavLink className="dropdown-item nav-link" aria-current="page" to="/sports">Sports</NavLink>
                                    <NavLink className="dropdown-item nav-link" aria-current="page" to="/technology">Technology</NavLink>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
