import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'


const View = () => {

    const [data, changeData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedItem, setSelectedItem] = useState(null)
    const [formValues, setFormValues] = useState({})

    const fetchData = () => {
        axios.post("http://localhost:3000/view-stall")
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
            value.stallnumber,
            value.bookingstatus,
            value.paymentstatus,
            value.festivalday
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
        axios.post('http://localhost:3000/update-stall', formValues)
            .then(() => {
                alert('Stall updated successfully')
                setSelectedItem(null)
                fetchData()
            })
            .catch(() => {
                alert('Failed to update stall')
            })
    }

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mt-3 mb-3">
                            <label className="form-label">Search stalls</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by vendor, stall number, booking status or festival day"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />
                        </div>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>bookingid</th>
                                    <th>vendorid</th>
                                    <th>vendorname</th>
                                    <th>stallnumber</th>
                                    <th>bookingdate</th>
                                    <th>bookingtime</th>
                                    <th>rentalamount</th>
                                    <th>paymentstatus</th>
                                    <th>bookingstatus</th>
                                    <th>festivalday</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredData.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.bookingid}</td>
                                        <td>{value.vendorid}</td>
                                        <td>{value.vendorname}</td>
                                        <td>{value.stallnumber}</td>
                                        <td>{value.bookingdate}</td>
                                        <td>{value.bookingtime}</td>
                                        <td>{value.rentalamount}</td>
                                        <td>{value.paymentstatus}</td>
                                        <td>{value.bookingstatus}</td>
                                        <td>{value.festivalday}</td>
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
                                <h5 className="modal-title">Edit Stall Booking</h5>
                                <button type="button" className="btn-close" onClick={() => setSelectedItem(null)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-2">
                                    <label className="form-label">Vendor Name</label>
                                    <input className="form-control" name="vendorname" value={formValues.vendorname || ''} onChange={handleInputChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Stall Number</label>
                                    <input className="form-control" name="stallnumber" value={formValues.stallnumber || ''} onChange={handleInputChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Booking Status</label>
                                    <input className="form-control" name="bookingstatus" value={formValues.bookingstatus || ''} onChange={handleInputChange} />
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

export default View