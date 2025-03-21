"use client"

import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import { Radar, Legend } from 'recharts'
import { useState, useEffect } from 'react'


const data = [
  {
    "language": "Math",
    "B": 110,
  },
  {
    "language": "Chinese",
    "B": 130,
  },
  {
    "language": "English",
    "B": 130,
  },
  {
    "language": "Geography",
    "B": 100,
  },
  {
    "language": "Physics",
    "B": 90,
  },
  {
    "language": "History",
    "B": 150,
  }
]

type DataType = {
    language : any,
    B : any
}

type RadarBaseProps = {
    data : DataType[] | { message : string } | undefined
}

export default function RadarBase(props : RadarBaseProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(()=>{
        setIsClient(true);
    }, [])

    if(!isClient){
        return null;
    }

    if (!props.data || !Array.isArray(props.data)) {
        return <div>{props.data?.message || "No data available"}</div>;
    }

    return (
        <div className=''>
          <h1 className='font-semibold'>Language distribution</h1>
            <RadarChart outerRadius={90} width={500} height={250} data={props.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="language" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                <Radar name="languages" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </div>
    )
}
