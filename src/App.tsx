import React, { ReactElement, useState } from 'react'

import FeatureDatePicker from './features/datepicker/feature-datepicker'
import FeatureGenderSelector from './features/gender-selector/feature-gender-selector'
import FeatureAppNavbar from './features/app-navbar/feature-app-navbar'
import UIChip from './ui/chips/ui-chip'

function App(): ReactElement {
  const [isGenderSelectorOpen, setGenderOpen] = useState(false)
  const [gender, setGender] = useState<'male' | 'female' | undefined>()
  return (
    <div className="flex flex-col w-full h-full">
      <FeatureAppNavbar initialTitle="Hello" />
      <FeatureDatePicker />
      <button onClick={() => setGenderOpen(true)}>Open gender selector</button>
      <p>current gender: {gender} </p>
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
    </div>
  )
}

export default App
