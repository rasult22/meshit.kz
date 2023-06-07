import React from 'react'
import { Carousel } from 'antd'

/* TODO: 
  1. Fetch Banners
  2. Add Actions or links
*/
const FeatureBannerCarousel: React.FC = () => {
  return (
    <Carousel effect="fade">
      <div>
        <img src="https://zhamagat.kz/media/banners/Banner.jpg" alt="" />
      </div>
      <div>
        <img src="https://zhamagat.kz/media/banners/Banner.jpg" alt="" />
      </div>
    </Carousel>
  )
}

export default FeatureBannerCarousel
