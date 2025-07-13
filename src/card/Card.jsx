import React from 'react'

const Card = (props) => {
    return (
        <div className='w-35 h-35 flex flex-col items-center justify-center hover:cursor-pointer hover:bg-amber-50 hover:text-black'>
            <img src={props.imgLink} alt="" className='w-20 h-20' />
            <p className="mt-2 text-lg font-medium">{props.imgName}</p>
        </div>

    )
}

export default Card
