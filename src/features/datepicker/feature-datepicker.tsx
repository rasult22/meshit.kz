import React from 'react'
import { DatePicker, ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/kk'
import locale from 'antd/locale/kk_KZ'
import UIButton from '../../ui/buttons/ui-button'
import UIOverlay from '@/ui/overlay/ui-overlay'
import './date-picker.css'

/* TODO: 
  1. Center calendar dialog
  2. Add value propagation ✅
*/

interface Props {
  isOpen: boolean
  setIsOpen: (newVal: boolean) => void
}

const FeatureDatePicker: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const onClick = () => {
    setIsOpen(false)
  }

  const Test: React.FC = () => {
    return (
      <div className="w-full p-3">
        <UIButton onClick={onClick} block>
          Көрсету
        </UIButton>
      </div>
    )
  }

  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: '#4CAF50'
        }
      }}
    >
      <UIOverlay isOpen={isOpen} />
      <DatePicker
        popupStyle={{
          top: '50%',
          left: '50%',
          marginTop: '-186px',
          marginLeft: '-144px'
        }}
        open={isOpen}
        showToday={false}
        renderExtraFooter={Test}
      />
    </ConfigProvider>
  )
}

export default FeatureDatePicker
