import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

  const calculateWinner = (board, currentPlayer) => {
      const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const win of winPatterns) {
    const [a, b, c] = win

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return `${currentPlayer} wins!`
    }
  }

  if (board.every((spot) => spot !== null)) {
    return 'Cats Game!! Play again?'
  }
  return null
}

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState('❌')
  const [turnNotification, setTurnNotification] = useState("Player ❌'s turn")

const handleClick = (id) => {
  if (board[id] === null) {
    const newBoard = [...board]
    newBoard[id] = currentPlayer
    setBoard(newBoard)
    setCurrentPlayer(currentPlayer === '❌' ? '⭕️' : '❌')
    setTurnNotification(`Player ${currentPlayer === '❌' ? '⭕️' : '❌'}'s turn`)
  }
  const winner = calculateWinner(board, currentPlayer)
  if (winner){
    alert(`Player ${winner} wins!`)
  }
}

const restartGame = () => {
  setBoard(Array(9).fill(null))
  setCurrentPlayer('❌')
  setTurnNotification("Player ❌'s turn")
}

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square board = {board} handleClick ={handleClick}/>
      <h3>  {calculateWinner(board, currentPlayer)} </h3>
      <p>{turnNotification}</p>
      <button onClick = {restartGame}>Restart Game</button>
    </>
  )
}

export default App