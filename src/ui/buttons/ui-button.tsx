import React from 'react'

interface ButtonProps {
  disabled?: boolean
  onClick?: () => void
  block?: boolean
  large?: boolean
}

const UIButton: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  children,
  block,
  large
}) => {
  return (
    <button
      className={`bg-alpha hover:opacity-[0.9] text-[white] text-[12px] leading-[16px] font-bold  px-4 rounded-[8px] ${
        disabled ? 'disabled:bg-beta' : ''
      } ${block ? 'w-full' : ''} ${large ? 'py-[16px]' : 'py-[8px]'}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default UIButton
