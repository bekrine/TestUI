'use client'
import React, { useState } from 'react'

interface SelectedColumn {
  id: string;
  label: string;
}


const ViewSelectedColumns = () => {
      const [defaultSelected] = useState<SelectedColumn[]>([
    { id: 'issueName', label: 'Issue Name' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'area', label: 'Area' },
    { id: 'websitePage', label: 'Website page' },
    { id: 'totalIssues', label: 'Total Issues' }
  ]);

  const handleRemove = (id: string): void => {
   console.log();
   
  };
  return (
   <div className="mt-4 w-full">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Selected Columns
      </h3>
      
      <div className="flex justify-between items-center gap-3 bg-[#F4F5F6] rounded-lg py-2 px-7 ">
        {defaultSelected.map((column) => (
          <div
            key={column.id}
            className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-[#093B42B2]"
          >
            <svg
              className="w-4 h-4 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
            
            <span className="font-medium">{column.label}</span>
            
            <button
              onClick={() => handleRemove(column.id)}
              className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors"
              aria-label={`Remove ${column.label}`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      
      
    </div>
  );
}

export default ViewSelectedColumns