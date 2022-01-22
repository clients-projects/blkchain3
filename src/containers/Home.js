import React from 'react'

import Nav from '../components/Nav'
import '../styles/styles.css'
import Footer from '../components/Footer'
import Form from '../components/Form'

function Layout() {
    return (
        <div className='h-screen overflow-x-hidden justify-items-center'>
                <div className='my-0 mx-auto w-full sm:pb-20'>
                    <Nav />
                </div>
                <div className=' mx-auto w-full'>
                    <Form />
                </div>
                <div className='mx-auto w-full absolute bottom-0'>
                    <Footer />
                </div>
        </div>
    )
}

export default Layout
