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
import useGender from '@/hooks/useGender'

const MosquePage = () => {
  const { getGender } = useGender()
  const navigate = useNavigate()
  const { mosqueId } = useParams()
  const { isLoading, data } = useQuery('mosque', () =>
    fetchMosqueById(Number(mosqueId))
  )

  const [isOpen, setIsOpen] = useState(false)
  const openCalendar = () => {
    // temporary turn off calendar
    return
    // setIsOpen(true)
  }
  const gender = getGender()
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
          <div className="opacity-[0.1]" onClick={openCalendar}>
            <CalendarIcon />
          </div>
        }
      />
      <FeatureDatePicker isOpen={isOpen} setIsOpen={setIsOpen} />
      {mosqueId && <FeatureLessonsList id={mosqueId} gender={gender} />}
    </>
  )
}

export default MosquePage
