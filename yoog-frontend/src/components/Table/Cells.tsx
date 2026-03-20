import type { TableProps } from './types'

export function Cells<T>(props: TableProps<T>) {
  if (props.data.length <= 0) {
    return (
      <tr>
        <td>Nenhum conteúdo encontrado</td>
      </tr>
    )
  }

  return props.data.map((r, i) => (
    <tr
      key={i}
      onClick={() => props.onClickCell && props.onClickCell(r)}
      className={`table-cells ${props.onClickCell ? 'table-cell-click' : ''}`}
    >
      {
        props.columns.map((c) => {
          const value = r[c.key]

          return (
            <td key={String(c.key)}>
              {c.render ? c.render(value, r) : String(value)}
            </td>
          )
        })
      }
    </tr>
  ))
}