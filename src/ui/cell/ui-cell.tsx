import { RightIcon } from '@/icons/back-icon'
import React from 'react'

interface Props {
  onClick?: () => void
  imageSrc?: string
  title: string
  tailText?: string
}

const UICell: React.FC<Props> = ({
  onClick,
  children,
  title,
  tailText,
  imageSrc = 'https://zhamagat.kz/media/mosques/b310700088c035a582058c830c0b068f.jpg'
}) => {
  return (
    <div onClick={onClick} className={`flex space-x-2`}>
      <div
        className="w-[60px] h-[60px] flex-shrink-0 rounded-[16px] bg-cover bg-slate-400"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="space-y-[4px] w-full">
        <div className="flex w-full">
          <div className="text-[16px] leading-[20px] max-w-[80%] text-ellipsis whitespace-nowrap overflow-hidden">
            <span className="">{title}</span>
          </div>
          <div className="ml-auto flex flex-shrink-0 items-center">
            <span className="break-keep text-[12px] leading-[13px] text-[#9E9E9E]">
              {tailText}
            </span>
            <RightIcon />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default UICell
