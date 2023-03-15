import React from 'react'

const StateProfile = () => {
  return (
    <div>
      <h3>Set your profile</h3>
      <hr style={{width:'40%'}} />
      <form action="">
        <input placeholder='John doe' type="text" />
        <button>Set Name</button>
      </form>
    </div>
  )
}

export default StateProfile