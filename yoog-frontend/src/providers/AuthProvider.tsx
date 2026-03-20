import { createContext, useState } from 'react'

import type { AuthProviderProps, AuthContextProps, AuthPages } from '../types/AuthProvider.type'

export const AuthContext = createContext<Partial<AuthContextProps>>({})

export function AuthProvider(props: AuthProviderProps) {
  const [page, setPage] = useState<AuthPages>('LOGIN')

  const value = {
    page, setPage
  }

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}