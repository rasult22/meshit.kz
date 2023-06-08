import React, { useState } from 'react'
import FeatureGenderSelector from '@/features/gender-selector/feature-gender-selector'
import FeatureAppNavbar from '@/features/app-navbar/feature-app-navbar'
import FeatureBannerCarousel from '@/features/banner-carousel/feature-banner-carousel'
import UICell from '@/ui/cell/ui-cell'
import { useNavigate } from 'react-router-dom'
import { SearchIcon } from '@/icons/search-icon'
import { FilterIcon } from '@/icons/filter-icon'
import { DownIcon } from '@/icons/back-icon'
import { mosques } from '../filter/mock'
const HomePage = () => {
  const [isGenderSelectorOpen, setGenderOpen] = useState(false)
  const [gender, setGender] = useState<'male' | 'female' | undefined>()
  const navigate = useNavigate()
  const goToFilter = () => {
    navigate('/filter')
  }
  return (
    <>
      <FeatureAppNavbar
        center={
          <div className="flex justify-center" onClick={goToFilter}>
            Алматы <DownIcon />
          </div>
        }
        left={<SearchIcon />}
        right={
          <div onClick={goToFilter}>
            <FilterIcon />
          </div>
        }
      />
      <div className="min-h-[125px] my-4">
        <FeatureBannerCarousel />
      </div>
      <div className="space-y-2 my-2">
        {mosques.map((mosque) => {
          return (
            <UICell
              onClick={() => {
                navigate('/mosque/' + mosque.id)
              }}
              key={mosque.id}
              title={mosque.name}
              imageSrc={mosque.image}
              tailText="толық тізім"
            >
              {mosque.lessons.map((x, index) => (
                <div
                  key={index}
                  className={`${
                    index < 2 ? '' : 'hidden'
                  } text-[12px] leading-[16px] flex space-x-1`}
                >
                  <div className="text-[#9E9E9E]">
                    {x.date} {x.start_time.substring(0, 5)}-
                    {x.end_time.substring(0, 5)}
                  </div>
                  <div>- {x.type.name}</div>
                </div>
              ))}
            </UICell>
          )
        })}
      </div>

      {isGenderSelectorOpen && (
        <FeatureGenderSelector
          value={gender}
          onGenderSelect={(gender) => {
            setGender(gender)
            setGenderOpen(false)
          }}
        />
      )}
      <button onClick={() => setGenderOpen(true)}>Open gender selector</button>
    </>
  )
}

export default HomePage
