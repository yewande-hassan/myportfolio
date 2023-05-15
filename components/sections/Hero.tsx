import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/myPicture.jpeg'
import Typed from 'react-typed';
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
    className='md:h-[88vh] flex flex-col w-[100vw]'
      id='hero' 
    >
      <div className='md:flex md:justify-start m-auto items-center px-[100px] md:py-[70px] md:gap-[150px]'
      >
        <div className='md:w-[400px] md:h-[400px]'>
          <Image
            className='rounded-[100%] grayscale-[40] object-cover w-full h-full hidden lg:block'
            src={profilePic}
            alt="Picture of the author"
          />
        </div>
        <div className='flex flex-col items-center'>
          <h1 className={`md:text-[6rem] text-[3rem] ${style.heading}`}>
            WANDE DEV
            </h1>
          <div>
          {/* <p>Software Engineer, Frontend Engineer and a Tech-Savy . . .</p> */}
          <Typed
      strings={[
            "I'm a Software Engineer...",
            "I Love Software Development...",
            "I'm a Frontend Engineer...",
            "I'm a Tech Savy...",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
          </div>
        </div>
      </div>
      <div className='w-[100%] border-solid border border-[#E8FEFA]' />
      <div className={style.headFooter}>
        <div className='flex items-center px-[100px] h-[12vh] justify-between'
        >
          <div 
            className={`flex text-[12px] gap-[10px] items-center ${offline ? "opacity-100" : "opacity-50"}`}
          >
            {offline ? <IoMdWifi className='text-[1.5rem]'/> : <MdPortableWifiOff className='text-[1.5rem]'/>}
            <p> Wande is {offline ? "ONLINE" : "OFFLINE"}</p>
          </div>
          <div className='flex gap-[20px] text-[12px] opacity-[0.7]'>
            <p>[ {time} ]</p>
            <p>LAGOS, NIGERIA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
