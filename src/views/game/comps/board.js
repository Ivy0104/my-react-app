import React, {Component} from 'react';
import Square from './square'

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            theWinner: null
        }
    }
    caculateWinner(squares) {
      const winZone = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]


      for(const zone of winZone) {
        const [a, b, c] = zone
        if (squares[a] && squares[a]===squares[b] && squares[a]===squares[c]) {
          console.log('the winner is:', squares[a])
          this.setState({
            theWinner: squares[a]
          })
          return squares[a]
        }
      }
    }

    handleClick(idx) {
        if(this.state.theWinner || this.state.squares[idx]) {
          return;
        }
        const squares = this.state.squares.slice() // 数组浅复制
        squares[idx] = this.state.xIsNext ? 'x' : 'O';
        this.setState({
            squares,
            xIsNext: !this.state.xIsNext
        })
        this.caculateWinner(squares)        
    }

    renderSquare(i) {
      return (
        <Square 
            value={this.state.squares[i]}
            onClick={() => {this.handleClick(i)}}
        />
      )
    }
  
    render() {
      const winner = this.state.theWinner
      const status = winner ? `the winner is ${winner}` : `Next player: ${this.state.xIsNext ? 'x' : 'O'}`;
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }