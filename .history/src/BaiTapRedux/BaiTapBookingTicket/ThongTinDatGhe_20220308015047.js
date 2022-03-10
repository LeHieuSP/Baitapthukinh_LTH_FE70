import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="mt-3">
          <button className="gheDuocChon"></button> <span className="text-light" style={{fontSize:'20px'}}>Ghế đã đặt</span> 
          <button className="gheDangChon"></button> <span className="text-light" style={{fontSize:'20px'}}>Ghế đang đặt</span> 
          <button className="ghe"></button> <span className="text-light" style={{fontSize:'20px'}}>Ghế chưa đặt</span> 


      </div>
    )
  }
}
