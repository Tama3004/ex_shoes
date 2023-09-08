import React, { Component } from 'react'

export default class DetailShoe extends Component {
  render() {
    let {image, description} = this.props.detail
    return (
      <div>
        <img src={image} alt="" />
        <h1>{description}</h1>
      </div>
    )
  }
}
