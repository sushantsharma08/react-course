import React,{useContext,useState} from 'react'
import { UserContext } from './StateMangement';

const StateProfile = () => {

  const {User,setUser} = useContext(UserContext);
  const [NewUser, setNewUser] = useState('');

  const changeUser =()=>{
    setUser(NewUser);
  }

  return (
    <div>
      <h3>Set your profile</h3>
      <hr style={{width:'40%'}} />
        <input placeholder='John doe' type="text" onChange={(e)=>{
          setNewUser(e.target.value)
        }}/>
        <button onClick={changeUser}>Set User</button>
        {User}
    </div>
  )
}

export default StateProfile