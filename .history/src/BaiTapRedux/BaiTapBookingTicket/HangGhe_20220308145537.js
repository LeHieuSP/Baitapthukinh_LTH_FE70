import React, { Component } from 'react'

export default class HangGhe extends Component {


  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe,index) => {
      let ssGheDaDat = '';
      if (ghe.daDat) {
        ssGheDaDat = 'gheDuocChon'
      }
      return <button className="ghe" key={index}>
          {ghe.soGhe}
      </button> 
    })
  }




  render() {
    return (
      <div className="text-light text-left ml-4 mt-2" style={{fontSize:25}}>
          {this.props.hangGhe.hang} {this.danhSachGhe()}
      </div>
    )
  }
}
