import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'


const View = () => {

    const [data, changeData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

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

export default View