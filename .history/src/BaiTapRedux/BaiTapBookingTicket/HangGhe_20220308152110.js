import React, { Component } from 'react'

export default class HangGhe extends Component {


  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe,index) => {
      let cssGheDaDat = '';
      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon'
      }
      return <button className={`ghe ${cssGheDaDat}`} key={index}>
          {index+1}
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
