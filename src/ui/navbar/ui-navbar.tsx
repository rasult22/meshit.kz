import React, { FC, ReactNode } from 'react'

type NavbarProps = {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  centerContent: ReactNode
}

const UINavbar: FC<NavbarProps> = ({ leftIcon, rightIcon, centerContent }) => {
  return (
    <div className="relative flex items-center justify-between -mx-4 px-3 py-3 bg-white text-[#212121] shadow-custom-light">
      <div className="w-1/8 text-left">{leftIcon}</div>
      <div className="w-1/2 absolute left-[50%] translate-x-[-50%] text-center">
        {centerContent}
      </div>
      <div className="w-1/8 text-right">{rightIcon}</div>
    </div>
  )
}

export default UINavbar
