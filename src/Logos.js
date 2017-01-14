/**
 * Created by suzanne on 1/11/17.
 */
// src/components/Logos.js
import React from 'react';

const data = {
  'asu': {
    'name': 'Arizona State University',
    'icon': 'logo-asu.jpg'
  },
  'ba': {
    'name': 'Belmont Abby College',
    'icon': 'logo-ba.jpg'
  },
  'bhs': {
    'name': 'Black Hills State University',
    'icon': 'logo-bhs.png'
  },
  'ccl': {
    'name': 'Centenary College of Louisiana',
    'icon': 'logo-ccl.jpg'
  },
  'cu': {
    'name': 'Concordia University Wisconsin',
    'icon': 'logo-cu.png'
  },
  'dc': {
    'name': 'Daemen College',
    'icon': 'logo-du.png'
  },
  'etsu': {
    'name': 'East Tennessee State University',
    'icon': 'logo-etsu.jpg'
  },
  'mu': {
    'name': 'Marymount University',
    'icon': 'logo-mu.jpg'
  },
  'ncc': {
    'name': 'North Central College',
    'icon': 'logo-nc.png'
  },
  'swu': {
    'name': 'Southern Wesleyan University',
    'icon': 'logo-swu.png'
  },
  'uwa': {
    'name': 'University of West Alabama',
    'icon': 'logo-tig.png'
  },
  'tu': {
    'name': 'Trine University',
    'icon': 'logo-tu.jpg'
  }
};

export default class Flag extends React.Component {
  render() {
    const name = data[this.props.code].name;
    const icon = data[this.props.code].icon;
    return (
      <span className="logo">
        <img className="icon" title={name} src={`/img/${icon}`}/>
        {this.props.showName && <span className="name"> {name}</span>}
      </span>
    );
  }
}