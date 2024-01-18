import React from 'react';
import 'tailwindcss/tailwind.css';
import { useSnapshot } from 'valtio';
import { state } from '../lib/state';

const DataTable = () => {
  const allowedValues = ['0', '1a', '1b', '2a', '2b', '3a', '3b', '3c', '3d', '3e', '4a', '4b', '4c', '4d'];
  const snap = useSnapshot(state);

  const data = snap.data.filter((item:any) => item.x !== "" && item.y !== "");
  
  return (
    <table className="min-w-full border border-gray-300  ">
      <thead>
        <tr className="text-black">
          <th className="border-b border-r p-2 text-center">Question</th>
          <th className="border-b border-r p-2 text-center">Information</th>
          <th className="border-b border-r p-2 text-center">P.M</th>
          <th className="border-b border-r p-2 text-center">Couleur</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item : any, index) => (
          item.x  && item.y  &&
          <tr key={index} className="text-black">
            <td className="border-b p-2 border-r text-center">{item.question}</td>
            <td className="border-b p-2 border-r text-center">{item.x}</td>
            <td className="border-b p-2 border-r text-center">{item.y}</td>
            <td className={`border-b p-2 border-r text-center`} style={{ backgroundColor: item.color }}>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;