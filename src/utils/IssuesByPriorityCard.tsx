import React from 'react'

const IssuesByPriorityCard = () => {

     const data = [
    { label: 'Critical', value: 10, color: 'bg-teal-700' },
    { label: 'High', value: 8, color: 'bg-teal-200' },
    { label: 'Medium', value: 6, color: 'bg-teal-600' },
    { label: 'Low', value: 4, color: 'bg-teal-100' }
  ];

  const maxValue = Math.max(...data.map(item => item.value));

  return (
   <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-t-4 max-w-md h-[186px]">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Issues by Priority
      </h2>
      
      <div className="flex items-end justify-center space-x-4 h-24 mb-4">
        {data.map((item, index) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="relative flex flex-col justify-end h-18">
              <div 
                className={`${item.color} rounded-t w-12 flex items-start justify-center pt-1`}
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              >
                <span className="text-xs font-medium text-gray-700">
                  {item.value}
                </span>
              </div>
            </div>
            <span className="text-sm text-gray-600 mt-2 text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IssuesByPriorityCard