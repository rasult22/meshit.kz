import { fetchLessons } from '@/api/lessons'
import React from 'react'
import { useQuery } from 'react-query'
import { Divider } from 'antd'
import getWeekDay from '@/utils/getWeekDay'

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
        lessonsData.data.map((lesson) => {
          const shouldShowDivider = lesson.date !== prevDate
          prevDate = lesson.date
          return (
            <div key={lesson.date + lesson.start_time}>
              {shouldShowDivider && (
                <Divider plain>
                  <span className="text-[#9E9E9E]">
                    {getWeekDay(lesson.date)}
                  </span>
                </Divider>
              )}
              <div>
                <span className="text-[#9E9E9E]">
                  {lesson.start_time.substring(0, 5)}-
                  {lesson.end_time.substring(0, 5)}
                </span>{' '}
                - {lesson.type.name}
              </div>
            </div>
          )
        })}
      {lessonsData && lessonsData.data.length < 1 && (
        <div className="text-center pt-10">Нет данных</div>
      )}
    </div>
  )
}

export default FeatureLessonsList

// Example usage:
// const date = '2023-06-29' // YYYY-MM-DD format
// const weekDay = getWeekDay(date)
// console.log(weekDay) // Output: Thursday
