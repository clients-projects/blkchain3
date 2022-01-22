import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const NavItem = ({ name, link_path }) => {   

    return (
        <li className=' py-1 lg:py-3 px-4 lg:px-4  lg:self-center text-base flex '>
            <a href={link_path}>{name} </a>
            {name === 'English (US)' ? (
                <BsChevronDown
                    className='self-center text-gray-300'
                    style={{ marginLeft: '.2rem', marginTop: '-3px' }}
                />
            ) : (
                ''
            )}
        </li>
    )
}

export default NavItem
