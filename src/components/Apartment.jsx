import React from 'react';
import PropTypes from 'prop-types';
import Window from './Window';

export default class Apartment extends React.Component {
  static propTypes = {
    lightsOn: PropTypes.bool,
    isNight: PropTypes.bool
  }

  state = {
    isWindowsClosed: false,
  }

  changeWindowsState() {
    this.setState({
      isWindowsClosed: !this.state.isWindowsClosed
    });
  }

  render() {
    return (
      <div className="apartment" onClick={this.changeWindowsState.bind(this)}>
        <Window closed={ this.state.isWindowsClosed } lightOn={ this.props.isNight } />
        <Window closed={ this.state.isWindowsClosed } lightOn={ this.props.isNight } />
      </div>
    )
  }
}
