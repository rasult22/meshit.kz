import React, { FC, ReactNode } from 'react'

type NavbarProps = {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  centerContent: ReactNode
}

const UINavbar: FC<NavbarProps> = ({ leftIcon, rightIcon, centerContent }) => {
  return (
    <div className="flex items-center justify-between px-3 py-3 bg-white text-[#212121] shadow-custom-light">
      <div className="w-1/8 text-left">{leftIcon}</div>
      <div className="w-1/2 text-center">{centerContent}</div>
      <div className="w-1/8 text-right">{rightIcon}</div>
    </div>
  )
}

export default UINavbar
