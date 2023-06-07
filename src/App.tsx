import React, { ReactElement, useState } from 'react'

import UIButton from './ui/buttons/ui-button'
import UIImageCard from './ui/cards/image-card'
import FeatureDatePicker from './features/datepicker/feature-datepicker'
import FeatureGenderSelector from './features/gender-selector/feature-gender-selector'
import aiel from '../assets/Aiel.svg'
import yer from '../assets/Yer.svg'

function App(): ReactElement {
  const [isGenderSelectorOpen, setGenderOpen] = useState(false)
  const [gender, setGender] = useState<'male' | 'female' | undefined>()
  return (
    <div>
      <FeatureDatePicker />
      <UIButton>Таңдау</UIButton>
      <UIButton disabled>Таңдау</UIButton>
      <div className="mt-4 flex space-x-2 bg-[#F5F5F5] p-5">
        <UIImageCard text="Ер" imgSrc={yer} selected />
        <UIImageCard text="Әйел" imgSrc={aiel} />
      </div>
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
    </div>
  )
}

export default App
