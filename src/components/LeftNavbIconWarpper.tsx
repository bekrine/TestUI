import React from 'react'

interface Props{    
    imageURL:string;
    name?:string;
}

const LeftNavbIconWarpper = ({imageURL,name}:Props) => {
  return (
    <div className={` rounded-xl shadow-2xl h-[39px] w-[38px] ${name == 'statistique' ? 'bg-[#77CFBF]' : 'bg-[#F4F5F6]'}`}>
        <img src={imageURL} alt={name} className='m-[10px] h-[19px] w-[19px]'/>
    </div>
  )
}

export default LeftNavbIconWarpper