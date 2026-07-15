import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'


const ViewVendor = () => {

    const [data, changeData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

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

                                    </tr>

                                ))}

                            </tbody>


                        </table>


                    </div>

                </div>

            </div>

        </div>

    )

}


export default ViewVendor