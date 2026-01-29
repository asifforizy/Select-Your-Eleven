import React from 'react';
import banner from '../../assets/banner-main.png'

const Hero = () => {
    return (
        <div className='banner rounded-xl items-center p-20 ' >
            <img src={banner} alt=""  className='img w-80 mx-auto' />
            <h1 className=' text-4xl font-bold text-center mt-5'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className=' text-center text-xl'>Beyond Boundaries Beyond Limits</p>
            <div className='flex justify-center'>
                <button className='bg-lime-400 rounded-xl  px-4 py-2  mt-4'>Claim Free Credits</button>
            </div>
        </div>
    );
};

export default Hero;
