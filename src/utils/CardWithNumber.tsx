import React from 'react'

interface Props {
    iconUrl: string;
    title: string;
    number: number;
}

const CardWithNumber = ({ iconUrl, title, number }: Props) => {
    return (
        <div className="flex gap-7 w-[233px] items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div className="flex gap-1 items-center justify-between">

                <div className='w-10 h-10'>
                    <img src={iconUrl} />
                </div>
                <div>
                    <span className='text-[#093B42] font-medium text-base text-center '>{title}</span>
                </div>
            </div>
            <div  className='text-[#093B42] font-medium text-base text-center '>
                <span>{number}</span>
            </div>

        </div>
    )
}

export default CardWithNumber