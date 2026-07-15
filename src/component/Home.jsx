import React from "react"

const Home = () => {

    return (

        <div>

            <style>

                {`

                body {
                    margin:0;
                    font-family:'Poppins', sans-serif;
                    background:#f8f9fa;
                }


                .hero {

                    height:100vh;

                    background:
                    linear-gradient(
                        rgba(0,0,0,0.65),
                        rgba(0,0,0,0.65)
                    ),
                    url("https://images.unsplash.com/photo-1515003197210-e0cd71810b5f");

                    background-size:cover;

                    background-position:center;

                    display:flex;

                    align-items:center;

                    justify-content:center;

                    text-align:center;

                    color:white;

                }




                .hero-content {

                    max-width:900px;

                    padding:30px;

                }





                .hero h1 {

                    font-size:60px;

                    font-weight:800;

                    letter-spacing:1px;

                    margin-bottom:20px;

                }




                .hero h1 span {

                    color:#ffc107;

                }





                .hero p {

                    font-size:22px;

                    line-height:1.7;

                    color:#eeeeee;

                }







                .section-title {

                    text-align:center;

                    margin:70px 0 40px;

                }





                .section-title h2 {

                    font-size:38px;

                    font-weight:700;

                    color:#198754;

                }





                .section-title p {

                    font-size:18px;

                    color:#666;

                }







                .card-box {

                    background:white;

                    padding:35px 25px;

                    border-radius:20px;

                    text-align:center;

                    height:100%;

                    box-shadow:
                    0 10px 30px rgba(0,0,0,0.12);

                    transition:0.4s;

                }






                .card-box:hover {

                    transform:translateY(-12px);

                    box-shadow:
                    0 15px 35px rgba(0,0,0,0.22);

                }





                .icon {

                    width:80px;

                    height:80px;

                    background:#198754;

                    color:white;

                    border-radius:50%;

                    display:flex;

                    justify-content:center;

                    align-items:center;

                    margin:auto;

                    margin-bottom:20px;

                    font-size:35px;

                }






                .card-box h3 {

                    font-size:25px;

                    font-weight:700;

                    color:#333;

                }






                .card-box p {

                    color:#666;

                    line-height:1.7;

                }







                .about {

                    margin-top:70px;

                    background:#198754;

                    color:white;

                    padding:60px 20px;

                    text-align:center;

                }






                .about h2 {

                    font-size:40px;

                    font-weight:700;

                }







                .about p {

                    max-width:900px;

                    margin:auto;

                    font-size:18px;

                    line-height:1.8;

                }






                .footer {

                    background:#222;

                    color:white;

                    text-align:center;

                    padding:20px;

                }







                @media(max-width:768px){

                    .hero h1{

                        font-size:38px;

                    }


                    .hero p{

                        font-size:17px;

                    }

                }


                `}

            </style>





            {/* Hero Section */}

            <section className="hero">


                <div className="hero-content">


                    <h1>

                        Welcome to 
                        <span> Food Festival </span>

                        <br/>

                        Stall Booking System

                    </h1>



                    <p>

                        Manage food vendors, stall bookings,
                        and delicious food menus efficiently
                        with our smart festival management platform.

                    </p>


                </div>


            </section>






            {/* Feature Section */}

            <div className="container">


                <div className="section-title">


                    <h2>
                        Festival Management Modules
                    </h2>


                    <p>
                        Complete solution for managing your food festival
                    </p>


                </div>





                <div className="row g-4">



                    <div className="col-md-4">

                        <div className="card-box">


                            <div className="icon">
                                👨‍🍳
                            </div>


                            <h3>
                                Vendor Management
                            </h3>


                            <p>
                                Register vendors, manage business details,
                                licenses, and food categories easily.
                            </p>


                        </div>

                    </div>






                    <div className="col-md-4">


                        <div className="card-box">


                            <div className="icon">
                                🏪
                            </div>


                            <h3>
                                Stall Booking
                            </h3>


                            <p>
                                Manage stall allocation, booking dates,
                                payments, and festival schedules.
                            </p>


                        </div>


                    </div>






                    <div className="col-md-4">


                        <div className="card-box">


                            <div className="icon">
                                🍔
                            </div>


                            <h3>
                                Food Menu
                            </h3>


                            <p>
                                Add food items, prices, offers,
                                images, and availability status.
                            </p>


                        </div>


                    </div>



                </div>


            </div>








            {/* About Section */}


            <section className="about">


                <h2>
                    Celebrate Food. Manage Better.
                </h2>


                <p>

                    Food Festival Stall Booking System provides a simple
                    and powerful way to organize vendors, stalls, and menus
                    in one place. Built with modern technology for smooth
                    festival operations.

                </p>


            </section>







            <div className="footer">

                © 2026 Food Festival Stall Booking System

            </div>


        </div>

    )

}


export default Home