import React from 'react'
import { BiMenu } from 'react-icons/bi'

import Logo from '../assets/logo.png'
import useToggle from './toggle'
import NavItem from './NavItem'

const Nav = () => {
    const [isOn, toggleIsOn] = useToggle()

    let categoryModalStyle = {
        width: isOn ? '100%' : '0',
        visibility: isOn ? 'visible' : 'hidden',
    
    }

    let hamburgerStyle = (
        <div
            className='flex z-30 relative bg-[#3A7AA5]' style={{
                padding: '6px 10px'
            }}
        >
            <BiMenu
                className='text-white self-center text-2xl relative cursor-pointer'
                onClick={toggleIsOn}
            />
        </div>
    )

    const categoryModal = (
        <div className=' w-full ' style={categoryModalStyle}>
            <div className='categoryModal'>
                <ul className='ml-4'>
                    <NavItem name='English (US)' link_path='/' />

                    <NavItem name='Sign in' link_path='/' />
                    <NavItem name=' Blockchain.com Wallet ' link_path='/' />
                    <NavItem name='Status' link_path='/' />
                </ul>
            </div>
        </div>
    )
    return (
        <nav className='grid grid-cols-nav justify-between p-4 relative bg-[#153A62]'>
            <div className='w-full items-center justify-between grid gap-y-4 lg:flex '>
                <img
                    src={Logo}
                    alt=''
                    className='max-w-none z-50'
                    width={'216'}
                    height={'32'}
                />
            </div>

            <div className='modal lg:hidden justify-self-end'>
                {hamburgerStyle}
                {categoryModal}
            </div>

            <ul className='hidden lg:flex align-middle justify-self-end'>
                <NavItem name='English (US)' link_path='/' />
                <NavItem name='Sign in' link_path='/' />
                <NavItem name='Blockchain.com Wallet' link_path='/' />
                <NavItem name='Status' link_path='/' />
            </ul>
        </nav>
    )
}

export default Nav
