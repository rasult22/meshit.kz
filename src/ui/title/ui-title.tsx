import React from 'react'

interface Props {
  onClick?: () => void
}

const UITitle: React.FC<Props> = ({ onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex pt-4 pb-2 font-medium text-[18px] leading-[20px]`}
    >
      {children}
    </div>
  )
}

export default UITitle
