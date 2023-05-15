import React from 'react'
import Image from 'next/image'
import devFocus from '../../public/images/devFocus.svg'
import ReactIcon from '../../public/icons/ReactNative.svg'
import javascript from '../../public/icons/javascriptIcon.svg'
import typeScript from '../../public/icons/typescript.svg'
import prisma from '../../public/icons/prisma.svg'
import github from '../../public/icons/GithubIcon.svg'
import Html from '../../public/icons/html5.svg'
import css3 from '../../public/icons/css3.svg'
import figma from '../../public/icons/figma.svg'
import style from '../../styles/overall.module.css'
export const About = () => {
  return (
    <div
      id="about"
    >
      <div className={`${style.aboutContainer} p-[100px]`}>
        <h1
          className={`flex items-center justify-center m-[100px] text-[64px] tracking-wide ${style.header}`}
        >
          Meet Me
        </h1>

        <div
          className={`grid grid-cols-3 place-items-center w-[100%] ${style.aboutGrid}`}
        >
          <div className='w-[100%]'>
            <div 
                className='flex flex-col justify-between gap-[20px] text-justify'
            >
              <p>
                Hello there🖐🏽! My name is Yewande Hassan (WendyCodes), and I am a
                Software engineer with key focus in Frontend Web Development.{" "}
              </p>
              <p>
                I specialize in designing and developing visually appealing,
                intuitive, and responsive user interfaces for websites and
                applications. I have a solid understanding of HTML, CSS, and
                JavaScript, Typescript, Redux and I am proficient in using popular
                frontend frameworks and libraries such as React, and Nextjs with
                a sprinkle of backend technologies like Nodejs, Prisma and
                Python.
              </p>
              <p>
                My first dive into web development was in Febuary 2020, when I
                decided to transition from Chemical Engineering major, to take
                time out and give this new found interest all my attention.
              </p>
            </div>
          </div>
          <div>
            <Image
              className={style.animateImage}
              src={devFocus}
              alt="animation"
              width={300}
              height={300}
            />
          </div>
          <div className='w-[100%] justify-self-end text-justify'>
            <p>
              These skills have been instrumental in enhancing my artistic
              creations and I continue to apply them daily.
            </p>
            <p>
              I have experience in collaborating with designers, product
              managers, and backend developers to ensure that the frontend meets
              the requirements of the project and delivers the best possible
              user experience. I am also well-versed in using version control
              tools like Git and am comfortable working with agile development
              methodologies.
            </p>
            <p>
              I am passionate about creating elegant and efficient frontend
              solutions that deliver the best experience to users.
            </p>
            <p>
              {" "}
              If you have any frontend development needs or questions, feel free
              to reach out to me. I&apos;d be more than happy to help!
            </p>
          </div>
        </div>
        <div
        className='flex mt-[30px] flex-col justify-center items-center'
        >
          <p className='mb-[30px] text-[2.5rem]'>
            My Stack!
          </p>
          <div className={`flex gap-[20px] flex-wrap ${style.stacks}`}>
            <div className={style.stack}>
              <Image src={Html} alt="html" />
              <h4 className={style.stackTitle}>HTML 5</h4>
            </div>
            <div className={style.stack}>
              <Image src={css3} alt="css" />
              <h4 className={style.stackTitle}>CSS 3</h4>
            </div>
            <div className={style.stack}>
              <Image src={figma} alt="figma" />
              <h4 className={style.stackTitle}>Figma</h4>
            </div>
            <div className={style.stack}>
              <Image src={javascript} alt="javascript" />
              <h4 className={style.stackTitle}>JavaScript</h4>
            </div>
            <div className={style.stack}>
              <Image src={typeScript} alt="typescript" />
              <h4 className={style.stackTitle}>TypeScript</h4>
            </div>
            <div className={style.stack}>
              <Image src={ReactIcon} alt="React" />
              <h4 className={`${style.stackTitle} text-[0.9rem]`}>
                React
              </h4>
            </div>

            <div className={style.stack}>
              <Image src={prisma} alt="prisma" />
              <h4 className={style.stackTitle}>Prisma</h4>
            </div>
            <div className={style.stack}>
              <Image src={github} alt="github" />
              <h4 className={style.stackTitle}>Github</h4>
            </div>
          </div>
          <p className={style.stackText}>
            I am excited to further develop my skills and create innovative
            solutions that make a difference.
          </p>
          <div className='w-[80%] border-2 border-[#E8FEFA]'>
            </div>
          <p className={style.stackText}>ENOUGH TALK 🤫, TIME TO SEE WHAT I’VE BUILT.</p>
        </div>
      </div>
    </div>
  );
}
