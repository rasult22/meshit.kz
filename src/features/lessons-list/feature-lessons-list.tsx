import { fetchLessons } from '@/api/lessons'
import React from 'react'
import { useQuery } from 'react-query'
import { Divider } from 'antd'
import getWeekDay from '@/utils/getWeekDay'
import { FemaleIcon } from '@/icons/female-icon'
import { MaleIcon } from '@/icons/male-icon'

interface Props {
  id: string
  gender?: 'male' | 'female'
  onClick?: () => void
}

const FeatureLessonsList: React.FC<Props> = ({ id, gender }) => {
  const {
    isLoading: isLessonsLoading,
    isFetching,
    data: lessonsData
  } = useQuery('lessons', () =>
    fetchLessons({
      mosque: id,
      gender: gender && gender.toUpperCase()
    })
  )
  if (isLessonsLoading || isFetching) return <div></div>
  let prevDate: string | null = null
  return (
    <div>
      {lessonsData &&
        lessonsData.data.map((lesson, index) => {
          const shouldShowDivider = lesson.week_day !== prevDate
          prevDate = lesson.week_day
          return (
            <div key={index + lesson.start_time}>
              {shouldShowDivider && (
                <Divider plain>
                  <span className="text-[#9E9E9E]">
                    {getWeekDay(lesson.week_day)} | {lesson.week_day}
                  </span>
                </Divider>
              )}
              <div className="w-full">
                <div className="w-full flex flex-wrap items-center space-x-2">
                  <div className="self-start pt-1">
                    {lesson.gender === 'FEMALE' ? <FemaleIcon /> : <MaleIcon />}
                  </div>
                  <div className="flex flex-wrap">
                    <span>{lesson.type.name}</span>
                    <span className="w-full text-[#9E9E9E] text-[12px]">
                      {/* 2-ші сабақ */}
                    </span>
                  </div>
                  <span className="text-[#9E9E9E] ml-[auto!important]">
                    {lesson.start_time.substring(0, 5)}-
                    {lesson.end_time.substring(0, 5)}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      {lessonsData && lessonsData.data.length < 1 && (
        <div className="text-center pt-10">
          Мешіт дәрістері әзірге енгізілмеген
        </div>
      )}
    </div>
  )
}

export default FeatureLessonsList

// Example usage:
// const date = '2023-06-29' // YYYY-MM-DD format
// const weekDay = getWeekDay(date)
// console.log(weekDay) // Output: Thursday
