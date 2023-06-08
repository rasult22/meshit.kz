import React, { useState } from 'react'
import FeatureAppNavbar from '@/features/app-navbar/feature-app-navbar'
import UITitle from '@/ui/title/ui-title'
import UIChip from '@/ui/chips/ui-chip'
import UIButton from '@/ui/buttons/ui-button'
import { BackIcon } from '@/icons/back-icon'
import { cities, mosques, lessonTypes } from './mock'
import { useNavigate } from 'react-router-dom'

const FilterPage = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
  return (
    <>
      <FeatureAppNavbar
        left={
          <div onClick={goBack}>
            <BackIcon />
          </div>
        }
        center={<div>Фильтры</div>}
        right={<div>Тазалау</div>}
      />
      <UITitle>Жынысы</UITitle>
      <GenderSelector />
      <UITitle>Қала</UITitle>
      <CitySelector />
      <UITitle>Мешіттер</UITitle>
      <MosqueSelector />
      <UITitle>Іс шара түрлері</UITitle>
      <LessonsSelector />
      <UITitle>Іс шара уақыттары</UITitle>
      <TimeSelector />
      <div className="w-full flex flex-col fixed bottom-[16px] px-4 left-0">
        <UIButton large>Көрсету</UIButton>
      </div>
    </>
  )
}

export default FilterPage

const CitySelector = () => {
  const [cityId, setCityId] = useState(1)
  return (
    <>
      <div className="flex space-x-1 overflow-auto pb-4 border-b-[1px] border-[#E0E0E0]">
        {cities.map((city) => (
          <UIChip
            key={city.id}
            selected={cityId === city.id}
            onClick={() => {
              setCityId(city.id)
            }}
          >
            {city.name}
          </UIChip>
        ))}
      </div>
    </>
  )
}

const MosqueSelector = () => {
  const [mosqueId, setMosqueId] = useState(1)
  return (
    <>
      <div className="flex space-x-1 overflow-auto pb-4 border-b-[1px] border-[#E0E0E0]">
        {mosques.map((mosque) => (
          <UIChip
            key={mosque.id}
            selected={mosqueId === mosque.id}
            onClick={() => {
              setMosqueId(mosque.id)
            }}
          >
            {mosque.name}
          </UIChip>
        ))}
      </div>
    </>
  )
}

const LessonsSelector = () => {
  const [typeId, setTypeId] = useState(1)
  return (
    <>
      <div className="flex space-x-1 overflow-auto pb-4 border-b-[1px] border-[#E0E0E0]">
        {lessonTypes.map((type) => (
          <UIChip
            key={type.id}
            selected={typeId === type.id}
            onClick={() => {
              setTypeId(type.id)
            }}
          >
            {type.name}
          </UIChip>
        ))}
      </div>
    </>
  )
}

const TimeSelector = () => {
  const [cityId, setCityId] = useState(1)
  return (
    <>
      <div className="flex space-x-1 overflow-auto pb-4 border-b-[1px] border-[#E0E0E0]">
        {cities.map((city) => (
          <UIChip
            key={city.id}
            selected={cityId === city.id}
            onClick={() => {
              setCityId(city.id)
            }}
          >
            {city.name}
          </UIChip>
        ))}
      </div>
    </>
  )
}

const GenderSelector = () => {
  const genders = [
    {
      id: 1,
      name: 'Ер'
    },
    {
      id: 2,
      name: 'Әйел'
    }
  ]
  const [genderId, setGenderId] = useState(1)
  return (
    <>
      <div className="flex space-x-1 overflow-auto pb-4 border-b-[1px] border-[#E0E0E0]">
        {genders.map((gender) => (
          <div className="w-[50%]" key={gender.id}>
            <UIChip
              block
              selected={genderId === gender.id}
              onClick={() => {
                setGenderId(gender.id)
              }}
            >
              {gender.name}
            </UIChip>
          </div>
        ))}
      </div>
    </>
  )
}
