import React from 'react'

const ReactForms = () => {
  return (
    <div className='form-main' style={{display:"flex",alignItems:"center", justifyContent:"center",flexDirection:"column"}}>
        <h1>React Forms</h1>
        <p style={{color:"gray"}}>This form has an submit feature which returns an object of data entered by the user</p>
        <form style={{textAlign:"right",fontSize:"20px"}}> 
            <label htmlFor="fullname">Fullname : </label>
            <input type="text" id='fullname' name='fullname' placeholder='FullName' />
            <br />
            <label htmlFor="Age">age : </label>
            <input type="text" id='Age' name='age' placeholder='Age' />
            <br />
            <label htmlFor="Email">Email : </label>
            <input type="text" id='Email' name='email' placeholder='email' />
            <br />
            <label htmlFor="Phone No.">Phone No. : </label>
            <input type="text" id='Phone No.' name='phone' placeholder='Phone No.' />
        </form>
    </div>
  )
}

export default ReactForms