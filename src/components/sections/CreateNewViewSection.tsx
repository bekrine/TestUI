import { AddButton, ExportButton, MainButton, MainButtonNonBg } from '@/utils/Buttons'
import React from 'react'
import View from '../View'

const CreateNewViewSection = () => {
    return (
        <div className='mt-10  px-28 py-3 w-full  overflow-hidden '>
            <div className='flex justify-between items-center '>
                <div className='flex justify-between items-center gap-3'>
                    <MainButton title='All Issues' />
                    <MainButtonNonBg title='All Details' />
                </div>
                <div className='flex justify-between items-center gap-3'>
                    <AddButton title='Add View' />
                    <ExportButton title='Export' />
                </div>
            </div>
            <View/>
        </div>
    )
}

export default CreateNewViewSection