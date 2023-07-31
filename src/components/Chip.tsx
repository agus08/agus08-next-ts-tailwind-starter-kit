import React from 'react'
import { FC } from 'react'
const Chip: FC<{
  children: React.ReactNode
  isActive: boolean
  onClick?: () => void
}> = ({ children, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-6 rounded-full font-medium 
      ${
        isActive
          ? 'bg-primary2 text-white'
          : 'bg-gray-50 text-gray-700 border border-gray-200'
      }`}
    >
      {children}
    </button>
  )
}

export default Chip
