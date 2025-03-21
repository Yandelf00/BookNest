"use client"

import React from 'react'
import { PieChartView } from './PieChartView';
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import  queryClient  from '@/lib/queryClient'
import RadarView from './RadarView';
import BarBase from './BarBase';

export default function Charts() {
  return (
    <QueryClientProvider client={queryClient}>
        <section className='flex flex-col w-full h-full justify-between '>
          <div className='flex flex-row px-5 pt-10 justify-between'>
            <PieChartView/>
            <RadarView/>
          </div>
          <div className='w-full h-full flex justify-center items-center'>
            <BarBase/>
          </div>
        </section>
    </QueryClientProvider>
  )
}
