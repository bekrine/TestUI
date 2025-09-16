import React from 'react'

const Access = () => {
    const items = [
        'Summary',
        'Compliance',
        'Accessibility',
        'Pages',
        'Files',
        'Issues'
    ]
    return (
        <div className='flex justify-between items-center   bg-white border-2 border-[#F4F5F6] rounded-2xl shadow-2xl h-[82px] w-full px-12 mt-3'>
            {
                items.map((item, index) => (

                    <div key={index} className={`flex flex-col items-center  justify-center text-[20px] font-medium text-[#093B42] text-center  h-full  ${item == 'Issues' && 'border-b-4 border-[#093B42] '}` }>
                       <div>

                        {item}
                       </div>
                    </div>

                ))
            }

        </div>
    )
}

export default Access