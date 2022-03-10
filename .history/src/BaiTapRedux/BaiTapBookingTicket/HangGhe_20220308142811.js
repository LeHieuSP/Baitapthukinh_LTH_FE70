import React, { Component } from 'react'

export default class HangGhe extends Component {
  render() {
    return (
      <div className="text-light text-left ml-4 mt-2" style={{fontSize:25}}>
          {this.props.hangGhe.hang}
      </div>
    )
  }
}
