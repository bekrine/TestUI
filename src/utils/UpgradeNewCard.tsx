import React from 'react'

interface Props {
    title: string;
    iconUrl: string;
}

const UpgradeNewCard = ({title,iconUrl}:Props) => {
  return (
    <div className="flex gap-4 items-center p-4 bg-white rounded-lg shadow-md">
        <div className='w-10 h-10'>
        <img src={iconUrl} />
        </div>
        <div>
            <span className='text-[#093B42] font-medium text-base text-center underline'>{title}</span>
        </div>

    </div>
  )
}

export default UpgradeNewCard