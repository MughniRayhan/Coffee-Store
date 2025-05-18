import React from 'react'
import OurProducts from './OurProducts';
import Banner from './Banner';
import Services from './Services';
import Follow from './Follow';

function Home() {
 
  return (
    <div>
      <Banner/>
      <Services/>
      <OurProducts/>
      <Follow/>
    </div>
  )
}

export default Home