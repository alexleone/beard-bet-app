import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './FlashCards.css';

class FlashCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      visibleCard: 0
    }
  }

  componentDidMount() {
    const { cards } = this.props;
    this.setState({ cards });
  }

  renderActiveCard = (card, i) => {
    let baseClass = 'FlashCards-card';
    return (
      <div key={i} className={i === 0 ? `${baseClass} ${baseClass}-first` : `${baseClass}`}>
        {card}
      </div>
    );
  };

  showNextCard = () => {
    let visibleCard = this.state.visibleCard + 1;
    if (visibleCard === this.state.cards.length) {
      visibleCard = 0;
    }
    return this.setState({ visibleCard })
  };

  render() {
    return (
      <div className="FlashCards" onClick={this.showNextCard}>
        {this.state.visibleCard === 0 ? <span className="FlashCards-arrow">click to continue</span> : ''}
        {this.state.cards.map((card, i) => {
          return this.state.visibleCard === i ? this.renderActiveCard(card, i) : ''
        })}
      </div>
    );
  }
}

FlashCards.propTypes = {
  cards: PropTypes.array.isRequired,
  visibleCard: PropTypes.number
};

export default FlashCards;
