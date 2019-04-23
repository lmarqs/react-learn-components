import React from 'react';
import PropTypes from 'prop-types';
import Apartment from './Apartment';

export default class Tower extends React.Component {
  static propTypes = {
    isNight: PropTypes.bool
  }

  render() {
    return (
      <div className="tower">
        <div className="watter-supply"></div>
        <Apartment isNight={this.props.isNight} />
        <Apartment isNight={this.props.isNight} />
        <Apartment isNight={this.props.isNight} />
        <Apartment isNight={this.props.isNight} />
        <Apartment isNight={this.props.isNight} />
      </div>
    )
  }
}
