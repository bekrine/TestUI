import React from 'react'

const Background = () => {
  return (
   <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute left-0 top-0 w-80 h-full bg-gradient-to-br from-yellow-400 to-orange-500"
          style={{
            clipPath: 'circle(44.4% at 0 99%)'
          }}
        />
        
        <div 
          className="absolute right-0 top-0 w-60 h-60 bg-gradient-to-bl from-pink-500 to-purple-500"
          style={{
            clipPath: 'polygon(50% 0%, 75% 34%, 100% 41%, 100% 0)'
          }}
        />
        
        <div 
          className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-tl from-teal-400 to-cyan-300"
          style={{
            clipPath: 'polygon(100% 100%, 100% 50%, 69% 70%, 45% 100%)'
          }}
        />
        
        <div 
          className="absolute left-0 top-0 w-32 h-32 bg-teal-800"
          style={{
            clipPath: 'polygon(54% 0, 0 0, 0 40%, 36% 30%)'
          }}
        />
      </div>
  )
}

export default Background