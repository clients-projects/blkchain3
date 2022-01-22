import React from 'react'
import Logo from '../assets/logo.png'


export default function Footer() {
    return (
        <div className='text-5xl text-center bg-[#153A62]'>
            <div className='w-full items-center justify-between grid gap-y-4 lg:flex '>
                <img
                    src={Logo}
                    alt=''
                    className='max-w-none z-50'
                    width={'216'}
                    height={'32'}
                />
            </div>
            
        </div>
    )
}
