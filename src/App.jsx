import React from 'react'
import TicTacToe from './components/TicTacToe'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white flex justify-center items-center'>
      <TicTacToe size={4} />
    </div>
  )
}

export default App