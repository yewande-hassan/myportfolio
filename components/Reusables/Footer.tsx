
import Link from 'next/link'
import React from 'react'
import style from '../../styles/overall.module.css'
export const Footer = () => {
  return (
    <>
    <div>
    <footer>
        <div className={style.headFooter}>
        <div
          className='flex flex-col md:flex-row justify-between items-center md:px-[100px] px-[20px] h-[12vh]'
        >
          <div
            className='flex items-center text-[12px] gap-[10px] flex-col'
          >
            <p className={`${style.header} md:text-[2rem] text-[16px] py-[10px] tracking-wider`}>LET&apos;S CONNECT</p>
            <div className='flex flex-col md:flex md:flex-row gap-[20px]'>
            <Link href='https://wa.me/2348158140795' target="_blank" className={`${style.footerLink} cursor-pointer`}>Whatsapp</Link>
            <Link href='https://github.com/yewande-hassan' target="_blank" className={`${style.footerLink} cursor-pointer`}>Instagram</Link>
            <Link href='https://twitter.com/WendyCode' target="_blank" className={`${style.footerLink} cursor-pointer`}>Twitter</Link>
            </div>
          </div>
          <div className='flex gap-[20px] opacity-[0.7] items-center'>
            <p className={`text-[10px] md:text-[12px] py-[10px] ${style.footerLink}`}>Developed by <Link href='/'>Yewande Hassan👌🏽</Link></p>
          </div>
        </div>
      </div>
    </footer>
    </div>
    </>
  )
}
