import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Image from '../day-and-night.png';

export default class ButtonTogglePeriod extends React.Component {
  static propTypes = {
    onChangeEvent: PropTypes.func,
    onTransitionEnd: PropTypes.func,
  }

  state = {
    active: false
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.switchButton)
      .addEventListener('transitionend', this.props.onTransitionEnd, false);
  }

  onChange() {
    this.setState({
      active: !this.state.active
    },this.props.onChangeEvent())
  }

  render() {
    const { active } = this.state;
    const pos = (active) ? "active" : "";
    return (
      <button
        ref="switchButton"
        onClick={this.onChange.bind(this)}
        className={ "toggle-button floating " + pos }>
        <img src={Image} alt="Toggle day/night" width="32" height="32" />
      </button>
    )
  }
}
