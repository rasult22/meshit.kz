import React from 'react'

interface Props {
  selected: boolean
  block?: boolean
  onClick?: () => void
}

const UIChip: React.FC<Props> = ({ onClick, selected, children, block }) => {
  return (
    <div
      onClick={onClick}
      className={`${block ? 'w-full block' : 'inline-flex'}
      ${
        selected ? 'bg-alpha text-white' : 'bg-[#F5F5F5] text-[#616161]'
      } flex-shrink-0 px-[12px] text-center py-[10px] rounded-[30px] text-[14px] break-keep leading-[12px]`}
    >
      {children}
    </div>
  )
}

export default UIChip
