import React, { useState } from 'react'
import { DatePicker, ConfigProvider, Divider } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/kk'
import locale from 'antd/locale/kk_KZ'
import UIButton from '../../ui/buttons/ui-button'
import UIOverlay from '@/ui/overlay/ui-overlay'
import './date-picker.css'

const FeatureDatePicker: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false)

  const onClick = () => {
    setPopupOpen(false)
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
      <div onClick={() => setPopupOpen(true)}>Hello</div>
      <UIOverlay isOpen={isPopupOpen} />
      <DatePicker
        open={isPopupOpen}
        showToday={false}
        renderExtraFooter={Test}
      />
    </ConfigProvider>
  )
}

export default FeatureDatePicker
