import React from 'react'

const Expertise = () => {
    return (
        <div className='py-5 sm:py-10 md:py-14'>
            <h1 className='text-white font-bold text-base sm:text-xl md:text-2xl lg:text-3xl text-center'>
                MY EXPERTISE
            </h1>
            <div className='mt-10 sm:mt-20 text-lg xs:text-2xl md:text-3xl lg:text-5xl text-white font-black space-y-10 tracking-wide'>
                <div className='border-b border-neutral-500 pb-5'>
                    <h1 className='container text-gradient'>FRONT END DEVELOPMENT</h1>
                </div>
                <div className='border-b border-neutral-500 pb-5'>
                    <h1 className='container text-gradient'>BACK END DEVELOPMENT</h1>
                </div>
                <div className='border-b border-neutral-500 pb-5'>
                    <h1 className='container text-gradient'>MOBILE APP DEVELOPMENT</h1>
                </div>
                <div className='border-b border-neutral-500 pb-5'>
                    <h1 className='container text-gradient'>SHOPIFY CLI</h1>
                </div>
                <div className='border-b border-neutral-500 pb-5'>
                    <h1 className='container text-gradient'>UI DESIGN</h1>
                </div>
                <div className='border-b border-neutral-500 pb-5'>
                    <h1 className='container text-gradient'>WEB ANIMATIONS</h1>
                </div>
                {/* <svg width="1000" height="500" xmlns="http://www.w3.org/2000/svg">
                    <text x="10" y="100" font-family="Arial" font-size="80" fill="white">WEB DEVELOPMENT</text>
                </svg> */}
            </div>
        </div>
    )
}

export default Expertise