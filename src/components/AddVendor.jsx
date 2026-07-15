import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import NavigationBar from './NavigationBar'



const AddVendor = () => {

    const [input, changeInput] = useState({

        vendorid: "",
        vendorname: "",
        ownername: "",
        phonenumber: "",
        email: "",
        businessname: "",
        foodcategory: "",
        cuisinetype: "",
        numberofstaff: "",
        licensenumber: "",
        bookingdate: "",
        paymentstatus: "",
        stallnumber: ""
    })

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })
    }
    const readvalue = () => {

        console.log(input)
        axios.post("https://host-demo-app.onrender.com/api/add-vendor", input).then(

            (response) => {

                console.log(response.data)
            }
        ).catch()
    }

    return (
        <div className="page-shell">
            <NavigationBar />
            <div className="container">
                <div className="page-card p-4 p-md-5">
                    <div className="page-header">
                        <div>
                            <h3 className="section-title">Add Vendor</h3>
                            <p className="section-subtitle">Register new vendor details with a cleaner, easier-to-scan form.</p>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">vendorid</label>
                            <input type="text" className="form-control" name="vendorid" value={input.vendorid} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">vendorname</label>
                            <input type="text" className="form-control" name="vendorname" value={input.vendorname} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ownername</label>
                            <input type="text" className="form-control" name="ownername" value={input.ownername} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">phonenumber</label>
                            <input type="text" className="form-control" name="phonenumber" value={input.phonenumber} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">businessname</label>
                            <input type="text" className="form-control" name="businessname" value={input.businessname} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">foodcategory</label>
                            <select className="form-select" name="foodcategory" value={input.foodcategory} onChange={inputHandler}>
                                <option value="Select Mode">Select Mode</option>
                                <option value="Fast Food">Fast Food</option>
                                <option value="Desserts">Desserts</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Healthy Food">Healthy Food</option>
                            </select>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">cuisinetype</label>
                            <select className="form-select" name="cuisinetype" value={input.cuisinetype} onChange={inputHandler}>
                                <option value="Select Mode">Select Mode</option>
                                <option value="Indian">Indian</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Italian">Italian</option>
                                <option value="Continental">Continental</option>
                                <option value="Multi Cuisine">Multi Cuisine</option>
                            </select>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">numberofstaff</label>
                            <input type="text" className="form-control" name="numberofstaff" value={input.numberofstaff} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">licensenumber</label>
                            <input type="text" className="form-control" name="licensenumber" value={input.licensenumber} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">bookingdate</label>
                            <input type="date" className="form-control" name="bookingdate" value={input.bookingdate} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">paymentstatus</label>
                            <select className="form-select" name="paymentstatus" value={input.paymentstatus} onChange={inputHandler}>
                                <option value="Select Mode">Select Mode</option>
                                <option value="Paid">Paid</option>
                                <option value="Pending">Pending</option>
                                <option value="Failed">Failed</option>
                            </select>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">stallnumber</label>
                            <input type="text" className="form-control" name="stallnumber" value={input.stallnumber} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br />
                            <button className="btn btn-success px-4" onClick={readvalue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddVendor