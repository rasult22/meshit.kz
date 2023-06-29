import React from 'react'
import { Carousel } from 'antd'
import { useQuery } from 'react-query'
import { Banner, fetchBanners } from '@/api/banners'
import UISpinner from '@/ui/spinner/ui-spinner'
import { useNavigate } from 'react-router-dom'

const FeatureBannerCarousel: React.FC = () => {
  const { isLoading, data } = useQuery('banners', () => fetchBanners(), {
    staleTime: 60000
  })
  const navigate = useNavigate()
  const onBannerClick = (banner: Banner) => {
    navigate('/mosque/' + banner.mosque_id)
  }

  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full h-full">
        <UISpinner />
      </div>
    )

  return (
    <Carousel effect="fade">
      {data?.data.map((banner) => {
        return (
          <div key={banner.id} onClick={() => onBannerClick(banner)}>
            <div
              className="h-[140px] w-full bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            ></div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default FeatureBannerCarousel
