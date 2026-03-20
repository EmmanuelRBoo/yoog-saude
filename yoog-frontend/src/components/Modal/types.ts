export type ModalProps = {
  title: string
  children: React.ReactNode
  onSubmit: (value: {[k: string]: FormDataEntryValue}) => void
  onCancel: () => void
  showFooter?: boolean
}