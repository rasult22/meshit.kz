import { fetchLessons } from '@/api/lessons'
import React from 'react'
import { useQuery } from 'react-query'
import { Divider } from 'antd'

interface Props {
  id: string
  onClick?: () => void
}

const FeatureLessonsList: React.FC<Props> = ({ id }) => {
  const { isLoading: isLessonsLoading, data: lessonsData } = useQuery(
    'lessons',
    () =>
      fetchLessons({
        mosque: id
      })
  )
  if (isLessonsLoading) return <div></div>
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
                  <span className="text-[#9E9E9E]">{lesson.date}</span>
                </Divider>
              )}
              <div>
                <span className="text-[#9E9E9E]">
                  {lesson.start_time}-{lesson.end_time}
                </span>{' '}
                - {lesson.type.name}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default FeatureLessonsList
