import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewFood = () => {

    const [data, changeData] = useState([

        {
            menuId: "",
            vendorId: "",
            vendorName: "",
            foodItemName: "",
            foodCategory: "",
            cuisineType: "",
            price: "",
            availabilityStatus: "",
            specialOffer: "",
            foodImageUrl: ""
        }

    ])

    const fetchData = () => {
        axios.post("http://localhost:3000/view-food").then(

            (response) => {
                changeData(response.data)
            }

        ).catch()
    }
    useEffect(
        () => {
            fetchData()
        }, []
    )
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {
                                data.map
                                    (
                                        (value, index) => {
                                            return (
                                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

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
                                            )
                                        }
                                    )
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewFood