"use client"

import { useState, useEffect } from "react";
import { PieChart } from "recharts"
import { Pie } from "recharts"


type DataType = {
  name : any,
  value : any,
}

type PieChartBaseProps = {
  data : DataType[] | {message : string} | undefined
} 

export function PieChartBase(props : PieChartBaseProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true);
  }, [])

  if (!isClient) {
    return null; // Render nothing on the server
  }


  if (!props.data || !Array.isArray(props.data)) {
    return <div>{props.data?.message || "No data available"}</div>;
  }

  
  return (
    <div className="">
        <h1 className="font-semibold">Genre distribution</h1>
        <PieChart width={600} height={250}>
        <Pie
          data={props.data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(2)}%)`} // Custom label
        />           
        </PieChart>
    </div>
  )
}