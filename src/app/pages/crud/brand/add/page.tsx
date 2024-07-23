'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PopUp from '../../../../components/PopUp';


export default function Page() {

  const brandType = {brand_label: ''};
  const errorType = {status: 0, message: ''};

  const [brandForm, setBrandForm] = useState(brandType);
  const [isStatus, setStatus] = useState(errorType);
  const [statusMessage, setStatusMessage] = useState("");


  const handleSubmit = async (e) => {
      e.preventDefault();
    const response = await fetch('/api/crud/brand/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(brandForm),
    });
    const result = await response.json();
    console.log(result);

    setStatus({status: response.status, message: result.error});



    /*
    if (response.status === 200) {
      console.log("STATUS OK !");
      //router.push("/admin/ok");
    } else {
        
    }*/
  };




  return (
    <section className='w-full h-full'>


<form onSubmit={handleSubmit} className='w-full bg-cyan-800 flex flex-col justify-center items-center p-8'>

<div className='flex flex-row justify-start items-center m-4 h-[40px]'>
  <label className='text-white h-full z-10 bg-gold border-b-4 border-gold p-2 w-[150px] text-md text-center bg-cyan-900' htmlFor="brand_label">Label</label>
  <input className={`text-cyan-800 h-full focusAlt outline-none w-[350px] text-md p-2 border-b-4 border-gold bg-zinc-300`} type="text" name="brand_label" id="brand_label" value={brandForm.brand_label} onChange={(e) => setBrandForm({ ...brandForm, brand_label: e.target.value })} />
</div>

{isStatus.status != 0 ? <PopUp message={isStatus.message}/> : ''}
<button type='submit' className='flex flex-row justify-center items-center w-[200px] h-[40px] bg-gold-darker border-b-4 border-gold-2 text-neutral-50 p-4'>[+] Ajouter</button>

</form>
    </section>

  )
}
