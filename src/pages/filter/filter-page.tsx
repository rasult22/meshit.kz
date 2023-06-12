import React, { FC, useCallback, useState } from 'react'
import FeatureAppNavbar from '@/features/app-navbar/feature-app-navbar'
import UITitle from '@/ui/title/ui-title'
import UIChip from '@/ui/chips/ui-chip'
import UIButton from '@/ui/buttons/ui-button'
import { BackIcon } from '@/icons/back-icon'
import { cities, lessonTypes } from './mock'
import { useNavigate } from 'react-router-dom'
import useCity from '@/hooks/useCity'
import { City, fetchCities } from '@/api/cities'
import { useQuery } from 'react-query'
import { fetchMosques } from '@/api/mosques'

type Gender = 'male' | 'female'

const FilterPage = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
  const [city, setCity] = useState<City>()
  const [gender, setGender] = useState<Gender>()

  const onCityChoose = useCallback((city: City) => {
    setCity(city)
  }, [])

  const onGenderChoose = useCallback((gender: Gender) => {
    setGender(gender)
  }, [])

  const onSubmit = () => {
    if (city) {
      localStorage.setItem('app_chosen-city', JSON.stringify(city))
    }
    if (gender) {
      localStorage.setItem('app_user-chosen-gender', gender)
    }
    if (city || gender) {
      navigate('/')
    }
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
      <GenderSelector onGenderChoose={onGenderChoose} />
      <UITitle>Қала</UITitle>
      <MemoizedCitySelector onCityChoose={onCityChoose} />
      <UITitle>Мешіттер</UITitle>
      <MemoizedMosqueSelector />
      <UITitle>Іс шара түрлері</UITitle>
      <LessonsSelector />
      {/* <UITitle>Іс шара уақыттары</UITitle> */}
      {/* <TimeSelector /> */}
      <div className="w-full flex flex-col fixed bottom-[16px] px-4 left-0">
        <UIButton onClick={onSubmit} large>
          Көрсету
        </UIButton>
      </div>
    </>
  )
}

export default FilterPage

interface CityProps {
  onCityChoose: (city: City) => void
}

const CitySelector: FC<CityProps> = ({ onCityChoose }) => {
  const [getCity] = useCity()
  const [city, setCity] = useState(getCity())

  const { isLoading, data } = useQuery('cities', () => fetchCities())
  const onCityClick = (city: City) => {
    setCity(city)
    onCityChoose(city)
  }

  if (isLoading) return <div></div>

  return (
    <>
      <div className="flex space-x-1 overflow-auto pb-4 border-b-[1px] border-[#E0E0E0]">
        {data &&
          data.data.map(({ id, name }) => (
            <UIChip
              key={id}
              selected={city.id === id}
              onClick={() => {
                onCityClick({ id, name })
              }}
            >
              {name}
            </UIChip>
          ))}
      </div>
    </>
  )
}
const MemoizedCitySelector = React.memo(CitySelector)

const MosqueSelector = () => {
  const { isLoading, data } = useQuery('mosques', () => fetchMosques())

  const [mosqueId, setMosqueId] = useState(1)

  if (isLoading) return <div></div>

  return (
    <>
      <div className="flex space-x-1 overflow-auto pb-4 border-b-[1px] border-[#E0E0E0]">
        {data &&
          data.data.map((mosque) => (
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
const MemoizedMosqueSelector = React.memo(MosqueSelector)

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

interface GenderProps {
  onGenderChoose: (gender: Gender) => void
}
const GenderSelector: FC<GenderProps> = ({ onGenderChoose }) => {
  const genders = [
    {
      id: 'male',
      name: 'Ер'
    },
    {
      id: 'female',
      name: 'Әйел'
    }
  ]
  const gender = localStorage.getItem('app_user-chosen-gender')
  const [genderId, setGenderId] = useState(gender)
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
                onGenderChoose(gender.id as Gender)
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
