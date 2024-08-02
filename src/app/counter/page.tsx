'use client'
import React, { useState } from 'react'
import type { RootState } from '@/hook/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/hook/features/counter/counterSlice'
type Props = {}

const Page = (props: Props) => {
    // redux
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    const btnIncrement = () => {
        dispatch(increment())
    }
    const btnDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div className='container'>
            <div className='mx-auto'>
                <div className='text-center mt-5'>
                    <div className='fs-1'>
                        {count}
                    </div>
                </div>
                <div className='mt-5 text-center'>
                    <input className='btn btn-primary m-2 w-25' type="button" value="- remove" onClick={btnDecrement} />
                    <input className='btn btn-primary m-2 w-25' type="button" value="+ plus" onClick={btnIncrement} />
                </div>
            </div>
        </div>
    )
}

export default Page