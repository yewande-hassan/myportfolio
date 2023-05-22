import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/myPicture.jpeg'
import style from '../../styles/Home.module.css'
import {IoMdWifi} from 'react-icons/io'
import {MdPortableWifiOff} from 'react-icons/md'


export const Hero:any = () => {

    const [offline, setOffline] = useState(false)
    const [time, setTime] = useState("")
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const date = new Date();
            let timing = date.toLocaleTimeString();
            setTime(timing)
        }, 0)
    }, [])

    useEffect(() => {
        if (time >= "08:00:00" && time <= "18:00:00") {
            setOffline(true)
        } else {
            setOffline(false)
        }
    }, [time])
  return (
    <div
    className='md:h-[88vh] flex flex-col w-full h-[70vh] px-[30px]'
      id='hero' 
    >
      <div className='md:flex-col lg:flex lg:flex-row md:justify-start m-auto items-center md:py-[40px] lg:py-[70px] md:gap-[50px]'
      >
        <div className='md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]'>
          <Image
            className='rounded-[100%] grayscale-[40] object-cover w-full h-full hidden md:block '
            src={profilePic}
            alt="Picture of the author"
          />
        </div>
        <div className='md:flex md:flex-col py-3 my-5 lg:items-start'>
          <h1 className={`md:text-[6rem] text-[3rem] ${style.heading}`}>
            WANDE DEV.
            </h1>
          <div className={`${style.typedText} py-5 text-[0.5rem] md:text-[1rem]`}>
          <p>Software Engineer, Frontend Engineer and a Tech-Savy . . .</p>
          </div>
        </div>
      </div>
      <div className='w-[100%] border-solid border border-[#E8FEFA]' />
      <div className={style.headFooter}>
        <div className='flex items-center md:px-[100px] h-[5vh] md:h-[12vh] justify-between'
        >
          <div 
            className={`flex gap-[10px] items-center ${offline ? "opacity-100" : "opacity-50"}`}
          >
            {offline ? <IoMdWifi className='text-[0.5rem] md:text-[1rem]'/> : <MdPortableWifiOff className='text-[0.5rem] md:text-[1rem]'/>}
            <p className='text-[0.5rem] md:text-[1rem]'> Wande is {offline ? "ONLINE" : "OFFLINE"}</p>
          </div>
          <div className='flex gap-[20px] text-[12px] opacity-[0.7]'>
            <p className='text-[#F36F48] text-[0.5rem] md:text-[1rem]'>[ {time} ]</p>
            <p className='text-[0.5rem] md:text-[1rem]'>LAGOS, NIGERIA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
