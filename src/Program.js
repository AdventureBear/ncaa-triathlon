/**
 * Created by suzanne on 1/12/17.
 */
import React from 'react'
import programs from '../www/data/usat-ncaa-programs.js';



var Program = React.createClass({
  render: function(){
    const imgPath = "./images/" + this.props.logo
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={imgPath} />

        <h2>This is it's description</h2>
      </div>
    )
  }
})

export default Program