import React from 'react'
import WhatsappIcon from '../Elements/WhatsappIcon'
import Carousel from '../Elements/Home/Carousel'
import OurWorks from '../Elements/Home/OurWorks'
import WhyChooseUs from '../Elements/Home/WhyChooseUs'
import Chat from '../Elements/Chat'

function Home() {
  return (
    <div>
      <WhatsappIcon/>
      <Carousel />
      <OurWorks />
      <WhyChooseUs />
      <Chat/>
    </div>
  )
}

export default Home