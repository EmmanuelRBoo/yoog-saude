export type SearchProps = {
  async: (input: string) => Promise<any[]>
  onSelect: (option: { value: string, label: string }) => void
  name: string
  label: string
}