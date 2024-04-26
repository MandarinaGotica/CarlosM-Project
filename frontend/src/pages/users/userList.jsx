import { useContext, useState } from "react"
import { ModalContext, UserContext } from "../../context/GlobalContext"
import EditUser from "./editUser"

function UserList({users}) {

    const {user, setUser} = useContext(UserContext)
    const [userSelected, setUserSelected] = useState(null)
    const {visibility, setVisibility} = useContext(ModalContext)

    const selectUserToEdit = (userItem) => {

        setVisibility(true)
        setUserSelected({...userItem})
    }

    return (
        <div className="div-center">
            <h1>{"User: " + user.email + " / Role: " + user.role}</h1>
            <br />
            <br />
            <EditUser userSelected={userSelected}/>
            <table className="">
                <thead>
                <tr className="">
                    <th> </th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody className="">
                    {users.map(userItem => <tr>
                        {user.role === "Admin" && <th><td>
                            <button onClick={() => selectUserToEdit(userItem)}>Edit</button>
                        </td></th>}
                        <th><td>{userItem.id}</td></th>
                        <th><td>{userItem.name}</td></th>
                        <th><td>{userItem.email}</td></th>
                        <th><td>{userItem.role}</td></th>
                    </tr>)}
                </tbody>
            </table>

        </div>
    )
}

export default UserList
