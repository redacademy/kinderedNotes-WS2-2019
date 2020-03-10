import {useContext, useEffect, useState} from 'react'
import {useMutation} from '@apollo/react-hooks'
import {AuthContext, SIGN_UP, LOG_IN} from '../context'
import {useAsyncStorage} from '../hooks'

const useAuth = () => {
  const {user, setUser} = useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(false)
  // TODO: gracefully handle network errors
  const [signup, {data: signupData}] = useMutation(SIGN_UP)
  const [login, {data: loginData}] = useMutation(LOG_IN)
  const [localUser, setLocalUser] = useAsyncStorage('kindred-user')

  const logout = () => {
    setUser(null)
    setLocalUser(null)
  }

  const toggleIsLogin = () => setIsLogin(s => !s)

  useEffect(() => {
    if (!user && (signupData || loginData)) {
      if (isLogin && loginData) {
        setUser(loginData.login)
        setLocalUser(loginData.login)
      } else if (!isLogin && signupData) {
        setUser(signupData.signup)
        setLocalUser(signupData.signup)
      }
    }
  }, [user, setUser, signupData, loginData, isLogin, setLocalUser])

  return {
    user,
    isLoggedIn: !!localUser && !!user,
    signup,
    logout,
    login,
    toggleIsLogin,
    isLogin,
  }
}

export default useAuth
