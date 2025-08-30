import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'
const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      
    <div className=" space-y-10 py-20 flex flex-col justify-center mt-8 p-5">
        <HomeSectionCarosel data={mens_kurta} SectionName={"Men's Kurta"}/>
        <HomeSectionCarosel data={mens_kurta} SectionName={"Men's Shoes"}/>
        <HomeSectionCarosel data={mens_kurta} SectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={mens_kurta} SectionName={"Women's Sarees"}/>
        <HomeSectionCarosel data={mens_kurta} SectionName={"Women's Tops"}/>
        <HomeSectionCarosel data={mens_kurta} SectionName={"Women's Dresses"}/>
    </div>
   </div>
  )
}

export default HomePage
