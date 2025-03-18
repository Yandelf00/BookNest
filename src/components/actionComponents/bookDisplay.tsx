import React from 'react'

type bookDisplayProps = {
  id : number,
  index : number,
  name : string,
  author : string,
  pageAt: number,
  totalPages: number
}

export default function BookDisplay({id, name, author, pageAt, totalPages, index} : bookDisplayProps){
  const progressPercent = Math.round((pageAt / totalPages)*100)  
  const progressProp = progressPercent / 100 
  
  return (
    <div className={`w-full flex flex-row items-center  
    ${index % 2 == 0 ? 'bg-gray-100' : ''} `} key={id}>
      <ProgressBar progressProp={progressProp} progressPercent={progressPercent} />
      <div className='flex flex-col'>
        <div >{name}</div>
        <div className='text-[10px]'>{author}</div>
      </div>
    </div>
  )
}

type progressProps = {
  progressProp : number,
  progressPercent : number  
}

function ProgressBar({ progressProp, progressPercent } : progressProps){
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = (1 - progressProp) * circumference;

  return(
      <div className="relative size-13">
        <svg className="size-full -rotate-90 " viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="10" fill="none" className="stroke-current text-gray-400" strokeWidth="1"></circle>
          <circle cx="18" cy="18" 
          r="10" fill="none" 
          className="stroke-current text-[#00824e]" 
          strokeWidth="1" 
          strokeDasharray={circumference} 
          strokeDashoffset={strokeDashoffset} 
          strokeLinecap="round"></circle>
        </svg>

        <div className="absolute w-full h-full top-0 flex justify-center items-center">
          <span className="text-center text-[8px] font-bold text-[#00824e]">{progressPercent}%</span>
        </div>
      </div>
  )
}
