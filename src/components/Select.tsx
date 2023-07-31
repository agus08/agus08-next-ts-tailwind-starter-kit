/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import ReactSelect, { components, DropdownIndicatorProps } from 'react-select'
import IconArrowCircleDown from '@assets/icons/icon-arrow-circle-down.svg'

interface SelectProps {
  className?: string
  isSearchable?: boolean
  options?: any
  defaultValue?: any
  placeholder?: string
  isLoading?: boolean
  isClearable?: boolean
  onChange?: (value: any) => void
}

const DropdownIndicator = (props: DropdownIndicatorProps<true>) => {
  return (
    <components.DropdownIndicator {...props}>
      <IconArrowCircleDown />
    </components.DropdownIndicator>
  )
}

const Select: FC<SelectProps> = (props) => {
  return (
    <div className="w-full">
      <span
        className={`text-base font-normal italic text-colorText transition-opacity ${
          props.defaultValue ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {props.placeholder}
      </span>
      <ReactSelect
        components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        className="select-component"
        classNamePrefix="custom-select"
        {...props}
      />
    </div>
  )
}

export default Select
