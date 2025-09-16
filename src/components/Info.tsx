import React from 'react'
type Props = {
    ScanType: string;
    date: string;
    webSiteUrl: string;
    isCompleted: string;
}
const Info = ({ ScanType, date, webSiteUrl ,isCompleted}: Props) => {
    return (
        <div className='flex items-center justify-between mt-20' >
            <div className='flex gap-2 items-center'>
                <div>
                    <img src="/images/status.svg" alt="info" />
                </div>
                <div className=' text-base text-[#093B42]'>
                    <span className='font-medium '>
                        Scan type:
                    </span>
                    <span className='font-normal ml-1'>
                        {ScanType}
                    </span>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <div>
                    <img src="/images/calendar.svg" alt="info" />
                </div>
                <div className=' text-base text-[#093B42]'>
                    <span className='font-medium '>
                        Date:
                    </span>
                    <span className='font-normal ml-1'>
                        {date}
                    </span>
                </div>
            </div>
            <div className='flex gap-2 items-center'>

                <div className=' text-base text-[#093B42]'>
                    <span className='font-medium '>
                        {webSiteUrl}
                    </span>
                    <span className='font-medium '>
                        | scan-name
                    </span>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <div>
                    <img src="/images/status.svg" alt="info" />
                </div>
                <div className='flex gap-2 items-center'>
                    <div>

                        <span className='ftext-base text-[#093B42] font-medium '>
                            Status:
                        </span>
                    </div>
                    <div className='flex gap-2 items-center'>

                    <div className='bg-[#0F616C] rounded-lg '>
                        <span className='text-white font-medium text-sm mx-3 my-1'>{isCompleted}</span>
                    </div>
                        <div>
                            <img src="/images/arrowDown.svg" alt="info" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Info