'use client'

import { useState } from "react";

interface CheckboxState {
  [key: string]: boolean;
}

interface CheckboxItem {
  name: string;
  label: string;
}


const ViewCheckBoxInputs = () => {
     const [checkboxStates, setCheckboxStates] = useState<CheckboxState>({
    issueName: false,
    issueStatus: true, // checked by default as shown in image
    code: false,
    status: false,
    helpText: false,
    compliance: false,
    engine: false,
    assignedTo: false,
    severity: false,
    area: true, 
    filter: false,
    websitePage: true,
    issueType: false,
    totalIssues: true,
    description: false,
    selector: false
  });

  
  const handleCheckboxChange = (name: string): void => {
    setCheckboxStates(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const checkboxData = [
    { name: 'issueName', label: 'Issue Name' },
    { name: 'issueStatus', label: 'Issue Status' },
    { name: 'code', label: 'Code' },
    { name: 'status', label: 'Status' },
    { name: 'helpText', label: 'Help Text' },
    { name: 'compliance', label: 'Compliance' },
    { name: 'engine', label: 'Engine' },
    { name: 'assignedTo', label: 'Assigned to' },
    { name: 'severity', label: 'Severity' },
    { name: 'area', label: 'Area' },
    { name: 'filter', label: 'Filter' },
    { name: 'websitePage', label: 'Website page' },
    { name: 'issueType', label: 'Issue Type' },
    { name: 'totalIssues', label: 'Total Issues' },
    { name: 'description', label: 'Description' },
    { name: 'selector', label: 'Selector' }
  ];


  return (
    <div className=" mt-4 ml-2">      
      <div className="grid grid-cols-4 gap-x-8 gap-y-2">
        {checkboxData.map((item) => (
          <div key={item.name} className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="checkbox"
                id={item.name}
                checked={checkboxStates[item.name]}
                onChange={() => handleCheckboxChange(item.name)}
                className="appearance-none w-4 h-4 border border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
              />
              {checkboxStates[item.name] && (
                <svg
                  className="absolute top-0 left-0 w-4 h-4 text-white pointer-events-none"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <label 
              htmlFor={item.name}
              className="text-sm text-gray-800 cursor-pointer select-none font-normal"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
  


export default ViewCheckBoxInputs