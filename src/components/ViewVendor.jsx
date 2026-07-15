import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'


const ViewVendor = () => {

    const [data, changeData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedItem, setSelectedItem] = useState(null)
    const [formValues, setFormValues] = useState({})

    const fetchData = () => {

        axios.post("http://localhost:3000/view-vendor")

            .then((response) => {

                changeData(response.data || [])

            })

            .catch((error) => {

                console.log(error)

            })

    }


    useEffect(() => {

        fetchData()

    }, [])

    const filteredData = data.filter((value) => {
        const searchableText = [
            value.vendorname,
            value.ownername,
            value.businessname,
            value.foodcategory,
            value.cuisinetype,
            value.paymentstatus
        ].join(' ').toLowerCase()

        return searchableText.includes(searchTerm.toLowerCase())
    })

    const openEditModal = (value) => {
        setSelectedItem(value)
        setFormValues({ ...value })
    }

    const handleInputChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    const saveChanges = () => {
        axios.post('http://localhost:3000/update-vendor', formValues)
            .then(() => {
                alert('Vendor updated successfully')
                setSelectedItem(null)
                fetchData()
            })
            .catch(() => {
                alert('Failed to update vendor')
            })
    }


    return (

        <div>

            <NavigationBar />
            <div className="container">

                <div className="row">

                    <div className="col-12">

                        <div className="mt-3 mb-3">
                            <label className="form-label">Search vendors</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by vendor, owner, business, food category, cuisine or payment status"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />
                        </div>

                        <table className="table table-bordered">

                            <thead>

                                <tr>

                                    <th>Vendor ID</th>
                                    <th>Vendor Name</th>
                                    <th>Owner Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Business Name</th>
                                    <th>Food Category</th>
                                    <th>Cuisine Type</th>
                                    <th>Number of Staff</th>
                                    <th>License Number</th>
                                    <th>Booking Date</th>
                                    <th>Payment Status</th>
                                    <th>Stall Number</th>
                                    <th>Actions</th>

                                </tr>

                            </thead>


                            <tbody>

                                {filteredData.map((value, index) => (

                                    <tr key={index}>

                                        <td>{value.vendorid}</td>

                                        <td>{value.vendorname}</td>

                                        <td>{value.ownername}</td>

                                        <td>{value.phonenumber}</td>

                                        <td>{value.email}</td>

                                        <td>{value.businessname}</td>

                                        <td>{value.foodcategory}</td>

                                        <td>{value.cuisinetype}</td>

                                        <td>{value.numberofstaff}</td>

                                        <td>{value.licensenumber}</td>

                                        <td>{value.bookingdate}</td>

                                        <td>{value.paymentstatus}</td>

                                        <td>{value.stallnumber}</td>
                                        <td><button className="btn btn-warning btn-sm" onClick={() => openEditModal(value)}>Edit</button></td>

                                    </tr>

                                ))}

                            </tbody>


                        </table>


                    </div>

                </div>

            </div>

            {selectedItem && (
                <div className="modal d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Vendor</h5>
                                <button type="button" className="btn-close" onClick={() => setSelectedItem(null)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-2">
                                    <label className="form-label">Vendor Name</label>
                                    <input className="form-control" name="vendorname" value={formValues.vendorname || ''} onChange={handleInputChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Owner Name</label>
                                    <input className="form-control" name="ownername" value={formValues.ownername || ''} onChange={handleInputChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Business Name</label>
                                    <input className="form-control" name="businessname" value={formValues.businessname || ''} onChange={handleInputChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Payment Status</label>
                                    <input className="form-control" name="paymentstatus" value={formValues.paymentstatus || ''} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setSelectedItem(null)}>Cancel</button>
                                <button className="btn btn-success" onClick={saveChanges}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>

    )

}


export default ViewVendor