import React, { useEffect, useState } from 'react'
import './_video.scss'
import  request from "../../api"
import moment from "moment"
import { AiFillEye } from 'react-icons/ai'
import numeral from 'numeral'
import Toggle from './toggle'
import handleTogglecom from './toggle'


const Video = ({ video })  => {
   
   const {
      id,
      snippet:
      {
         channelId,
         channelTitle,
         title,
         publishedAt,
         thumbnails: {medium},
      },
   } = video
   
   const [views, setViews] = useState(null)
   const [duration, setDuration] = useState(null)
   const [channelIcon, setChannelIcon] = useState(null)

   const seconds = moment.duration(duration).asSeconds()
   const _duration = moment.utc(seconds * 1000).format('mm:ss')

   useEffect(() => {
      const get_video_details = async () => {
         const {
            data:{items},
         } =  await request('/videos',{
            params:{
               part:'contentDetails,statistics',
               id:id,
            },
         })
         setDuration(items[0].contentDetails.duration)
         setViews(items[0].statistics.viewCount)
      }
      get_video_details()
   },[id])


   useEffect(() => {
      const get_channel_icon = async () => {
         const {
            data:{items},
         } =  await request('/channels',{
            params:{
               part:'snippet',
               id:channelId,
            },
         })
         setChannelIcon(items[0].snippet.thumbnails.default)
      }
      get_channel_icon()
   },[channelId])




   return (
      <div className='video'>
         <div className='video__top'>
            <img
               // src='https://i.ytimg.com/vi/1iX0dkRhj7g/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLzZE66LHpD5AtRtbXnlJV2l_q-A'
               src = {medium.url}
               alt=''
            />
            <span>{_duration} </span>
         </div>
         <div className='video__title'>
            {title}
         </div>
         <div className='video__details'>
            <span>
               <AiFillEye /> {numeral(views).format('0.a')} Views *
            </span>
            <span> {moment(publishedAt).fromNow()} </span>
         </div>
         <div className='video__channel'>
            <img
               // src='https://yt3.ggpht.com/ytc/AKedOLTsEr0fbW7tsfTwwl_R4ez0WO4mUYFueCge7pdvmYk=s88-c-k-c0x00ffffff-no-rj'
               src={channelIcon?.url}
               alt=''
               
            />
           
            <p>{channelTitle}</p>
            <div className='toggle'>
                <Toggle
                size = {26}
                onClick ={() => handleTogglecom()}
                />
                
              
            
         
         
             </div>
         </div>
      </div>
   )
}

export default Video
