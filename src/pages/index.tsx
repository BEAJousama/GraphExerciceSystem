"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // create a styled button to redirect to /exercise
      <div className='flex flex-col justify-center items-center bg-white min-h-screen w-screen'>
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
        <div className='flex justify-center items-center pt-11'>
          <button className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full'>
            <Link href='/graph'>Commancer</Link>
          </button>
        </div>
      </div>   
  )
}
