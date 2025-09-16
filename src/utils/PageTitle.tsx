import React from 'react'

interface Props {
    title: string;
}

const PageTitle = ({title}:Props) => {
  return (
    <h1 className="text-[#093B42] font-normal text-5xl font-serif">{title}</h1>
  )
}

export default PageTitle