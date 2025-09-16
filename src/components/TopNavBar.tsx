import React from 'react'

const TopNavBar = () => {
  return (
        <div className='flex justify-between items-center   bg-white border-2 border-[#F4F5F6] rounded-2xl shadow-2xl h-[100px] w-full'>
          <div className='w-[24px] h-[24px] ml-[57px]'>
            <img src="/images/burgerMenu.svg" alt="" />
          </div>
        <div className='flex gap-[8px] items-center justify-center mr-[57px]'>
          <div className='w-[43px] h-[43px] rounded-xl bg-[#86D5C6] flex items-center justify-center'>
            <img src="/images/avatar.svg" alt="" />
          </div>
          <div>
            <img src="/images/arrowDown.svg" alt="" />
          </div>
        </div>
      </div>
  )
}

export default TopNavBar