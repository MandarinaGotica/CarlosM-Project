import { useLazyQuery, useMutation } from '@apollo/client'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AUTH_QUERY } from '../../graphql/querys/authentication'
import { UserContext } from '../../context/GlobalContext'

function LogIn() {

  const navigate = useNavigate()

  //Context
  const {user, setUser} = useContext(UserContext)
  //State
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //function to manage change of value
  const handleChange = (event, item) => {
    let value = event.target.value
    if(item === 'email') setEmail(value)
    if(item === 'password') setPassword(value)
  }

  const [logInQueryFunction, { data, loading, error }] = useLazyQuery(AUTH_QUERY, {
    variables: {
      "email": email, 
      "password": password
    }

  })

  const logInFunction = async () => {
    
    const result = await logInQueryFunction()
    //console.log(result)
    if(!result.data.authentication){
      alert("Verify Information of Fields. User or password are not valid")
    }else{
      setUser(result.data.authentication)
      navigate("/users")
    }
  }

  const goToRegister = () => {
    navigate("/register")
  }

  return (
    <div className='div-center'>
      <h1>Log In</h1>
      <br />
      <label>Email:</label><input value={email} onChange={(event) => handleChange(event, 'email')} type='text'/>
      <br />
      <label>Password:</label><input value={password} type="password" onChange={(event) => handleChange(event, 'password')}/>
      <br />
      <button onClick={logInFunction}>Log In</button>
      <button onClick={goToRegister}>Go to Register!</button>
    </div>
  )
}

export default LogIn
