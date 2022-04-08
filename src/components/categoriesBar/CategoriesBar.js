import React, { useState } from 'react'
import { GetVideosByCategory } from '../../redux/videos.actions'
import { useDispatch} from "react-redux";

import './_categoriesBar.scss'

const keywords = [
   'All',
   'Music',
   'Guitar',
   'Bengali Songs',
   'Coding',
   'Football',
   'Gaming',
   'News',
   'Comedy',
   'Math',
   'Movies',
   'Game',
   'Programming',
   'Designing',
   'Rap',
   'Iphone',
   'Android',
   'Valorant',
   'Javascript',
   'Funny',
   'Trend'

]

const CategoriesBar = () => {
   const [activeElement, setActiveElement] = useState('All')

   const dispatch = useDispatch()

   const handleClick = value => {
      setActiveElement(value)
      dispatch(GetVideosByCategory(value))
   }



   return (
      <div className='categoriesBar'>
         {keywords.map((value, i) => (
            <span
               onClick={() => handleClick(value)}
               key={i}
               className={activeElement === value ? 'active' : ''}>
               {value}
            </span>
         ))}
      </div>
   )
}

export default CategoriesBar