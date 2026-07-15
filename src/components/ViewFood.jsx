import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewFood = () => {

    const [data, changeData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedItem, setSelectedItem] = useState(null)
    const [formValues, setFormValues] = useState({})
    const [deleteTarget, setDeleteTarget] = useState(null)

    const fetchData = () => {
        axios.post("http://localhost:3000/view-food")
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
            value.foodItemName,
            value.vendorName,
            value.foodCategory,
            value.cuisineType,
            value.availabilityStatus
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
        axios.post('http://localhost:3000/update-food', formValues)
            .then(() => {
                alert('Food updated successfully')
                setSelectedItem(null)
                fetchData()
            })
            .catch(() => {
                alert('Failed to update food')
            })
    }

    const confirmDelete = (value) => {
        setDeleteTarget(value)
    }

    const deleteFood = () => {
        axios.post('http://localhost:3000/delete-food', { menuId: deleteTarget.menuId })
            .then(() => {
                alert('Food deleted successfully')
                setDeleteTarget(null)
                fetchData()
            })
            .catch(() => {
                alert('Failed to delete food')
            })
    }

    return (
        <div className="page-shell">
            <NavigationBar />
            <div className="container">
                <div className="page-card p-4 p-md-5">
                    <div className="page-header">
                        <div>
                            <h3 className="section-title">Food Menu</h3>
                            <p className="section-subtitle">Search and manage food items with a cleaner overview.</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Search food items</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by food name, vendor, category, cuisine or availability"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    </div>

                    <div className="row g-3">
                        {filteredData.length > 0 ? (
                            filteredData.map((value, index) => (
                                <div key={index} className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div className="card">
                                        <img src={value.foodImageUrl} className="card-img-top" style={{ height: '220px', width: '100%' }} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Details: </h5>
                                            <p><b>Menu ID: </b>{value.menuId}</p>
                                            <p><b>Vendor ID: </b>{value.vendorId}</p>
                                            <p><b>Vendor Name: </b>{value.vendorName}</p>
                                            <p><b>Food Item Name: </b>{value.foodItemName}</p>
                                            <p><b>Food Category: </b>{value.foodCategory}</p>
                                            <p><b>Cuisine Type: </b>{value.cuisineType}</p>
                                            <p><b>Price: </b>{value.price}</p>
                                            <p><b>Availability Status: </b>{value.availabilityStatus}</p>
                                            <p><b>Special Offer: </b>{value.specialOffer}</p>
                                            <button className="btn btn-warning me-2" onClick={() => openEditModal(value)}>Edit</button>
                                            <button className="btn btn-danger" onClick={() => confirmDelete(value)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <div className="alert alert-info">No food items match the current search.</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {selectedItem && (
                <div className="modal d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Food Item</h5>
                                <button type="button" className="btn-close" onClick={() => setSelectedItem(null)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-2">
                                    <label className="form-label">Food Item Name</label>
                                    <input className="form-control" name="foodItemName" value={formValues.foodItemName || ''} onChange={handleInputChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Vendor Name</label>
                                    <input className="form-control" name="vendorName" value={formValues.vendorName || ''} onChange={handleInputChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Price</label>
                                    <input className="form-control" name="price" value={formValues.price || ''} onChange={handleInputChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Availability Status</label>
                                    <input className="form-control" name="availabilityStatus" value={formValues.availabilityStatus || ''} onChange={handleInputChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Special Offer</label>
                                    <input className="form-control" name="specialOffer" value={formValues.specialOffer || ''} onChange={handleInputChange} />
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

            {deleteTarget && (
                <div className="modal d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Delete</h5>
                                <button type="button" className="btn-close" onClick={() => setDeleteTarget(null)}></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete {deleteTarget.foodItemName}?</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setDeleteTarget(null)}>Cancel</button>
                                <button className="btn btn-danger" onClick={deleteFood}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ViewFood