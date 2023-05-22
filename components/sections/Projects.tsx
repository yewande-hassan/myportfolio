import React from 'react'
import style from '../../styles/overall.module.css'
import data from '../Reusables/data'
import {BsGithub} from 'react-icons/bs'
import {BsArrowUpRight} from 'react-icons/bs';
import Link from 'next/link'
export const Projects = () => {
  return (
    <div id='works' className='w-[100%]'>
        <div className ='flex flex-col items-center justify-start'>
            <h1 className={`md:text-[4rem] text-[2rem] md:mb-[100px] my-[50px] tracking-wide ${style.header}`}>Projects</h1>
            {data.map((work) => 
            <div key={work.id} className={`flex justify-between items-start h-auto md:h-[200px] py-[10px] md:py-[30px] md:px-[50px] px-[20px] w-[90%] ${style.works}`}>
                <div className ='flex flex-col items-start gap-[30px]'>
                    <h2 className={`text-[1.3rem] md:text-[3rem] ${style.text}`}>{work.title}</h2>
                    <p className={`text-[0.8rem] md:text-[1.5rem] w-[80%] md:w-[100%] ${style.text}`}>{work.text}</p>
                </div>
                <div className ='flex flex-col items-end gap-[30px]'>
                    <h3 className={`text-[1rem] md:text-[1.5rem] ${style.text}`}>{work.framework}</h3>
                    <div className ='flex items-center gap-[20px]'>
                        <a href={work.gitgubLink} target='_blank'>
                            <div className ='flex flex-col items-center gap-[10px]'>
                                <BsGithub className='text-[0.7rem] md:text-[1.5rem]'/>
                                <p className={`text-[0.7rem] md:text-[1.5rem] ${style.text}`}>Code</p>
                            </div>
                        </a>
                        <a href={work.projectUrl}>
                            <div className ='flex flex-col items-center gap-[10px]'>
                                <BsArrowUpRight className='text-[0.7rem] md:text-[1.5rem]'/>
                                <p className={`text-[0.7rem] md:text-[1.5rem] ${style.text}`}>Live</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            )}
        </div>
        <p className={`text-center py-[3rem] ${style.text}`}>My <Link className={`underline underline-offset-4 ${style.links}`} target="_blank" href='/Files/Hassan_Yewande_Resume.pdf' rel="noopener noreferrer" >resume </Link> and other projects are available on <Link className={`underline underline-offset-4 ${style.links}`} href='https://github.com/yewande-hassan' target="_blank">github</Link>.</p>
    </div>
  )
}
