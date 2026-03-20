export type GlobalContextProps = {
  notify: (message: string) => void
  logOut: () => void
  user: User | null
  setUser: (user: User | null) => void
}

export type User = {
    id: string
    email: string
    name: string
    tem: string
  }