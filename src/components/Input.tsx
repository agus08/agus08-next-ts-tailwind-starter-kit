import React, { useState } from 'react'
import IconEyeSlash from '@assets/icons/icon-eye-slash.svg'
import IconEye from '@assets/icons/icon-eye.svg'

export interface InputProp {
  id: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
  name?: string
  required?: boolean
  label?: string
  placeholder?: string
  full?: boolean
  error?: boolean
  helper?: boolean
  errorMsg?: string
  withBg?: boolean
  type: string
  autocomplete?: boolean
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>
  dashed?: boolean
  infoMsg?: string
  infoMsgHelper?: string
  roundedFull?: boolean
  disabled?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const Input: React.FC<InputProp> = ({
  id,
  register,
  name = 'input',
  label,
  placeholder,
  withBg,
  Icon,
  full,
  error,
  errorMsg,
  type,
  autocomplete,
  dashed,
  infoMsg,
  roundedFull,
  disabled,
  value,
  helper,
  infoMsgHelper,
  onChange,
  className,
}) => {
  const ifFull = full ? 'w-full' : 'w-max'
  const ifRoundedFull = roundedFull ? 'rounded-full' : ''
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <>
      <div
        className={`relative ${className} ${ifFull} ${
          error && errorMsg && 'pb-3'
        } `}
      >
        <input
          {...(register ? register(name) : {})}
          autoComplete={autocomplete ? 'on' : 'off'}
          onChange={onChange}
          type={showPassword ? 'text' : type}
          id={id}
          className={`rounded-lg ${ifRoundedFull} flex-1 appearance-none border border-gray-200 ${
            dashed ? 'border-dashed' : ''
          } ${withBg ? 'bg-gray-50' : 'bg-white'}
            ${ifFull} py-2.5 px-2.5 placeholder-gray-400 text-base focus:outline-none focus:ring-2
            focus:ring-primary2 focus:border-transparent ${
              error ? 'ring-2 ring-red-500' : ''
            } ${disabled ? 'text-colorText' : '!text-primary2'}`}
          name={name}
          placeholder={label ? ' ' : placeholder}
          disabled={disabled}
          value={value}
        />

        <label
          data-icon={!!Icon}
          htmlFor={id}
          className={`absolute ${
            Icon ? 'left-9' : 'left-3'
          } top-2.5 duration-300 origin-0 bg-white px-2  ${
            disabled ? 'text-colorText' : 'text-gray-700'
          }`}
        >
          {label}
        </label>

        {Icon && (
          <span
            className={`label-icon absolute duration-300 left-1 top-1 p-2 rounded-full ${
              disabled ? 'text-gray-200' : ''
            }`}
          >
            <Icon />
          </span>
        )}

        {type === 'password' && !disabled && (
          <button
            className="absolute right-1 top-1 p-2"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IconEye /> : <IconEyeSlash />}
          </button>
        )}

        {error && (
          <p className="absolute italic text-error  text-xs -bottom-2">
            {errorMsg}
          </p>
        )}

        {infoMsg && !error && (
          <p className={`absolute text-base -bottom-0 text-colorText `}>
            {infoMsg}
          </p>
        )}

        {helper && (
          <p className="absolute text-base italic text-semantic-alert -bottom-6">
            {infoMsgHelper}
          </p>
        )}

        {infoMsgHelper && !helper && (
          <p className={`absolute text-base   -bottom-0 text-colorText `}>
            {infoMsgHelper}
          </p>
        )}
      </div>
    </>
  )
}

Input.defaultProps = {
  label: '',
  placeholder: 'Type something',
  full: false,
  required: false,
  error: false,
  errorMsg: 'Invalid',
  withBg: false,
  autocomplete: false,
}

export default Input
