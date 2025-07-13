import React from 'react'
import ServiceCard from '../card/ServiceCard'
import frontImg from '../images/frontend.png'
import uiImg from '../images/ui.png'

const Services = () => {
    return (
        <div className='w-full py-20 font-sans' id='services'>
            <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-semibold">Services</h2>
                <p className="text-sm md:text-base font-medium pt-2">What I Offer</p>
            </div>
            <div className='flex justify-center py-10 m-auto gap-5 flex-wrap'>
                <ServiceCard image={frontImg} name='Frontend Developer' />
                <ServiceCard image={uiImg} name='UI Designer' />
            </div>
        </div>
    )
}

export default Services
