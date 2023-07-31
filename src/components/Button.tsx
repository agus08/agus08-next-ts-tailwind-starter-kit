import React from 'react'

const colors = {
  default:
    'bg-gray-100 hover:bg-gray-200 focus:ring-gray-100 focus:ring-offset-gray-100 text-gray-500 text-light',
  primary:
    'bg-primary2 shadow-md hover:bg-primary2 focus:ring-primary text-white',
  secondary:
    'bg-backgroundSecondary hover:text-primary text-primary2 hover:text-primary2 focus:text-primary focus:ring-primary',
  outline:
    'bg-white border border-primary2 hover:border-primary2 hover:text-primary2 focus:ring-primary-light text-primary2',
  outlineDisabled: 'bg-white text-text-second',
  white:
    'bg-white text-primary hover:text-primary2 hover:bg-secondary focus:ring-primary-light',
  warning: 'bg-semantic-alert shadow-md focus:ring-semantic-alert text-white',
}

const sizes = {
  default: 'py-2 text-base font-medium ',
  small: 'py-1 px-3 text-base',
  large: 'py-4 px-4 text-lg font-semibold',
}

export interface ButtonProp
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'outlineDisabled'
    | 'white'
    | 'warning'
  full?: boolean
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>
  disabled?: boolean
  size?: 'default' | 'small' | 'large'
  autoResize?: boolean
  IconRight?: React.FC<React.SVGProps<SVGSVGElement>>
  IconLeft?: React.FC<React.SVGProps<SVGSVGElement>>
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProp>(
  (
    {
      size = 'default',
      label,
      variant = 'default',
      full = false,
      Icon,
      disabled = false,
      loading = false,
      autoResize,
      className,
      onClick,
      IconRight,
      type,
    },
    ref
  ) => {
    const ifFull = full ? 'w-full' : 'w-max'
    const iconOnly =
      Icon && !label ? (size == 'small' ? 'px-1' : 'px-2') : 'px-5'
    const isDisabled = 'bg-gray-200 text-colorText border '

    return (
      <>
        <button
          ref={ref}
          onClick={onClick}
          type={type}
          disabled={disabled || loading}
          className={`relative ${className} ${ifFull} items-center  ${iconOnly} 
        ${
          autoResize
            ? 'md:py-2 md:px-2 md:text-base md:font-normal xs:py-1 xs:px-1 xs:text-base xs:font-normal'
            : sizes[size]
        }
        rounded-lg flex justify-center items-centertransition ease-in duration-200 text-center 
        focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          !disabled ? colors[variant] : isDisabled
        }
        `}
        >
          <>
            {loading && (
              <svg
                className="animate-spin mr-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.364 5.63609L16.95 7.05009C15.8049 5.90489 14.2982 5.19215 12.6865 5.03333C11.0748 4.87451 9.45794 5.27942 8.11134 6.17908C6.76474 7.07874 5.77174 8.41748 5.30154 9.9672C4.83134 11.5169 4.91302 13.1817 5.53268 14.678C6.15234 16.1742 7.27162 17.4093 8.69983 18.1728C10.128 18.9363 11.7768 19.181 13.3652 18.8652C14.9536 18.5493 16.3833 17.6925 17.4108 16.4407C18.4382 15.1889 18.9999 13.6196 19 12.0001H21C21 14.0823 20.278 16.1001 18.957 17.7096C17.6361 19.3192 15.7979 20.4209 13.7557 20.8271C11.7136 21.2333 9.5937 20.9188 7.75737 19.9373C5.92104 18.9557 4.48187 17.3678 3.68506 15.4441C2.88825 13.5204 2.78311 11.3799 3.38756 9.38739C3.992 7.39486 5.26863 5.67355 6.99992 4.51675C8.73121 3.35996 10.81 2.83925 12.8822 3.04336C14.9544 3.24746 16.8917 4.16375 18.364 5.63609V5.63609Z"
                  fill="white"
                />
              </svg>
            )}
            {Icon && !loading && <Icon className={label ? 'mr-1' : ''} />}{' '}
            {label} {IconRight && <IconRight className={label ? 'ml-1' : ''} />}
          </>
        </button>
      </>
    )
  }
)

Button.displayName = 'Button'

export default Button
