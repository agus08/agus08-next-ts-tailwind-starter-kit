import React, { FC } from 'react'

interface BadgeProp {
  variant: 'success' | 'warning' | 'danger' | 'info'
  label: string
  size?: 'sm' | 'base' | 'lg'
  className?: string
}

const variantStyle = {
  success: 'bg-bgSuccess text-success',
  warning: 'bg-bgWarning text-warning',
  danger: 'bg-bgError text-error',
  info: 'bg-bgInfo text-info',
}

const sizes = {
  sm: 'p-1',
  base: 'py-1 px-2',
  lg: 'py-2 px-3',
}

const Badge: FC<BadgeProp> = ({
  variant,
  label,
  size = 'base',
  className = '',
}) => {
  return (
    <div
      className={`${className} ${sizes[size]} rounded-md h-min font-medium ${variantStyle[variant]}
    `}
    >
      {label}
    </div>
  )
}
export default Badge
