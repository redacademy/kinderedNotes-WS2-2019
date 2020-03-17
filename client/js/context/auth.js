import React, {createContext, useState} from 'react'

const AuthContext = createContext({user: null, setUser: null})

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(undefined)

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
