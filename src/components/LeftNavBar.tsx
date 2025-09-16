import React from 'react'
import LeftNavbIconWarpper from './LeftNavbIconWarpper'

const LeftNavBar = () => {
  const navIcons=[
    {iconUrl:'/images/home.svg',URL:'/',name:'home'},
    {iconUrl:'/images/folder.svg',URL:'/',name:'folder'},
    {iconUrl:'/images/file.svg',URL:'/',name:'file'},
    {iconUrl:'/images/setting.svg',URL:'/',name:'settings'},
    {iconUrl:'/images/statistque.svg',URL:'/',name:'statistique'},
    {iconUrl:'/images/screen.svg',URL:'/',name:'screen'},
    {iconUrl:'/images/playIcon.svg',URL:'/',name:'play'},
    {iconUrl:'/images/book.svg',URL:'/',name:'book'},
    {iconUrl:'/images/parametres.svg',URL:'/',name:'parametres'},

  ]


  return (
    <div className='flex flex-col gap-[15px] p-[36px] bg-white border-2 border-[#F4F5F6] rounded-2xl shadow-2xl h-screen w-[114px]'>
      {
        navIcons.map((icon,index)=>(
          <LeftNavbIconWarpper key={index} imageURL={icon.iconUrl} name={icon.name}/>
        ))
      }
    </div>
  )
}

export default LeftNavBar