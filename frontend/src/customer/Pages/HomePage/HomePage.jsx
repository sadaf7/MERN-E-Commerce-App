import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarouse/HomeSectionCarousel'
import { mens_kurta } from '../../../data/Men/men_kurta'
import { kurtaPage1 } from '../../../data/Kurta/kurta'

const HomePage = () => {
  return (
    <>
    <div>
      <MainCarousel/>
    </div>
    <div className=' space-y-10 py-15 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSectionCarousel sectionName={"Men's Kurta"} data={mens_kurta}/>
      <HomeSectionCarousel sectionName={"Women's Salwar"} data={kurtaPage1}/>
      {/* <HomeSectionCarousel/>
      <HomeSectionCarousel/> */}
    </div>
    </>
  )
}

export default HomePage
