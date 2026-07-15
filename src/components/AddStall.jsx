import axios from 'axios'
import React, { useState } from 'react'



const AddStall = () => {


const [input, changeInput] = useState({

    bookingid:"",
    vendorid:"",
    vendorname:"",
    stallnumber:"",
    bookingdate:"",
    bookingtime:"",
    rentalamount:"",
    paymentstatus:"",
    bookingstatus:"",
    festivalday:"",
    

})



const inputHandler = (event)=>{

    changeInput({

        ...input,
        [event.target.name]:event.target.value

    })

}



const readValue = ()=>{


    console.log(input)


    axios.post("http://localhost:3000/add-stall",input)

    .then((response)=>{

        console.log(response.data)

        alert("stall Added Successfully")

    })

    .catch((error)=>{

        console.log(error)

    })


}



return(

<div>



<div className="container">

<div className="row">

<div className="col-12">


<div className="row">



<div className="col-12">

<label className="form-label">
bookingid
</label>

<input

type="text"

className="form-control"

name="bookingid"

value={input.bookingid}

onChange={inputHandler}

/>

</div>





<div className="col-12">

<label className="form-label">
vendorid
</label>

<input

type="text"

className="form-control"

name="vendorid"

value={input.vendorid}

onChange={inputHandler}

/>

</div>





<div className="col-12">

<label className="form-label">
vendorname
</label>
<input type="text" className="form-control" name="vendorname" value={input.vendorname}  onChange={inputHandler}/>









</div>





<div className="col-12">

<label className="form-label">
stallnumber
</label>


<input

type="text"

className="form-control"

name="stallnumber"

value={input.stallnumber}

onChange={inputHandler}

/>


</div>





<div className="col-12">

<label className="form-label">
bookingdate
</label>


<input

type="text"

className="form-control"

name="bookingdate"

value={input.bookingdate}

onChange={inputHandler}

/>


</div>





<div className="col-12">

<label className="form-label">
bookingtime
</label>


<input

type="text"

className="form-control"

name="bookingtime"

value={input.bookingtime}

onChange={inputHandler}

/>


</div>





<div className="col-12">

<label className="form-label">
rentalamount
</label>





<input type="text" className="form-control" name="rentalamount" value={input.rentalamount} onChange={inputHandler} />


</div>





<div className="col-12">

<label className="form-label">
 paymentstatus</label>


<input

type="text"

className="form-control"

name="paymentstatus"

value={input.paymentstatus}

onChange={inputHandler}

/>


</div>





<div className="col-12">

<label className="form-label">
 bookingstatus
</label>


<input

type="text"

className="form-control"

name="bookingstatus"

value={input.bookingstatus}

onChange={inputHandler}

/>


</div>





<div className="col-12">

<label className="form-label">
festivalday</label>


<input

type="text"

className="form-control"

name="festivalday"

value={input.festivalday}

onChange={inputHandler}

/>


</div>





















<div className="col-12 mt-3">


<button

className="btn btn-success"

onClick={readValue}

>

Submit

</button>


</div>



</div>


</div>


</div>


</div>


</div>


)


}


export default AddStall