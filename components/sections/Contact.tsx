import style from '../../styles/overall.module.css'
import {BsArrowUp} from 'react-icons/bs';
import {FiAlertCircle} from 'react-icons/fi';
import {GrStatusGood} from 'react-icons/gr';
import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
interface InputFieldProps {
    placeholders: string[];
  }
interface FormData {
    name: string;
    email: string;
    message: string;
  };
export const Contact = ({placeholders}:InputFieldProps) => {
    const [inputFocused, setInputFocused] = useState(new Array(placeholders.length).fill(false));
  const [disabled, setDisabled] =useState<boolean>(false)
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [alertStatus, setAlertStatus] = useState<any>()
  const resetAlert = () => {
    setAlertMessage("");
    setAlertStatus("");
  };
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting},
      } = useForm<FormData>() 
      
    const onSubmit = async (data:FormData) => {
      setDisabled(true)
      try{
    const res = await fetch("/api/contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setAlertMessage('Thank you for your message!')
      setAlertStatus('success')
      reset();
      setTimeout(() => {
        resetAlert()
      }, 2000);
    
    }
    } 
    catch(e:any) {
      const defaultMessage = 'Something went wrong. Please try again later.'
      setAlertMessage(e.message || defaultMessage)
      setAlertStatus("error")
      setTimeout(() => {
        resetAlert()
      }, 2000);
    }
    // return false
    setDisabled(false)
  }
  
      let email='yewandehassan2@gmail.com'

      const handleInputFocus = (index: number) => {
        const newInputsFocused = [...inputFocused];
        newInputsFocused[index] = true;
        setInputFocused(newInputsFocused);
      };
    
      const handleInputBlur = (index: number) => {
        const newInputsFocused = [...inputFocused];
        newInputsFocused[index] = false;
        setInputFocused(newInputsFocused);
      };
  return (
    <div id="contact" className='w-[100%]'>
      <div
        className='flex flex-col items-center justify-start'
      >
        <h1
          className={`md:text-[4rem] text-[2rem] md:m-[8rem] m-[3rem] tracking-wide ${style.header}`}
        >
          Get In Touch
        </h1>
        <p className={`px-[20px] text-[0.9rem] ${style.text}`}>
          Contact me if you&apos;ve got remote job opportunities, website / app
          development gigs, collaborations or you just want to say hello 👋
        </p>
        <p className={`md:my-[2rem] my-[1rem] px-[20px] text-[0.9rem] ${style.text}`}>
          You can send me an <Link className={`underline underline-offset-4 ${style.para}`} href={`mailto:${email}`} target="_blank">email</Link> if contact forms
          aren&apos;t your thing.
        </p>
        {alertMessage && (
            <div className='mt-4 flex w-[30%] z-[1000]'>
              {alertStatus ? <GrStatusGood className='text-[2rem]'/> : <FiAlertCircle className='text-[2rem]'/>}
              <p className={style.text}>{alertMessage}</p>
            </div>
          )}
        <form onSubmit={handleSubmit(onSubmit)} className='my-[4rem] p-[30px] rounded-lg bg-[#171717] flex flex-col w-[100%] max-w-[500px] md:max-w-[600px]'>
            <div
              className='flex flex-col gap-[60px] justify-start'
             >
        <div
        className='w-full'>
        <input
          id='name'
          type='text'
          placeholder='Name'
          className={`${style.inputField} ${
            inputFocused[1] ? style.inputFieldFocused : ""
          }`}
          onFocus={()=>handleInputFocus(1)}
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
            onBlur:()=>handleInputBlur(1)
          })}
        />
        <p>
          {errors.name && errors.name.message}
        </p>
        </div>
        <div 
        className='w-full'>
        <input
          id='email'
          type='email'
          placeholder='Email'
          className={`${style.inputField} ${
            inputFocused[2] ? style.inputFieldFocused : ""
          }`}
          onFocus={()=>handleInputFocus(2)}
          {...register('email', {
            required: 'This is required',
            onBlur:()=>handleInputBlur(2)
          })}
        />
        <p>
          {errors.email && errors.email.message}
        </p>
        </div>
        <div
        className='w-full'
        >
        <textarea   
        className={`${style.inputField} ${inputFocused[3] ? style.inputFieldFocused : "" }`} 
        onFocus={()=>handleInputFocus(3)}
        placeholder='Message'
        {...register('message', {
          required: '*Please enter a Message',
          onBlur:()=>handleInputBlur(3)
        })}
        />
        </div>

        </div>
        <div
        className='flex items-center justify-evenly'
        >
        <button type='submit' disabled={isSubmitting} className={`bg-[#F36F48] border-2-[#F36F48] cursor-pointer rounded-lg p-[10px] px-[20px] my-[20px]`}>
          Shoot!
          </button>
        </div>
      
        </form>
      </div>
      <div className='w-100% border border-#E8FEFA' />
    </div>
  );
}
