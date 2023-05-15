
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
          className='flex justify-between items-center px-[100px] h-[12vh]'
        >
          <div
            className='flex items-center text-[12px] gap-[10px] flex-col'
          >
            <p className={`${style.header} text-[1.5rem] tracking-wider`}>LET&apos;S CONNECT</p>
            <div className='flex flex-row justify-between gap-[20px]'>
            <Link href='https://wa.me/2348158140795' target="_blank" className={style.link}>Whatsapp</Link>
            <Link href='https://github.com/yewande-hassan' target="_blank" className={style.link}>Instagram</Link>
            <Link href='https://twitter.com/WendyCode' target="_blank" className={style.link}>Twitter</Link>

            </div>
          </div>
          <div className='flex gap-[20px] text-[12px] opacity-[0.7] items-center'>
            <p className={style.link}>Developed by <Link href='/'>Yewande Hassan👌🏽</Link></p>
          </div>
        </div>
      </div>
    </footer>
    </div>
    </>
  )
}
