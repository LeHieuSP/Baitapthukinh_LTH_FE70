import React, { Component } from 'react'

export default class HangGhe extends Component {


  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe,index) => {

      let cssGheDaDat = '';
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon'
        disabled = true;
      }
      return <button disabled={disabled} className={`ghe ${cssGheDaDat}`} key={index}>
          {ghe.soGhe}
      </button> 
    })
  }


  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index)=>{
      return <button className="rowNumber">
        {hang.soGhe}
        </button>
    })
  }
    
  

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div>
         {this.props.hangGhe.hang} {this.renderSoHang()}
      </div>
    } else {
      return <div>
      {this.props.hangGhe.hang} {this.renderGhe()}
      </div>
    }
    
  }


  render() {
    return (
      <div className="text-light text-left ml-4 mt-2" style={{fontSize:25}}>
        {this.renderHangGhe}
      </div>
    )
  }
}
