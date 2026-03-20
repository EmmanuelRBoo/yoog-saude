export type AuthProviderProps = {
  children: React.ReactNode
}

export type AuthPages = 'LOGIN' | 'REGISTER'

export type AuthContextProps = {
  page: AuthPages
  setPage: (page: AuthPages) => void
  
}