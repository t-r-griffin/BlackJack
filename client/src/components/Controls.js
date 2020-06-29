import React, { Fragment, Component } from 'react';
import PlayArea from './PlayArea';
import back from '../assets/PNG/blue_back.png';

class Controls extends Component {
  finishButton = () => {
    if (this.props.gameFinished) {
      return (
        <div>
          <button
            onClick={this.props.startGame}
            className="please btn-floating btn-large red"
          >
            ReDeal
          </button>
        </div>
      );
    }
  };

  renderButtons = () => {
    if (!this.props.playerBust) {
      return (
        <div className="button-container">
          <p className="buttonText fadeOut">Goodluck!</p>
          <button
            onClick={this.props.hit}
            disabled={this.props.buttonDisabled}
            className="button button-item1 btn-floating btn-large red instant"
          >
            Hit
          </button>
          <button
            onClick={this.props.stand}
            disabled={this.props.buttonDisabled}
            className="button button-item3 btn-floating btn-large red instant"
          >
            Stand
          </button>
        </div>
      );
    }
    return;
  };

  renderContent(props) {
    let content;
    if (this.props.gameStarted) {
      content = (
        <React.Fragment>
          <PlayArea
            className="dealerScore instant"
            gameState={this.props.gameState}
            hit={this.props.hit}
            stand={this.props.stand}
            cardsGiven={this.props.aiCards}
            userCards={this.props.userCards}
            total={this.props.aiCount}
          />
          <PlayArea
            className="playerScore instant"
            content="content instant"
            gameState={this.props.gameState}
            hit={this.props.hit}
            stand={this.props.stand}
            aiCards={this.props.aiCards}
            cardsGiven={this.props.userCards}
            total={this.props.userCount}
          />
          {this.renderButtons()}
        </React.Fragment>
      );
    } else if (!this.props.gameStarted && !this.props.redeal) {
      content = (
        <React.Fragment className="button-container">
          <button
            onClick={this.props.startGame}
            className="button button-item2 btn-floating btn-large red"
          >
            Deal
          </button>
          <p className="buttonText">Select Deal to get started</p>
        </React.Fragment>
      );
    }
    return content;
  }

  render() {
    return (
      <div className="test">
        <img className="shuffle" src={back} />
        <div className="center">
          <div className="controls">{this.renderContent()}</div>
          <div className="controls">{this.finishButton()}</div>
        </div>
      </div>
    );
  }
}

export default Controls;
