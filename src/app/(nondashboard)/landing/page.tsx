//(nondashboard is routing group to seperate layout that not appear in the url )

import React from 'react'
import HeroSection from './HeroSection'
import Featuresection from './Featuresection'

const landing = () => {
  return (
    <div>
      <HeroSection />
      <Featuresection />
      </div>
  )
}

export default landing