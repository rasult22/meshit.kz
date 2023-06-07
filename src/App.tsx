import React, { ReactElement } from 'react'

import UIButton from './ui/buttons/ui-button'
import UIImageCard from './ui/cards/image-card'
import FeatureDatePicker from './features/datepicker/feature-datepicker'
import aiel from '../assets/Aiel.svg'
import yer from '../assets/Yer.svg'

function App(): ReactElement {
  return (
    <div>
      <FeatureDatePicker />
      <UIButton>Таңдау</UIButton>
      <UIButton disabled>Таңдау</UIButton>
      <div className="mt-4 flex space-x-2 bg-[#F5F5F5] p-5">
        <UIImageCard text="Ер" imgSrc={yer} selected />
        <UIImageCard text="Әйел" imgSrc={aiel} />
      </div>
    </div>
  )
}

export default App
