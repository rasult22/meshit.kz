import React, { useState } from 'react'
import UIOverlay from '@/ui/overlay/ui-overlay'
import UIImageCard from '@/ui/cards/ui-image-card'
import UIButton from '@/ui/buttons/ui-button'
import aiel from '@/../assets/Aiel.svg'
import yer from '@/../assets/Yer.svg'

interface Props {
  value?: 'male' | 'female'
  onGenderSelect: (selectedGender: 'male' | 'female') => void
}

const FeatureGenderSelector: React.FC<Props> = ({ value, onGenderSelect }) => {
  const [gender, setGender] = useState<'male' | 'female' | ''>(value || '')

  const onCardClick = (gender: 'male' | 'female') => {
    setGender(gender)
  }

  const onSubmit = () => {
    if (gender) {
      onGenderSelect(gender)
    }
  }
  return (
    <>
      <UIOverlay isOpen={true} onClick={() => 1} />
      <div className="fixed w-[85%] z-[100] p-6 top-[50%] max-w-[300px] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#F5F5F5] rounded-[16px]">
        <div className="flex justify-center space-x-5 mb-6">
          <UIImageCard
            text="Ер"
            imgSrc={yer}
            selected={gender === 'male'}
            onClick={() => onCardClick('male')}
          />
          <UIImageCard
            text="Әйел"
            imgSrc={aiel}
            selected={gender === 'female'}
            onClick={() => onCardClick('female')}
          />
        </div>
        <UIButton onClick={onSubmit} block disabled={!gender}>
          Таңдау
        </UIButton>
      </div>
    </>
  )
}

export default FeatureGenderSelector
