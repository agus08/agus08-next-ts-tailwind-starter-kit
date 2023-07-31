import React from 'react'
export interface TextAreaProp {
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
  col?: number
  infoMsg?: string
  infoMsgHelper?: string
  roundedFull?: boolean
  disabled?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

const TextArea: React.FC<TextAreaProp> = ({
  id,
  register,
  name = 'input',
  label,
  placeholder,
  withBg,
  full,
  error,
  errorMsg,
  type,
  autocomplete,
  dashed,
  col,
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

  return (
    <>
      <div
        className={`relative ${className} ${ifFull} ${
          error && errorMsg && 'pb-3'
        } `}
      >
        <textarea
          {...(register ? register(name) : {})}
          autoComplete={autocomplete ? 'on' : 'off'}
          onChange={onChange}
          type={type}
          id={id}
          col={col || 2}
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
          data-icon={'false'}
          htmlFor={id}
          className={`absolute left-3 top-2.5 duration-300 origin-0 bg-white px-2  ${
            disabled ? 'text-colorText' : 'text-gray-700'
          }`}
        >
          {label}
        </label>

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

TextArea.defaultProps = {
  label: '',
  placeholder: 'Type something',
  full: false,
  required: false,
  error: false,
  errorMsg: 'Invalid',
  withBg: false,
  autocomplete: false,
}

export default TextArea
