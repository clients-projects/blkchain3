import React from 'react'
import Logo from '../assets/logo.png'
import {
    FaTwitterSquare,
    FaFacebookSquare,
    FaLinkedin,
    FaGithubSquare,
} from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='text-sm text-center bg-[#153A62] md:flex justify-between items-center py-4 px-4 md:px-6'>
            <div className='items-center grid gap-y-4 '>
                <img
                    src={Logo}
                    alt=''
                    className='max-w-none z-50'
                    width={'216'}
                    height={'32'}
                />
                <div className='flex justify-around max-w-min pl-4'>
                    <FaTwitterSquare className='text-2xl-lg mr-4' />
                    <FaFacebookSquare className='text-2xl-lg mr-4' />{' '}
                    <FaLinkedin className='text-2xl-lg mr-4' />
                    <FaGithubSquare className='text-2xl-lg mr-4' />
                </div>
            </div>
            <div className='grid self-end'>
                <p style={{fontSize: '12px', textAlign: 'left'}} className='place-self-end'>
                    ©2021 Blockchain Access (Ireland) Limited. Privacy Policy
                     |  Terms of Service
                </p>
            </div>
        </div>
    )
}
