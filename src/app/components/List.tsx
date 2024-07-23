'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function List({ type }) {

    const router = useRouter();

    const [listData, setListData] = useState([]);


    const fetchBrands = async () => {
        const response = await fetch('/api/crud/brand/fetch', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        console.log(result);

        setListData(result.brands);

    }

    const fetchPhones = async () => {
        const response = await fetch('/api/crud/phone/fetch', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        console.log(result);

        setListData(result.phones);
    }

    useEffect(() => {
        if (type == "phone") fetchPhones();
        else fetchBrands();
    }, [])


    const redirectEditPhone = (id: string) => {
        router.push(`/pages/crud/phone/edit?id=${id}`);
    }

    const deletePhone = async (id: string) => {
        const response = await fetch(`/api/crud/phone/delete?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        console.log(result);
        if (response.status === 200) {

            fetchPhones();
        }
    };



    

    // retrieve the brand of the phone using the brand_id (FK)
    const getBrand = async (id: string) => {
        const response = await fetch(`/api/crud/brand/get?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        console.log(result);
        if (response.status === 200) {
            return result.brand_label;
        } else return "inconnu";
    }




    const formatListItem = (key, element) => {
  
        return <div className='odd:bg-gray-500 even:bg-gray-400 flex flex-row justify-between items-center w-full h-[50px] border-2 border-cyan-200 rounded-lg p-2 my-2' key={key}>

            <span className='w-1/3'>{element.phone_name}</span>
            <span className='w-1/3'>{element.phone_storage} GB</span>
            <span className='w-1/3'>{element.phone_color}</span>
            <span className='w-1/3'>{element.brand_label}</span>

            <nav className='w-1/5 flex flex-row justify-between items-center'>
                <button onClick={() => redirectEditPhone(element.phone_id)} className='w-[40px] h-[40px] rounded-lg p-2 bg-green-700 border-b-2 border-green-500'><img className='svg-color' src="/assets/icons/edit.svg" alt="edit icon" /></button>
                <button onClick={() => deletePhone(element.phone_id)} className='w-[40px] h-[40px] rounded-lg p-2 bg-rose-800 border-b-2 border-rose-500'><img className='svg-color' src="/assets/icons/delete.svg" alt="delete icon" /></button>
            </nav>
        </div>
    }

    return (
        <div className='bg-gray-300 w-1/2 h-[400px] rounded-lg p-4 m-4 overflow-y-visible'>
            {listData.map((element, index) => formatListItem(index, element))}
        </div>
    )
}
