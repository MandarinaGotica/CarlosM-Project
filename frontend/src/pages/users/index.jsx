import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_USERS_QUERY } from '../../graphql/querys/users'
import Spinner from '../../components/spinner'
import UserList from './userList'

function Users() {

    const { loading, error, data } = useQuery(GET_USERS_QUERY)

    if(loading) return <Spinner />

    if(error) return <>{error}</>

    return (
        <>
            <UserList users={data.users} />
        </>
    )
}

export default Users
