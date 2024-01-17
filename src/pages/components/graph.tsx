"use client";

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

export default function Graph({data2} : {data2: any[]}) {
  const data = [
    { name: "1a", uv: "1a", "pv": 2400, "amt": "a" },
    { name: "1b", uv: "1b", "pv": 1398, "amt": "b" },
    { name: "1c", uv: "1c", "pv": 9800, "amt": "c" },
  ];
  return (
    <div>
      <ScatterChart
        width={800}
        height={800}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        >
        <CartesianGrid />
        <XAxis  dataKey="name" name="stature" unit="" />
        {/* <YAxis  dataKey="uv" name="sts" unit="" /> */}
        <YAxis  dataKey="pv" name='d'  />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Scatter>
      </ScatterChart>
    </div>
  );
}

