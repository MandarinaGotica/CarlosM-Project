import { useContext, useEffect, useState } from "react"
import { ModalContext, UserContext } from "../../context/GlobalContext"
import { UPDATE_USER } from "../../graphql/mutations/updateUser"
import { useMutation } from "@apollo/client"
import { DELETE_USER } from "../../graphql/mutations/deleteUser"
import { GET_USERS_QUERY } from "../../graphql/querys/users"

function EditUser({ userSelected }) {

    const { visibility, setVisibility } = useContext(ModalContext)

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [options, setOptions] = useState(['Admin', 'Common'])

    const handleChange = (event, item) => {
        let value = event.target.value
        if (item === 'email') setEmail(value)
        if (item === 'name') setName(value)
        if (item === 'role') setRole(value)
    }

    const [updateMutationFunction, { data, loading, error }] = useMutation(UPDATE_USER, {
        variables: {
            "updateUserId": id,
            "name": name,
            "email": email,
            "role": role,
            "password": ""
        }

    })

    const [deleteMutationFunction, result] = useMutation(DELETE_USER, {
        variables: {
            "deleteUserId": id,
            "name": name,
            "email": email,
            "role": role,
            "password": ""
        },
        refetchQueries: [
            { query:  GET_USERS_QUERY}
        ]

    })

    useEffect(() => {
        if (userSelected != null) {
            setId(userSelected.id)
            setName(userSelected.name)
            setEmail(userSelected.email)
            setRole(userSelected.role)
        }
    }, [userSelected])

    return (
        <>
            {visibility && (
                <div>
                    <h1>Edit</h1>
                    <label>Name:</label><input value={name} onChange={(event) => handleChange(event, 'name')} type='text' />
                    <br />
                    <label>Role:</label><select value={role}>{options.map(option => {
                        return <option key={option} value={option} onClick={(event) => handleChange(event, 'role')}>{option}</option>
                    })}</select>
                    <br />
                    <label>Email:</label><input value={email} onChange={(event) => handleChange(event, 'email')} type='text' />
                    <br />
                    <button onClick={updateMutationFunction}>Confirm Edit</button>
                    <button onClick={deleteMutationFunction}>Delete</button>
                    <button onClick={() => setVisibility(false)}>Cancel</button>
                </div>
            )}
        </>
    )
}

export default EditUser
