import { useMutation } from '@apollo/client'
import { useContext, useState } from 'react'
import { CREATE_USER_MUTATION } from '../../graphql/mutations/createUser'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/GlobalContext'

function Register() {

  const navigate = useNavigate()

  //Context
  const {user, setUser} = useContext(UserContext)

  //State
  const [name, setName] = useState("")
  const [role, setRole] = useState("Admin")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [options, setOptions] = useState(['Admin', 'Common'])


  //function to verify input values
  const validateValues = (item) => {
    let allowInsertion = true
    let conditionToEmails = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    if(name === "") allowInsertion = false
    if(email === "" || !conditionToEmails.test(email)) allowInsertion = false
    if(password.length < 6) allowInsertion = false
    if(role != "Admin" && role != "Common") allowInsertion = false
    return allowInsertion
  }

  //function to manage change of value
  const handleChange = (event, item) => {
    let value = event.target.value
    if(item === 'email') setEmail(value)
    if(item === 'name') setName(value)
    if(item === 'role') setRole(value)
    if(item === 'password') setPassword(value)
  }

  const [mutationFunction, { data, loading, error }] = useMutation(CREATE_USER_MUTATION, {
    variables: {
      "name": name,
      "email": email, 
      "role": role,
      "password": password
    }

  })

  const registerFunction = async () => {
    if(validateValues()){
      const result = await mutationFunction()
      setUser(result.data.createUser)
      navigate("/users")
    }else{
      alert("Verify Information of Fields")
    }
  }

  const goToLogin = async () => {
    navigate("/")
  }

  return (
    <div className='div-center'>
      <h1>Register</h1>
      <label>Name:</label><input value={name} onChange={(event) => handleChange(event, 'name')} type='text'/>
      <br />
      <label>Role:</label><select value={role}>{options.map(option => {
        return <option key={option} value={option} onClick={(event) => handleChange(event, 'role')}>{option}</option>
      })}</select>
      <br />
      <label>Email:</label><input value={email} onChange={(event) => handleChange(event, 'email')} type='text'/>
      <br />
      <label>Password:</label><input value={password} type="password" onChange={(event) => handleChange(event, 'password')}/>
      <br />
      <button onClick={registerFunction}>Register</button>
      <button onClick={goToLogin}>Go to LogIn!</button>
    </div>
  )
}

export default Register
