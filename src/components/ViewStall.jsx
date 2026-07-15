import axios from 'axios'
import React, { useEffect, useState } from 'react'


const View = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3000/view-stall")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
           
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>bookingid</th>
                                    <th>vendorid</th>
                                     <th>vendorname</th>
                                    <th>stallnumber</th>
                                    <th>bookingdate</th>
                                    <th> bookingtime</th>
                                    <th> rentalamount</th>
                                    <th>paymentstatus</th>
                                    <th>bookingstatus</th>
                                     <th>festivalday</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((value, index) => (
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