import React, { useState } from 'react'
import FeatureDatePicker from '@/features/datepicker/feature-datepicker'
import FeatureGenderSelector from '@/features/gender-selector/feature-gender-selector'
import FeatureAppNavbar from '@/features/app-navbar/feature-app-navbar'
import FeatureBannerCarousel from '@/features/banner-carousel/feature-banner-carousel'
import UIChip from '@/ui/chips/ui-chip'
import UITitle from '@/ui/title/ui-title'

const HomePage = () => {
  const [isGenderSelectorOpen, setGenderOpen] = useState(false)
  const [gender, setGender] = useState<'male' | 'female' | undefined>()

  return (
    <>
      <div className="-mx-4">
        <FeatureAppNavbar initialTitle="Hello" />
      </div>
      <FeatureDatePicker />
      <button onClick={() => setGenderOpen(true)}>Open gender selector</button>
      <p>current gender: {gender} </p>
      <FeatureBannerCarousel />
      {isGenderSelectorOpen && (
        <FeatureGenderSelector
          value={gender}
          onGenderSelect={(gender) => {
            setGender(gender)
            setGenderOpen(false)
          }}
        />
      )}
      <div>
        <UIChip selected={true}>Алматы</UIChip>
        <UIChip selected={false}>Орталық мешіт</UIChip>
      </div>
      <UITitle>Title</UITitle>
    </>
  )
}

export default HomePage
