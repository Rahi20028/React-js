import { useState } from 'react'


function App() {

  return (
    <>
     <div class="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
    <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" alt="Book Cover"></img>
    <div class="p-4">
      <h2 class="text-xl font-semibold text-gray-800">The Book Title</h2>
      <p class="text-sm text-gray-600 mt-1">Author: John Doe</p>
      <p class="text-gray-700 mt-2 text-sm">A short description about the book goes here. This is just a demo.</p>
      <div class="mt-4 flex justify-between items-center">
        <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Read</span>
        <button class="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600 transition">Edit</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
