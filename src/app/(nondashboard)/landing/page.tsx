//(nondashboard is routing group to seperate layout that not appear in the url )

import React from 'react'
import HeroSection from './HeroSection'
import Featuresection from './Featuresection'
import DiscoverSection from './DiscoverSection'


const landing = () => {
  return (
    <div>
      <HeroSection />
      <Featuresection />
      <DiscoverSection />
      </div>
  )
}

export default landing