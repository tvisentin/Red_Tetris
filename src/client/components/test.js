import React from 'react'

export const Tetris = () => {
  return (
    <Board/>
  )
}

export const Board = () => {
  return board.map((row, index) => {
      return (
        <div
          style={{
            backgroundColor: row ? 'black' : 'white',
            width: '10px',
            height: '10px'
          }}
        />
      )
    })
  }
