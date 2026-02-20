import React from 'react'
import ServiceCard from '../card/ServiceCard'
import frontImg from '../images/frontend.png'
import uiImg from '../images/ui.png'
import { useTheme } from '../context/ThemeContext'

const Services = () => {
    const { isDark } = useTheme();
    
    return (
        <section className={`w-full px-6 py-24 ${isDark ? 'bg-[#050505] text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`} id='services'>
            <div className="max-w-5xl mx-auto">
                
                {/* Header Section */}
                <div className="mb-16 space-y-2">
                    <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        My <span className="text-blue-500">Expertise</span>
                    </h2>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-md`}>
                        Combining technical proficiency with creative design to build high-performance digital products.
                    </p>
                    <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
                </div>

                {/* The Responsive Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    
                    {/* Card 1 */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                        <div className={`relative ${isDark ? 'bg-[#111] border-white/10' : 'bg-white border-gray-200'} border p-2 rounded-2xl h-full transition-transform duration-300 group-hover:-translate-y-2`}>
                            <ServiceCard image={frontImg} name='Frontend Developer' />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                        <div className={`relative ${isDark ? 'bg-[#111] border-white/10' : 'bg-white border-gray-200 '} border p-2 rounded-2xl h-full transition-transform duration-300 group-hover:-translate-y-2`}>
                            <ServiceCard image={uiImg} name='UI Designer' />
                        </div>
                    </div>

                    {/* Add more cards here as needed; the grid will handle them automatically */}

                </div>
            </div>
        </section>
    )
}

export default Services