import React from 'react'

export const Info = (props) => {
  return (
    <div className='bg-dark py-2'>
        <p className='text-center text-light'>Copyright@{props.name}.com</p>
    </div>
  )
}
