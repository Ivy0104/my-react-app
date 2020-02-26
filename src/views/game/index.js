import './styles/index.css';
import React, {Component} from 'react';
import { observer, inject } from "mobx-react";
import Board from './comps/board'

@inject("gameStore")

 @observer

class Game extends Component {
  testThis() {
      console.log(this)
    }
    render() {
        return (
            <div className="game">
              <div className="game-board">
                <Board />
              </div>
              <div className="game-info">
                <div onClick = {this.props.gameStore.updateName}>{this.props.gameStore.name}</div>
              <ol onClick={() => this.testThis()}>testThis</ol>
              </div>
            </div>
          );
    }
  }

  export default Game
