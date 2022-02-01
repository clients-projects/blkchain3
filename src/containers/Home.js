import React from 'react'

import Nav from '../components/Nav'
import '../styles/styles.css'
import Footer from '../components/Footer'
import Form from '../components/Form'

function Layout() {
    return (
        <div className='h-screen overflow-x-hidden justify-items-center'>
                <div className='my-0 mx-auto w-full'>
                    <Nav />
                </div>
                <div className=' mx-auto w-full my-16 px-4 md:w-3/5'>
                    <Form />
                </div>
                <div className='mx-auto w-full'>
                    <Footer />
                </div>
        </div>
    )
}

export default Layout
