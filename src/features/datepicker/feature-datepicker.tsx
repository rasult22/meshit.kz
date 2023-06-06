import React, { useState } from 'react'
import { DatePicker, ConfigProvider, Divider } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/kk'
import locale from 'antd/locale/kk_KZ'
import UIButton from '../../ui/buttons/ui-button'
import './date-picker.css'
import updateLocale from 'dayjs/plugin/updateLocale'
dayjs.extend(updateLocale)
//  [
//     'Қаңтар',
//     'Ақпан',
//     'Наурыз',
//     'Сәуір',
//     'Мамыр',
//     'Маусым',
//     'Шілде',
//     'Тамыз',
//     'Қыркүйек',
//     'Қазан',
//     'Қараша',
//     'Желтоқсан'
//   ]
dayjs.updateLocale('kk', {
  months: {}
})

const FeatureDatePicker: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false)

  const onClick = () => {
    setPopupOpen(false)
  }

  const Test: React.FC = () => {
    return (
      <div className="w-full">
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
      <div
        className={`${
          isPopupOpen ? '' : 'hidden'
        } fixed z-10 top-0 left-0 backdrop-blur-lg w-[100vw] bg-[rgba(0,0,0,0.4)] h-[100vh]`}
      ></div>
      <div className="">
        <DatePicker
          format="MMMM YYYY"
          open={isPopupOpen}
          showToday={false}
          renderExtraFooter={Test}
        />
      </div>
    </ConfigProvider>
  )
}

export default FeatureDatePicker
