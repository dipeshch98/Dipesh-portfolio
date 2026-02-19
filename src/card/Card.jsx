import React from 'react'

const Card = (props) => {
    return (
        <div className='w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center hover:cursor-pointer bg-slate-800/50 rounded-xl p-6 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-blue-500'>
            <img src={props.imgLink} alt={props.imgName} className='w-16 h-16 md:w-20 md:h-20 object-contain' />
            <p className="mt-3 text-sm md:text-base font-medium text-center">{props.imgName}</p>
        </div>

    )
}

export default Card
