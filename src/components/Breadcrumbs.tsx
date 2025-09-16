import Link from 'next/link'
import React from 'react'

interface Props{
    linkTo:string;
    name:string;
}

const Breadcrumbs = ({linkTo,name}:Props) => {
 
    return (
        <div className='flex gap-2 items-center justify-center'>
            <div>
                <Link href={linkTo} className="text-[#093B42] font-medium text-[14px] underline">
                    {name}
                </Link>

            </div>
            <div>
                <img src='/images/arrowRight.svg' />
            </div>

        </div>
    )
}

export default Breadcrumbs