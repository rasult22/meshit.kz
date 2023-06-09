import React from 'react'
import { Carousel } from 'antd'
import { useQuery } from 'react-query'
import { fetchBanners } from '@/api/banners'
import UISpinner from '@/ui/spinner/ui-spinner'
/* TODO: 
  1. Fetch Banners ✅
  2. Add Actions or links
*/
const FeatureBannerCarousel: React.FC = () => {
  const { isLoading, data } = useQuery('banners', () => fetchBanners())

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
          <div>
            <div
              key={banner.id}
              className="h-[140px] w-full bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${banner.image})` }}
            ></div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default FeatureBannerCarousel
