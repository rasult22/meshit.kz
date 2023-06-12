import { fetchMosqueById } from '@/api/mosques'
import FeatureAppNavbar from '@/features/app-navbar/feature-app-navbar'
import FeatureDatePicker from '@/features/datepicker/feature-datepicker'
import { BackIcon } from '@/icons/back-icon'
import { CalendarIcon } from '@/icons/calendar-icon'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import FeatureLessonsList from '@/features/lessons-list/feature-lessons-list'
import UISpinner from '@/ui/spinner/ui-spinner'

const MosquePage = () => {
  const navigate = useNavigate()
  const { mosqueId } = useParams()
  const { isLoading, data } = useQuery('mosque', () =>
    fetchMosqueById(Number(mosqueId))
  )

  const [isOpen, setIsOpen] = useState(false)
  const openCalendar = () => {
    setIsOpen(true)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <UISpinner />
      </div>
    )
  }

  return (
    <>
      <FeatureAppNavbar
        center={<div className="flex justify-center">{data?.data.name}</div>}
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
      {mosqueId && <FeatureLessonsList id={mosqueId} />}
    </>
  )
}

export default MosquePage
