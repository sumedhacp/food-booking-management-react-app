import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewFood = () => {

    const [data, changeData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

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

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="mb-4 mt-3">
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
                                            <img src={value.foodImageUrl} className="card-img-top" style={{ height: "220px", width: "100%" }} alt="..." />
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
                                                <a href="#" className="btn btn-primary">Select</a>
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
            </div>

        </div>
    )
}

export default ViewFood