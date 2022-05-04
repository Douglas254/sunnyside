import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, NavLink } from "react-router-dom"
import  Logo  from '../../assets/logo.svg'

function Navbar() {

    return (
    <div className="row">
        <div className="container-xxl position-relative p-0">
            <nav className="nav navbar-expand-lg navbar-dark bg-info
            px-4 px-lg-5 py-3 py-lg-0 sticky-top">

                {/* Brand Logo */}
                <Link to='/' className='navbar-brand p-3'>
                    <img src={ Logo } alt="Brand-Logo"
                    className='px-lg-4 px-sm-2' />
                </Link>

                {/* Toggler */}
                <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarCollapse'>
                    <FontAwesomeIcon icon={ faBars } />
                </button>

                {/* nav content */}
                <div className="collapse navbar-collapse"
                id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 px-3 text-start">
                        <NavLink to='/about' className="nav-item nav-link">
                            About
                        </NavLink>
                        <NavLink to='/services' className="nav-item nav-link">
                            Services
                        </NavLink>
                        <NavLink to='/project' className="nav-item nav-link">
                            Projects
                        </NavLink>
                        <NavLink to='/contact' className="nav-item nav-link">
                            Contact
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    )
}

export default Navbar