
import React, { useState } from 'react'
import {Valdaction} from '../component/Valdaction'


const Fome=()=>{
const [fname,setfname]=useState("")
const[lname,setlname]=useState("")
const [address ,setaddress]=useState("")
const[city ,setcity]=useState("")
const[state,setstate]=useState("")
const[zip,setzip]=useState("")
const[data,setdata]=useState([]);
const [errors,seterrors]=useState(false)
const sumbit=(e)=>{
    e.preventDefault()
const abhi={fname:fname,lname:lname,email:email,address:address,city:city,state:state,zip:zip}

setdata([...data,abhi])
 if(fname.length>=4 && city.length==10&&lname.length>=3){
   window.alert('form valid')
 
 }else if(city.length!=10){
    seterrors(true)
 }
 
}
  
    return(
        <>
        {/* <pre>{JSON.stringify(data)}</pre> */}
<form className="row g-3" onSubmit={sumbit}>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">FistName</label>
    <input required minLength={3} maxLength={16} type="text" className="form-control" id="inputEmail4" value={fname} onChange={(e)=>setfname(e.target.value)}/>
    <span>{errors?"plz enter valid name":null}</span>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">lastname</label>
    <input type="text" className="form-control" id="inputPassword4" value={lname} onChange={(e)=>setlname(e.target.value)}/>
    <span>{errors?"plz enter valid name":null}</span>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputAddress" placeholder="1234 Main St" value={email} onChange={(e)=>setemail(e.target.value)}/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address </label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address} onChange={(e)=>setaddress(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Phone number</label>
    <input type="tel" className="form-control" id="inputCity"value={city} onChange={(e)=>setcity(e.target.value)} required minLength={10} maxLength={10}  />
    <span>{errors?"ple enter valid number":null}</span>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select" value={state} onChange={(e)=>setstate(e.target.value)}>
      <option selected>Choose...</option>
      <option>Noida</option>
      <option>Saharanpur</option>
      <option>jislks</option>
      <option>Dehli</option>

    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"value={zip} onChange={(e)=>setzip(e.target.value)}/>
  </div>
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
{
    data.map((cur)=>{
return(<>

<p>{cur.fname}</p>
<p>{cur.lname}</p>
<p>{cur.email}</p>
<p>{cur.address}</p>
<p>{cur.phone}</p>
<p>{cur.city}</p>
<p>{cur.state}</p>


</>)
    })
}
        </>
    )
    }
    export default Fome;