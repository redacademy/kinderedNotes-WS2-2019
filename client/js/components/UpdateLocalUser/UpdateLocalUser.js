import {useEffect} from 'react'
import {useQuery} from '@apollo/react-hooks'
import {GET_ACTIVE_USER} from '../../context'
import {useAuth} from '../../hooks'

const UpdateLocalUser = () => {
  const {localUser, setUser, setLocalUser} = useAuth()
  const {data: activeUserData} = useQuery(GET_ACTIVE_USER)

  // updates context and local storage when `getActiveUser` query is triggered
  useEffect(() => {
    if (localUser && activeUserData) {
      setUser({...localUser, user: activeUserData.me})
      setLocalUser({...localUser, user: activeUserData.me})
    }
  }, [activeUserData, localUser])

  return null
}

export default UpdateLocalUser
