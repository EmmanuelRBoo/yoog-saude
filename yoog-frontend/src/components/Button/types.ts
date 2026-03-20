export type ButtonProps = {
  children: React.ReactNode | React.ReactNode[]
  loading?: boolean
  disable?: boolean
  variant?: 'success' | 'default' | 'danger'
  type?: 'button' | 'submit'
  align?: 'left' | 'right'
  onClick?: () => void
}