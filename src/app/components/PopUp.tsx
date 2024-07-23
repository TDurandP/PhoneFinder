import React from 'react'

export default function PopUp({message}) {
  return (
    <div className='relative bg-cyan-500 w-1/2 h-[100px] flex flex-row justify-start items-center'>
            <img className='mr-4 w-[30px] h-[30px] svg-color' src='/assets/icons/alert.svg' alt='alert icon'/>
            <h2 className='first-letter:text-4xl text-xl text-pretty'>{message}</h2>
    </div>
  )
}
