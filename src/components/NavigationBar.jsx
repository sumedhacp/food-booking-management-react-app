import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqS8KjW9vG_oWLAycm39qE45yPz4I1tIc7PhzgpuO5Q&s=10" style={{ width: '65px', height: '65px' }} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/addVendor">Add Vendor</Link>
                            <Link className="nav-link" to="/addStall">Add Stall</Link>
                            <Link className="nav-link" to="/addFood">Add Food</Link>
                            <Link className="nav-link" to="/viewVendor">View Vendor</Link>
                            <Link className="nav-link" to="/viewStall">View Stall</Link>
                            <Link className="nav-link" to="/viewFood">View Food</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationBar