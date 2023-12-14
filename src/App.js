import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(true);

  const handleClick = (index) => {
  if (squares[index]) {
    return
  }
  const clickSquare = squares.slice()

 if (player) {
    clickSquare[index] = "X"
  } else { 
    clickSquare[index] = "O"
  }
  setPlayer(!player);

  setSquares(clickSquare)
}

useEffect(() => {
  console.log("squares:", squares);
}, [squares])

  // setSquares(clickSquare, () => {
  //   console.log("squares:", squares)
  // })
  // setPlayer(!player)
  // }
  
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <div className="game-board">
          {squares.map((value, index) => ( 
        <Square key={index} value={value} onClick={() => handleClick(index)}/>
          ))}
          </div>
      </>
    )
  }
export default App