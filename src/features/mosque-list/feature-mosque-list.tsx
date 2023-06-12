import React from 'react'

import UICell from '@/ui/cell/ui-cell'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchMosques } from '@/api/mosques'
import UISpinner from '@/ui/spinner/ui-spinner'

const FeatureMosqueList: React.FC = () => {
  const navigate = useNavigate()
  const { isLoading, data } = useQuery('mosques', () => fetchMosques())

  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full h-[200px]">
        <UISpinner />
      </div>
    )

  return (
    <div className="space-y-3 my-2">
      {data &&
        data?.data.map((mosque) => {
          return (
            <UICell
              onClick={() => {
                navigate('/mosque/' + mosque.id)
              }}
              key={mosque.id}
              title={mosque.name}
              imageSrc={mosque.image}
              tailText="толық тізім"
            >
              {mosque.lessons.map((x, index) => (
                <div
                  key={index}
                  className={`${
                    index < 2 ? '' : 'hidden'
                  } text-[12px] leading-[16px] flex space-x-1`}
                >
                  <div className="text-[#9E9E9E]">
                    {x.date} {x.start_time.substring(0, 5)}-
                    {x.end_time.substring(0, 5)}
                  </div>
                  <div>- {x.type.name}</div>
                </div>
              ))}
            </UICell>
          )
        })}
    </div>
  )
}

export default FeatureMosqueList
