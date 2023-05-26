import React from 'react'

export const Info = ({ title, name }: any) => {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="font-[600] capitalize">{title}</p>
      <p className="text-blue-900 font-[600] capitalize">{name}</p>
    </div>
  )
}
