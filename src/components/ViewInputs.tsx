import React from 'react'

const ViewInputs = () => {
    return (
        <div className='flex justify-between items-center mt-4'>
            <div className='w-[50%]'>
                <div>
                <label className='text-[#093B42] text-base font-normal' htmlFor="">View Name</label>
                </div>
                <input type="text" className='border-2 border-[#8B9192] rounded-lg h-[50px] w-full' />
            </div>
            <div>

                <h2 className='text-[#093B42] text-base font-normal' >Select View Type</h2>
                <div className='flex justify-between items-center border-2 border-[#8B9192] rounded-lg p-2 w-full gap-12'>
                    <div className='flex items-center gap-2'>
                        <div>

                            <img src='/images/accordion.svg' />
                        </div>
                        <div>

                            <label htmlFor="" className='text-[#093B42] text-base font-normal'>Accordion</label>
                        </div>
                        <div>

                            <input type="checkbox" className='' name='' />
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>

                        <div>

                            <img src='/images/table.svg' />
                        </div>
                        <div>

                            <label htmlFor="table" className='text-[#093B42] text-base font-normal'>Table</label>
                        </div>
                        <div>
                            <div>

                                <input type="checkbox" className='' name='table' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewInputs