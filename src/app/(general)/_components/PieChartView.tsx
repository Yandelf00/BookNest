"use client"
import { useQuery } from "@tanstack/react-query"
import { PieChartBase } from "./PieChartBase"
import { getPieData } from "@/actions/getStatBooks"


export function PieChartView() {

  async function getData()
  {
    const data = await getPieData();
    return data
  }

  const { isPending, error, data } = useQuery({
    queryKey : ['bookChart'],
    queryFn : () => getData(),
  })

  
  return (
    <div>
      <PieChartBase data={data} />
    </div>
  )
}