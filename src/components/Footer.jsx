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
        <div className='text-5xl text-center bg-[#153A62] flex justify-between items-center'>
            <div className='items-center grid gap-y-4 '>
                <img
                    src={Logo}
                    alt=''
                    className='max-w-none z-50'
                    width={'216'}
                    height={'32'}
                />
                <div className='flex justify-around'>
                    <FaTwitterSquare className='text-2xl' />
                    <FaFacebookSquare className='text-2xl' />{' '}
                    <FaLinkedin className='text-2xl' />
                    <FaGithubSquare className='text-2xl' />
                </div>
            </div>
            <div>
                <p>
                    ©2021 Blockchain Access (Ireland) Limited. Privacy Policy
                     |  Terms of Service
                </p>
            </div>
        </div>
    )
}
