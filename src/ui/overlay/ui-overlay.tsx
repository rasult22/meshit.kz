import React from 'react'

interface Props {
  isOpen: boolean
  onClick?: () => void
}

const UIOverlay: React.FC<Props> = ({ onClick, isOpen }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isOpen ? '' : 'hidden'
      } fixed z-10 top-0 left-0 backdrop-blur-lg w-[100vw] bg-[rgba(0,0,0,0.4)] h-[100vh]`}
    ></div>
  )
}

export default UIOverlay
