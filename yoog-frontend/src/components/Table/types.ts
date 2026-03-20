export type TableColumns<T, K extends keyof T = keyof T> = {
  key: K
  title: string
  render?: (value: T[K], row: T) => React.ReactNode
}

export type TableProps<T> = {
  data: T[]
  columns: TableColumns<T>[]
  onClickCell?: (cell: T) => void
}