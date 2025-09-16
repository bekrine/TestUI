import React from 'react'


interface UsageCardProps {
  usage: number;
  
}

const UsageCard = ({ usage }: UsageCardProps) => {
  return (
    <div className="flex gap-4 items-center p-4 bg-white rounded-lg shadow-md">
      <div className="w-10 h-10 relative">
        <svg className="w-10 h-10">
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="#e5e7eb"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="#10b981"
            strokeWidth="4"
            fill="none"
            strokeDasharray={113} // 2 * Math.PI * r
            strokeDashoffset={113 - (113 * usage) / 100}
            strokeLinecap="round"
            transform="rotate(-90 20 20)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
        <span className='text-[#093B42] font-medium text-[12px] text-center'>  {usage}%</span>
        </div>
      </div>
      <span className="text-base font-medium text-[#093B42] underline">Usage</span>

    </div>
  )
}

export default UsageCard