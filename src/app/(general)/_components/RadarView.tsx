import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { getRadarData } from '@/actions/getStatBooks'
import RadarBase from './RadarBase'

export default function RadarView() {
    async function getRadData(){
        const data = await getRadarData()
        return data
    }
    
    const { isPending, error, data } = useQuery({
        queryKey : ['bookRadar'],
        queryFn : () => getRadData(),
    })

    console.log("this is data",data)

    return (
        <div>
            <RadarBase data={data}/>
        </div>
    )
}
