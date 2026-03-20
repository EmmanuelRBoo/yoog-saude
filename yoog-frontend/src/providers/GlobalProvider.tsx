import { createContext, useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'

import { Header } from '../components/Header'
import type { GlobalContextProps, User } from '../types/GlobalProvider.type'

export const GlobalContext = createContext<Partial<GlobalContextProps>>({})

export function GlobalProvider() {
  const [user, setUser] = useState<User | null>(null)

  const router = useNavigate()
  const notify = (message: string) => toast(message)

  const logOut = () => {
    router('/')
    setUser(null)
    localStorage.removeItem('token')
  }

  const value = {
    notify,
    logOut,
    user, setUser
  }

  useEffect(() => {
    // if () {

    // }
  }, [])

  return (
    <GlobalContext.Provider value={value}>
      {user && <Header />}
      <Outlet />
      <ToastContainer />
    </GlobalContext.Provider>
  )
}