import React from 'react'

interface Props {
  selected?: boolean
  onClick?: () => void
  text?: string
  imgSrc?: string
}

const UIImageCard: React.FC<Props> = ({ selected, onClick, text, imgSrc }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        selected ? 'border-alpha' : 'border-[transparent]'
      } rounded-[8px] transition-all border-2 max-w-[120px] bg-[white] relative overflow-hidden pb-4`}
    >
      <img src={imgSrc} alt="select image" />
      <div
        className={`${
          selected ? 'bg-alpha text-[white]' : 'bg-white'
        } py-[8px] text-center text-[14px] absolute bottom-0 w-full`}
      >
        {text}
      </div>
    </div>
  )
}

export default UIImageCard
