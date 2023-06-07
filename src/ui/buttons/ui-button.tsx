import React from 'react'

interface ButtonProps {
  disabled?: boolean
  onClick?: () => void
  block?: boolean
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  children,
  block
}) => {
  return (
    <button
      className={`bg-alpha hover:opacity-[0.9] text-[white] text-[12px] leading-[16px] font-bold py-[8px] px-4 rounded-[8px] ${
        disabled ? 'disabled:bg-beta' : ''
      } ${block ? 'w-full' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
