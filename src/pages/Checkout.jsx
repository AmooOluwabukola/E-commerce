import React from 'react';

const Checkout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center font-roboto text-black">
      <h1 className='lg:text-[3rem] text-[2rem] mt-[5rem] text-center'>
        Checkout
      </h1>
      <form className='w-full max-w-lg mt-8'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Your Name' required />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='address'>
            Address
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='address' type='text' placeholder='Your Address' required />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='payment'>
            Payment Method
          </label>
          <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='payment' required>
            <option value='credit-card'>Credit Card</option>
            <option value='paypal'>PayPal</option>
            <option value='bank-transfer'>Bank Transfer</option>
          </select>
        </div>
        <button className='bg-[#df0c12] text-white p-2 rounded-md w-full' type='submit'>
          Complete Purchase
        </button>
      </form>
    </div>
  );
}

export default Checkout;