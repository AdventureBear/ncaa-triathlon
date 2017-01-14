/**
 * Created by suzanne on 1/12/17.
 */
import React from 'react'
import programs from '../www/data/usat-ncaa-programs.js';



var Program = React.createClass({
  render: function(){
    const imgPath = "./images/" + this.props.logo

    return (
      <div className = "card">
        <div className = "cardContent">
          <h3>{this.props.name}</h3>
          <span>Division: {this.props.division}</span>
          <img alt="University Logo"  src={imgPath} />

          </div>
      </div>
    )
  }
})

export default Program