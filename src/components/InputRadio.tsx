import { FC } from 'react'

interface InputRadioProps {
  id?: string
  name?: string
  checked?: boolean
  label: string
  onChecked?: (checked: boolean) => void
}

const InputRadio: FC<InputRadioProps> = ({
  id,
  name,
  checked,
  label,
  onChecked,
}) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <button
        id={id}
        name={name}
        className={`p-[3px] transition-colors border ${
          checked ? 'border-primary2' : 'border-stone-300'
        } rounded-full`}
        onClick={() => (onChecked ? onChecked(!checked) : null)}
      >
        <div
          className={`w-[10px] h-[10px] transition-colors rounded-full ${
            checked ? 'bg-primary2' : 'bg-transparent'
          }`}
        />
      </button>
      <label
        htmlFor={id}
        className={`font-medium text-base ${
          checked ? 'text-primary2' : 'text-colorText'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default InputRadio
