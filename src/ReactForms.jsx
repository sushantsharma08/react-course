import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";



const ReactForms = () => {

  const schema = yup.object().shape({
    fullname: yup.string().required(),
    age: yup.number().positive().integer().min(10),
    email: yup.string().email().required(),
    phone: yup.number().positive(),
    password: yup.string().min(5).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required()
  })

  const [register, handleSubmit] = useState({
    resolver: yupResolver(schema)
  }
  );
  const [data, setShowData] = useState(null)

  const submit = (data) => {
    event.preventDefault();
    setShowData(register)
  }
  const handleChange = (name, value) => {
    handleSubmit({ ...register, [name]: value })
  }

  return (
    <div className='form-main' style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <h1>React Forms</h1>
      <p style={{ color: "gray" }}>This form has an submit feature which returns an object of data entered by the user</p>

      <div className="content" style={{padding:"2rem",display:"flex",justifyContent:"space-evenly"}}>

        <form onSubmit={submit} style={{padding:"2rem", textAlign: "right", fontSize: "20px" }}>

          <label htmlFor="fullname">Fullname : </label>
          <input type="text" id='fullname' name='fullname' placeholder='FullName' onChange={(event) => handleChange(event.target.name, event.target.value)} />

          <br />

          <label htmlFor="Age">age : </label>
          <input type="text" id='Age' name='age' placeholder='Age' onChange={(event) => handleChange(event.target.name, event.target.value)} />

          <br />

          <label htmlFor="Email">Email : </label>
          <input type="text" id='Email' name='email' placeholder='email' onChange={(event) => handleChange(event.target.name, event.target.value)} />

          <br />

          <label htmlFor="Phone No.">Phone No. : </label>
          <input type="text" id='Phone No.' name='phone' placeholder='Phone No.' onChange={(event) => handleChange(event.target.name, event.target.value)} />

          <br />

          <label htmlFor="Password">Password : </label>
          <input type="password" id='Password' name='password' placeholder='Password' onChange={(event) => handleChange(event.target.name, event.target.value)} />

          <br />

          <label htmlFor="ConfirmPassword">Confirm Password : </label>
          <input type="password" id='ConfirmPassword' name='confirmPassword' placeholder='Confirm Password' onChange={(event) => handleChange(event.target.name, event.target.value)} />

          <br /><br />

          <button type="submit">Submit</button>
        </form>
        <hr />
        <div className="data" style={{padding:"2rem"}}>
          {data?.fullname}
          <br />
          {data?.age}
          <br />
          {data?.email}
          <br />
          {data?.phone}
        </div>
      </div>

    </div>
  )
}

export default ReactForms