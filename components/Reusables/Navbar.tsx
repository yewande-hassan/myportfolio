import React, {useState} from 'react'
import Link from 'next/link'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { BsX } from 'react-icons/bs'
import styles from '../../styles/overall.module.css'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className='h-[12vh] flex justify-between items-center'>
      <div className={`w-full flex justify-between items-center px-[20px] md:px-[100px] py-[25px] overflow-x-hidden`}>
      <h1 className='md:text-[2.5rem] text-[2rem]'>
        <Link href='/'>Wande Dev.</Link>
        </h1>
        <div className='hidden md:flex gap-[40px] items-center'>
          <Link href='#hero' scroll={true} className={styles.link}>Home</Link>
          <Link href='#about'  scroll={true} className={styles.link}>About</Link>
          <Link href='#works' scroll={true} className={styles.link}>Works</Link>
          <Link href='#contact' className={styles.link}>Contact</Link>
          </div>
          <div className='hidden md:flex gap-[40px] items-center'>
          <Link href='https://www.linkedin.com/in/hassanyewande/' target="_blank"><FaLinkedin/></Link>
          <Link href='https://github.com/yewande-hassan' target="_blank"><BsGithub/></Link>
          </div>
      </div>
      <button
          onClick={toggleMenu}
          className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white lg:hidden'
        >
          <span className='sr-only'>Open menu</span>
          {isMenuOpen ? <BsX /> : <FaBars />}
        </button>
        { isMenuOpen &&
        <div className={isMenuOpen ? ' md:hidden w-[100%] bg-white text-black h-full flex flex-col fixed top-[12vh] left-0 gap-[40px] ease-in-out duration-4500' : 'left-[-100%] ease-in-out duration-3500 fixed'}>
        <div className='flex flex-col items-center w-[100%]'>
          <Link href='#hero' scroll={true} className={styles.link}>Home</Link>
          <Link href='#about'  scroll={true} className={styles.link}>About</Link>
          <Link href='#works' scroll={true} className={styles.link}>Works</Link>
          <Link href='#contact' className={styles.link}>Contact</Link>
          <Link href='https://www.linkedin.com/in/hassanyewande/' target="_blank"><FaLinkedin/></Link>
          <Link href='https://github.com/yewande-hassan' target="_blank"><BsGithub/></Link>
          </div>
          </div>
}
    </nav>
  )
}