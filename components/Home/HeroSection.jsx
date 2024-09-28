import React from 'react'

const HeroSection = () => {
    return (
        <div className='container fade-in'>
            <h1 className='text-white text-3xl sm:text-4xl font-extrabold mt-20 leading-relaxed'>Hi, <br className='sm:hidden' /> I'm <span className='text-gradient'>Abdul Moeez.</span> <br />
                Full stack developer based in <br /> Lahore, Pakistan.</h1>
            <p className='text-white text-opacity-80 max-w-[600px] leading-relaxed mt-5'>As a developer, I enjoy making concepts come to life on the internet. I'm all about making enjoyable user experiences, whether it be by designing slick user interfaces or developing reliable back-end systems.</p>
            <p className='mt-5 text-white'>Get in touch <span className='relative'><div className='absolute w-full h-[2px] bg-gradient left-0 -bottom-1'></div> <a href="mailto:moeezbuttab231@gmail.com">hello@abdulmoeez.me</a></span></p>
        </div>
    )
}

export default HeroSection