'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const addPhone = () => {
    router.push("/pages/crud/phone/add");
  }

  const addBrand = () => {
    router.push("/pages/crud/brand/add");
  }


  const redirectMain = () => {
    router.push("/");
  }
  return (
    <nav className='w-full h-[100px] flex flex-row justify-around items-center bg-cyan-900'>
      <div className='cursor-pointer h-full flex flex-col justify-center items-center' onClick={redirectMain}>
        <h1 className="text-2xl">PhoneFinder</h1>
        <h2 className="text-xl">Helps you to find your phone !</h2>
      </div>

      <nav className='flex flex-row justify-around items-center w-1/3'>
        <button className='cursor-pointer bg-cyan-600 hover:bg-cyan-700 flex flex-row justify-start border-b-2 border-cyan-400 items-center rounded-xl p-4 w-[175px] h-[40px] text-white' onClick={addPhone}><img className='mr-2 svg-color' src='/assets/icons/plus.svg' alt='add icon' /><span className='w-full text-center'>Ajouter un téléphone</span></button>
        <button className='cursor-pointer bg-cyan-600 hover:bg-cyan-700 flex flex-row justify-start border-b-2 border-cyan-400 items-center rounded-xl p-4 w-[175px] h-[40px] text-white' onClick={addBrand}><img className='mr-2 svg-color' src='/assets/icons/plus.svg' alt='add icon' /><span className='w-full text-center'>Ajouter une marque</span></button>
      </nav>


    </nav>
  )
}
