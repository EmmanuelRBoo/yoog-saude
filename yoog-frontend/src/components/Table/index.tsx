import type { TableProps } from './types'

import { Cells } from './Cells'

import './style.css'

export function Table<T>(props: TableProps<T>) {
  return (
    <table className='table-container'>
      <thead>
        <tr className='table-header'>
          {
            props.columns.map((c) => (
              <th key={String(c.key)}>
                <span>{c.title}</span>
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        <Cells {...props} />
      </tbody>
    </table>
  )
}