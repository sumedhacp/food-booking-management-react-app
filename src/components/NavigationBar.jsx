import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqS8KjW9vG_oWLAycm39qE45yPz4I1tIc7PhzgpuO5Q&s=10" style={{ width: '48px', height: '48px' }} className="rounded-circle" alt="Logo" />
                    <span className="fw-bold text-dark">Food Festival</span>
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
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
    )
}

export default NavigationBar