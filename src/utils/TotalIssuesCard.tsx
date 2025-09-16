import React from 'react'

interface Props{
    issues:number;
}

const TotalIssuesCard = ({issues}:Props) => {
  return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-sm" style={{ height: '186px' }}>
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Total Issues
      </h2>
      <div className="flex justify-center items-center" style={{ height: '120px' }}>
        <div className="relative">
          {/* Outer circle */}
          <div className="w-24 h-24 rounded-full border-6 border-emerald-300 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">{issues}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalIssuesCard