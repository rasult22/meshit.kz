import React from 'react'

interface Props {
  selected: boolean
  onClick?: () => void
}

const UIChip: React.FC<Props> = ({ onClick, selected, children }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        selected ? 'bg-alpha text-white' : 'bg-[#F5F5F5] text-[#616161]'
      } inline-flex px-[12px] py-[10px] rounded-[30px] text-[14px] leading-[12px]`}
    >
      {children}
    </div>
  )
}

export default UIChip
