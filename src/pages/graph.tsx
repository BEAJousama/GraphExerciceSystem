"use client";
import { use, useEffect, useRef, useState } from 'react';
import { HexColorPicker } from "react-colorful";
import BarChart from './components/graphCanva';
import GraphTest from './components/graphCanva';
import DataTable from './components/table';
import React from 'react';
import { useSnapshot } from 'valtio';
import  state  from '../lib/state';
import Table from './components/table';
import { useRouter } from 'next/router';
import Link from 'next/link';

const GraphPage = () => {
  const [data, setData] = useState([{}]);
  const [validationError, setValidationError] = useState(false);
  const router = useRouter();


  // use valtio to manage state
  const snap = useSnapshot(state);
  


  const ref = useRef(null);
  const allowedValues = ['0', '1a', '1b', '2a', '2b', '3a', '3b', '3c', '3d', '3e', '4a', '4b', '4c', '4d'];

  const handleChange = (color: any) => {
    state.color = color;
  };

  const handleNext = () => {
    const xValues = state.x.split(',').map((item : any) => item.trim());
    const yValues = state.y.split(',').map((item : any) => item.trim());

    const isValidX = xValues.every((item : any) => allowedValues.includes(item));
    const isValidY = yValues.every((item : any) => allowedValues.includes(item));

    if (!isValidX || !isValidY) {
      setValidationError(true);
      return -1;
    }

    // sort xValues and get the greatest value
    const xv = xValues.sort((a: any, b: any) => allowedValues.indexOf(b) - allowedValues.indexOf(a))[0];

    // sort yValues and get the greatest value
    const yv = yValues.sort((a: any, b: any) => allowedValues.indexOf(b) - allowedValues.indexOf(a))[0];

    setValidationError(false);
    // index of x in allowedValues
    const xIndex = xValues.map((item : any) => allowedValues.indexOf(item));
    // index of y in allowedValues
    const yIndex = yValues.map((item : any) => allowedValues.indexOf(item));
    const color = state.color;
    state.index = state.index + 1;
    state.data = [...state.data, { x: xv, y: yv, color , xIndex, yIndex, question: `Question ${state.index}`}];
    state.x = "";
    state.y = "";
    // setIndex(index + 1);
    // setData([...data, { xv, yv, color, xIndex, yIndex }]);
    // setX("");
    // setY("");
  };
  const data2 = [
    { x: "1a", y: "0", color: 'red' },
    { x: "2b", y: "3c", color: 'yellow' },
    { x: "3b", y: "1b", color: 'green' },
    { x: "3e", y: "4d", color: 'blue' },
    // ... other data objects ...
  ];

  const handleClick = () => {
    const val = handleNext();
    if (val === -1) {
      return;
    }
    router.push('/results');
  }

  useEffect(() => {
    state.data = [];
    state.index = 0;
    if (state.exercice === "") {
      window.location.href = "/";
    }

  },[]);
  
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-white">
      {validationError && <h1 className='text-red-500'>Veuillez entrer des valeurs valides</h1>}
      <h1 className='text-3xl font-bold text-black pb-5'>Question {state.index + 1} :</h1>
      <div className="w-full max-w-md flex flex-col items-center justify-center">
        <div className='flex flex-col'>
          <label className='text-gray-500' htmlFor="x">Valeurs de X:</label>
          <input className='rounded-md mb-4 p-2 text-gray-600 border-gray-300 border-[1px]' type="text" placeholder='exemple: 1a, 2b, 4d' name="x" id="x" required value={state.x} onChange={(e) => { state.x = e.target.value }} />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500' htmlFor="y">Valeurs de Y:</label>
          <input className='rounded-md mb-4 p-2 text-gray-600 border-gray-300 border-[1px]' type="text" placeholder='exemple: 1a, 2b, 4d' name="y" id="y" required value={state.y} onChange={(e) => { state.y = e.target.value }} />
        </div>
        <div className='flex flex-col items-start justify-start'>
          <label className='text-gray-500' htmlFor="color">Couleur:</label>
          <HexColorPicker color={state.color} onChange={handleChange} />
        </div>

        <div className='flex gap-2 mt-3'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white w-fit p-2 rounded-md' onClick={handleNext}>Suivant</button>
          <button className='bg-red-500 hover:bg-red-600 text-white w-fit p-2 rounded-md' onClick={handleClick}>Terminer</button>
        </div>
      </div>
    </div>
  );
};

export default GraphPage;