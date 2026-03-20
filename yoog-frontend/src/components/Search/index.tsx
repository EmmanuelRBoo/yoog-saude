import { useMemo } from 'react'
import Select from 'react-select/async'
import debounce from 'lodash.debounce'

import type { SearchProps } from './types'

import './style.css'

export function Search(props: SearchProps) {
  const loadOptions = async (inputValue: string) => {
    if (!inputValue) return []

    const response = await props.async(inputValue)

    return response.map((data: any) => ({
      label: data.name,
      value: data.id
    }))
  }

  const debounceLoad = useMemo(() => debounce(loadOptions, 500), [])

  return (
    <label
      className='input-container'
      htmlFor={props.name}
    >
      <span>{props.label}</span>

      <Select
        cacheOptions
        defaultOptions
        loadOptions={debounceLoad}
        onChange={(value) => value && props.onSelect(value)}
        name={props.name}
        className='select-input'
      />
    </label>
  )
}