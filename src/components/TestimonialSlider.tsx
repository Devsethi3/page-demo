import Image from 'next/image'
import React from 'react'

const TestimonialSlider = () => {
    return (
        <div className='py-10'>
            <div className='max-w-5xl mx-auto p-10 bg-white flex items-center gap-12 rounded-xl'>
                <Image src="/women.jpg" width={300} height={300} className='rounded-xl' alt='client' />
                <div className='flex flex-col items-start gap-10'>
                    <h2>Tony Stark</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum laudantium quam, voluptate est, assumenda minima cupiditate exercitationem nam cumque perferendis consequatur quasi cum quisquam quaerat mollitia! Placeat, sapiente architecto. Suscipit commodi mollitia cupiditate, alias eveniet animi consequuntur a optio.</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlider
