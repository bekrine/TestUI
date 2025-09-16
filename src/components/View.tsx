import { ButtonWithIconEndUnderlineText } from '@/utils/Buttons'
import React from 'react'
import ViewInputs from './ViewInputs'
import ViewCheckBoxInputs from './ViewCheckBoxInputs'
import ViewSelectedColumns from './ViewSelectedColumns'

const View = () => {
    return (
        <div className='border-2 border-[#8B9192] rounded-lg p-4 mt-4'>
            <div className='flex justify-between items-center'>
                <div>

                    <h1 className='font-medium text-xl text-[#093B42]'>Create New View</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <ButtonWithIconEndUnderlineText
                        iconUrl='/images/cancel.svg'
                        title='Cancel'
                    />
                    <ButtonWithIconEndUnderlineText
                        iconUrl='/images/undo.svg'
                        title='Undo'
                    />
                    <ButtonWithIconEndUnderlineText
                        iconUrl='/images/save.svg'
                        title='Save'
                    />
                </div>

            </div>
            <ViewInputs/>
            <ViewCheckBoxInputs/>
            <ViewSelectedColumns/>
        </div>
    )
}

export default View