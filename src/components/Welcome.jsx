import React from 'react'

const Welcome = () => {
  return (
    <div className='bg-white h-[450px] shadow-2xl w-[450px] rounded-md'>
        <p className='text-center text-[20px] font-bold mt-7'>React Weather App</p>
        <img src="../assets/icons/perfect-day.svg" alt="Perfect Day"/>
    </div>
  )
}

export default Welcome