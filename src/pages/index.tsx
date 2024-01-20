"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import state from '../lib/state';
import { useSnapshot } from 'valtio';
import { useRouter } from 'next/router';

export default function Home() {
  const snap = useSnapshot(state);
  const router = useRouter();
  const handleChange = (e: any) => {
    // setExercice(e.target.value)
    state.exercice = e.target.value;
  }

  useEffect(() => {
    state.data = [];
    state.exercice = '';
    state.index = 0;
  }, [])

  const handleClick = () => {
    router.push('/graph')
  }

  return (
    // create a styled button to redirect to /exercise
      <div className='flex flex-col justify-center items-center bg-white h-screen w-screen'>
        <div className='flex justify-center items-center'>
          <Image
            src='/graph.png'
            alt='Logo'
            width={300}
            height={300}
          />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='text-xl md:text-5xl font-bold text-center text-black'>Bienvenue au <span className='text-blue-600'>G</span>raph <span className='text-blue-600'>E</span>xercise <span className='text-blue-600'>S</span>ystem</h1>
        </div>
        <div className='flex justify-center items-center gap-2 pt-11'>
          <input className='border-2 border-blue-600 rounded-full py-2 px-4 text-gray-700 font-semibold ' type='text' placeholder="Nom d'exercice" value={state.exercice} onChange={handleChange} />
          <button className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full' onClick={handleClick}>
            Commancer
          </button>
        </div>
      </div>   
  )
}
