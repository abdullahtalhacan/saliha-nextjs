'use client'
import React from 'react'

const LogPanel = ({...rest}) => {
  const restData = JSON.stringify(rest).substring(1).slice(0, -1).split(',')
  return (
    <div className='fixed top-32 left-0 px-2 py-2 z-50 bg-zinc-900/30 flex flex-col space-y-2'>
        {Object.keys(restData).map((_, index:number) => (
            <div key={index}>{restData[index]}</div>
        ))}
    </div>
  )
}

export default LogPanel