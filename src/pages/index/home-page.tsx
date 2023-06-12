import React from 'react'
import FeatureGenderSelector from '@/features/gender-selector/feature-gender-selector'
import FeatureAppNavbar from '@/features/app-navbar/feature-app-navbar'
import FeatureBannerCarousel from '@/features/banner-carousel/feature-banner-carousel'
import FeatureMosqueList from '@/features/mosque-list/feature-mosque-list'
import { useNavigate } from 'react-router-dom'
import { SearchIcon } from '@/icons/search-icon'
import { FilterIcon } from '@/icons/filter-icon'
import { DownIcon } from '@/icons/back-icon'
import useCity from '@/hooks/useCity'

const HomePage = () => {
  const navigate = useNavigate()

  const [getCity] = useCity()
  const city = getCity()

  const goToFilter = () => {
    navigate('/filter')
  }
  return (
    <>
      <FeatureAppNavbar
        center={
          <div className="flex justify-center" onClick={goToFilter}>
            {city.name} <DownIcon />
          </div>
        }
        left={<SearchIcon />}
        right={
          <div onClick={goToFilter}>
            <FilterIcon />
          </div>
        }
      />
      <div className="min-h-[125px] my-4 justify-center relative">
        <FeatureBannerCarousel />
      </div>
      <FeatureMosqueList />
      <FeatureGenderSelector />
    </>
  )
}

export default HomePage
