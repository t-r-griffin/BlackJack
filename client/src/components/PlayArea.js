import React, { Fragment, Component } from 'react';
import wtf from '../assets/PNG/blue_back.png';
import Card from './Card';

class PlayArea extends Component {
  renderScore = (props) => {
    if (this.props.gameState == 'INPLAY') {
      return <div className={this.props.className}>{this.props.total}</div>;
    } else {
      return (
        <div
          className={this.props.className}
          style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
          {this.props.total}
        </div>
      );
    }
  };

  renderContent = (props) => {
    if (this.props.content && this.props.gameState == 'INPLAY') {
      return <div className={this.props.content}>IN PLAY</div>;
    } else if (this.props.content && this.props.gameState == 'STAND') {
      return (
        <div
          className={this.props.content}
          style={{ color: 'white', backgroundColor: '#ff8c00' }}
        >
          STAND
        </div>
      );
    } else if (this.props.content && this.props.gameState == 'LOSE') {
      return (
        <div
          className={this.props.content}
          style={{ color: 'white', backgroundColor: '#B11B1B' }}
        >
          LOSE
        </div>
      );
    } else if (this.props.content && this.props.gameState == 'WIN') {
      return (
        <div
          className={this.props.content}
          style={{ color: 'white', backgroundColor: 'green' }}
        >
          WIN
        </div>
      );
    } else if (this.props.content && this.props.gameState == 'BLACKJACK') {
      return (
        <div
          className={this.props.content}
          style={{ color: 'white', backgroundColor: 'green' }}
        >
          BLACKJACK
        </div>
      );
    } else if (this.props.content && this.props.gameState == 'BUST') {
      return (
        <div
          className={this.props.content}
          style={{ color: 'white', backgroundColor: '#B11B1B' }}
        >
          BUST
        </div>
      );
    } else if (this.props.content && this.props.gameState == 'PUSH') {
      return (
        <div
          className={this.props.content}
          style={{ color: 'white', backgroundColor: '#CCCC00' }}
        >
          PUSH
        </div>
      );
    }
  };

  render() {
    return (
      <div className="playgrid">
        <React.Fragment>{this.renderScore()}</React.Fragment>
        {this.props.cardsGiven.map(function (deck, id) {
          return (
            <div className={`item-${id}`}>
              <Card key={id} cardValue={deck.src} />
            </div>
          );
        })}
        <React.Fragment>{this.renderContent()}</React.Fragment>
      </div>
    );
  }
}

export default PlayArea;
