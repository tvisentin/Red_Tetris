import React from 'react'
import { connect } from 'react-redux'
import { Tetris } from testPath

const App = ({message, board}) => {
  return (
    <div>
      <span>{message}</span>
      <Tetris />
    </div>
    
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    board: state.board
  }
}
export default connect(mapStateToProps, null)(App)


