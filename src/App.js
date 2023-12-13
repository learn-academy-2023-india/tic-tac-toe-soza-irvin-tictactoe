import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  
  console.log("squares:", squares)

    return (
      <>
        <h1>Tic Tac Toe</h1>
        <div className="game-board">
          {squares.map((value, index) => ( 
        <Square key={index} value={value} />
          ))}
          </div>
      </>
    )
  }
export default App