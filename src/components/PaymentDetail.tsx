import React from 'react'
import BottomButton from './BottomButton'

const PaymentDetail: React.FC = () => {
  return (
    <div className='bg-green-300/20 relative'>  {/* Added relative to the wrapper */}
      <div className='m-3'>
        <h1 className='font-bold text-sky-800 text-xl '>Payment Details Batch 1</h1>
        <div className='flex justify-between'>
          <h1 className='text-gray-900 font-semibold'>Gross Amount</h1>
          <span>1600</span>
        </div>
        <div className='flex justify-between'>
          <h1 className='text-gray-900 font-semibold'>Pharmacy Discount</h1>
          <span>-200</span>
        </div>
        <div className='flex justify-between'>
          <h1 className='text-gray-900 font-semibold'>Delivery Charges</h1>
          <span>N/A</span>
        </div>
        <div className='flex justify-between'>
          <h1 className='text-gray-900 font-semibold'>Round Off</h1>
          <span>N/A</span>
        </div>
        <div className='flex justify-between'>
          <h1 className='text-gray-900 font-semibold'>Total Amount</h1>
          <span>1400</span>
        </div>
      </div>

      <BottomButton/>
    </div>
  )
}

export default PaymentDetail
