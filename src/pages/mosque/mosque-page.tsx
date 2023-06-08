import FeatureAppNavbar from '@/features/app-navbar/feature-app-navbar'
import FeatureDatePicker from '@/features/datepicker/feature-datepicker'
import { BackIcon } from '@/icons/back-icon'
import { CalendarIcon } from '@/icons/calendar-icon'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MosquePage = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const openCalendar = () => {
    setIsOpen(true)
  }
  return (
    <>
      <FeatureAppNavbar
        center={<div className="flex justify-center">Алматы</div>}
        left={
          <div
            onClick={() => {
              navigate('/')
            }}
          >
            <BackIcon />
          </div>
        }
        right={
          <div onClick={openCalendar}>
            <CalendarIcon />
          </div>
        }
      />
      <FeatureDatePicker isOpen={isOpen} setIsOpen={setIsOpen} />
      Mosque Page
    </>
  )
}

export default MosquePage
