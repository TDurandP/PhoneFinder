'use client';
import React, { useEffect, useState } from 'react';

export default function PickUp({value, onChange}) {

    const [selectData, setSelectData] = useState([]);

    const fetchBrands = async () => {
        const response = await fetch('/api/crud/brand/fetch', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const result = await response.json();
          console.log(result);
      
          setSelectData(result.brands);
      
    }

    useEffect(() => {
            fetchBrands();
    }, [])





    return (

        <div className='w-[200px] h-[30px]'>
            <select name="phone_brand_id" className='w-full h-full bg-cyan-500 capitalize' value={value} onChange={onChange}>
                {selectData ? selectData.map((element, index) => <option key={index} className='text-white' value={element.brand_id}>{element.brand_label}</option>) : <option value="0" selected>Récupération des données en cours..</option>}
            </select>
        </div>
    )
}
