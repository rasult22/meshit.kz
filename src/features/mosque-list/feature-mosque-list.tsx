import React from 'react'

import UICell from '@/ui/cell/ui-cell'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchMosques } from '@/api/mosques'
import UISpinner from '@/ui/spinner/ui-spinner'
import useCity from '@/hooks/useCity'
// import getWeekDay from '@/utils/getWeekDay'
import useGender from '@/hooks/useGender'
import { FemaleIcon } from '@/icons/female-icon'
import { MaleIcon } from '@/icons/male-icon'

const FeatureMosqueList: React.FC = () => {
  const navigate = useNavigate()
  const { getCity } = useCity()
  const { getGender } = useGender()

  const { isLoading, data } = useQuery('mosques', () =>
    fetchMosques(getCity()?.id, getGender())
  )

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
          if (mosque.lessons.length < 1) return

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
                  } text-[12px] w-full leading-[16px] flex pr-2`}
                >
                  <div>
                    {x.gender === 'FEMALE' ? <FemaleIcon /> : <MaleIcon />}
                  </div>
                  <div className="text-[#9E9E9E] font-medium">
                    {' '}
                    {x.type.name}
                  </div>
                  <div className="ml-auto text-[#9E9E9E] font-medium">
                    {x.start_time.substring(0, 5)}-{x.end_time.substring(0, 5)}
                  </div>
                </div>
              ))}
            </UICell>
          )
        })}
    </div>
  )
}

export default FeatureMosqueList
