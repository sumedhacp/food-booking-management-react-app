import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'


const AddFood = () => {

    const [input, changeInput] = useState(

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

    )

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add-food", input).then(

            (response) => {
                console.log(response.data)
                alert("Food Added Successfully")
            }

        ).catch(

            (error) => {
                console.error("Error Adding Food!", error)
                alert("Failed to Add Food!")
            }

        )

    }


    return (
        <div className="page-shell">
            <NavigationBar />
            <div className="container">
                <div className="page-card p-4 p-md-5">
                    <div className="page-header">
                        <div>
                            <h3 className="section-title">Add Food</h3>
                            <p className="section-subtitle">Capture food menu details with a clearer form layout.</p>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Menu ID : </label>
                            <input type="text" className="form-control" name="menuId" value={input.menuId} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Vendor ID: </label>
                            <input type="text" className="form-control" name="vendorId" value={input.vendorId} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Vendor Name: </label>
                            <input type="text" className="form-control" name="vendorName" value={input.vendorName} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Food Item Name: </label>
                            <input type="text" className="form-control" name="foodItemName" value={input.foodItemName} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Food Category: </label>
                            <input type="text" className="form-control" name="foodCategory" value={input.foodCategory} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Cuisine Type: </label>
                            <input type="text" className="form-control" name="cuisineType" value={input.cuisineType} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price: </label>
                            <input type="text" className="form-control" name="price" value={input.price} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Availability Status: </label>
                            <input type="text" className="form-control" name="availabilityStatus" value={input.availabilityStatus} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Special Offer: </label>
                            <input type="text" className="form-control" name="specialOffer" value={input.specialOffer} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Food Image URL: </label>
                            <input type="text" className="form-control" name="foodImageUrl" value={input.foodImageUrl} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success px-4" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFood