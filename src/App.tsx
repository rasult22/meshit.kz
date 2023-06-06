import React, { ReactElement } from 'react'

import UIButton from './ui/buttons/ui-button'
import UIImageCard from './ui/cards/image-card'
import FeatureDatePicker from './features/datepicker/feature-datepicker'

function App(): ReactElement {
  const imgSrc =
    'https://images.unsplash.com/photo-1686002359940-6a51b0d64f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  return (
    <div>
      <FeatureDatePicker />
      <UIButton>Таңдау</UIButton>
      <UIButton disabled>Таңдау</UIButton>
      <div className="mt-4 flex space-x-2 bg-[#F5F5F5] p-5">
        <UIImageCard text="Ер" imgSrc={imgSrc} selected />
        <UIImageCard text="Әйел" imgSrc={imgSrc} />
      </div>
    </div>
  )
}

export default App
