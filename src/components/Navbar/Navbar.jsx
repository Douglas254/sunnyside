import { Link } from "react-router-dom"
import  Logo  from '../../assets/logo.svg'

function Navbar() {

    return (
    <div className="row">
        <div className="container-xxl position-relative p-0">
            <nav className="nav navbar-expand-lg bg-info
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
                    
                </button>
            </nav>
        </div>
    </div>

    )
}

export default Navbar