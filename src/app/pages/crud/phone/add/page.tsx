'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PickUp from '../../../../components/PickUp';


export default function Page() {

  const phoneType = {phone_name: '', phone_color: '', phone_IMEI: '', phone_storage: '', phone_brand_id: ''}

  const [phoneForm, setPhoneForm] = useState(phoneType);



  const handleSubmit = async (e) => {
      e.preventDefault();
    const response = await fetch('/api/crud/phone/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(phoneForm),
    });
    const result = await response.json();
    console.log(result);


    if (response.status === 200) {
      console.log("STATUS OK !");
      //router.push("/admin/ok");
    }
  };


  const options = [
    { value: '', text: '--Choose an option--' },
    { value: 'apple', text: 'Apple 🍏' },
    { value: 'banana', text: 'Banana 🍌' },
    { value: 'kiwi', text: 'Kiwi 🥝' },
  ];


  return (
    <section className='w-full h-full'>

<form onSubmit={handleSubmit} className='w-full bg-cyan-800 flex flex-col justify-center items-center p-8'>

<div className='flex flex-row justify-start items-center m-4 h-[40px]'>
  <label className='text-white h-full z-10 bg-gold border-b-4 border-gold p-2 w-[150px] text-md text-center bg-cyan-900' htmlFor="phone_name">Label</label>
  <input className={`text-cyan-800 h-full focusAlt outline-none w-[350px] text-md p-2 border-b-4 border-gold bg-zinc-300`} type="text" name="phone_name" id="phone_name" value={phoneForm.phone_name} onChange={(e) => setPhoneForm({ ...phoneForm, phone_name: e.target.value })} />
</div>

<div className='flex flex-row justify-start items-center m-4 h-[40px]'>
  <label className='text-white h-full z-10 bg-gold border-b-4 border-gold p-2 w-[150px] text-md text-center bg-cyan-900' htmlFor="phone_IMEI">IMEI</label>
  <input className={`text-cyan-800 h-full focusAlt outline-none w-[350px] text-md p-2 border-b-4 border-gold bg-zinc-300`} type="text" name="phone_IMEI" id="phone_IMEI" value={phoneForm.phone_IMEI} onChange={(e) => setPhoneForm({ ...phoneForm, phone_IMEI: e.target.value })} />
</div>

<div className='flex flex-row justify-start items-center m-4 h-[40px]'>
  <label className='text-white h-full z-10 bg-gold border-b-4 border-gold p-2 w-[150px] text-md text-center bg-cyan-900' htmlFor="phone_color">Couleur</label>
  <input className={`text-cyan-800 h-full focusAlt outline-none w-[350px] text-md p-2 border-b-4 border-gold bg-zinc-300`} type="text" name="phone_color" id="phone_color" value={phoneForm.phone_color} onChange={(e) => setPhoneForm({ ...phoneForm, phone_color: e.target.value })} />
</div>

<div className='flex flex-row justify-start items-center m-4 h-[40px]'>
  <label className='text-white h-full z-10 bg-gold border-b-4 border-gold p-2 w-[150px] text-md text-center bg-cyan-900' htmlFor="phone_storage">Storage</label>
  <input className={`text-cyan-800 h-full focusAlt outline-none w-[350px] text-md p-2 border-b-4 border-gold bg-zinc-300`} type="text" name="phone_storage" id="phone_storage" value={phoneForm.phone_storage} onChange={(e) => setPhoneForm({ ...phoneForm, phone_storage: e.target.value })} />
</div>

<PickUp value={phoneForm.phone_brand_id} onChange={(e) => setPhoneForm({ ...phoneForm, phone_brand_id: e.target.value })}/>





<button type='submit' className='flex flex-row justify-center items-center w-[200px] h-[40px] bg-gold-darker border-b-4 border-gold-2 text-neutral-50 p-4'>[+] Ajouter</button>

</form>
    </section>

  )
}
