import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');
  console.log({ text });
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form
        className='w-full max-w-sm'
        onSubmit={(e) => {
          e.preventDefault();
          searchText(text);
        }}
      >
        <div className='flex border-b-2 border-solid border-teal-500 py-2'>
          <input
            type='text'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            placeholder='Search Image Term...'
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <button
            className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 text-sm  text-white py-2 px-3 rounded'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
