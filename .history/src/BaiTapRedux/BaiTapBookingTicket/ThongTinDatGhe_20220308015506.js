import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
  render() {
    return (
        <div>
      <div className="mt-3">
          <button className="gheDuocChon"></button> <span className="text-light" style={{fontSize:'20px'}}>Ghế đã đặt</span>  <br/>
          <button className="gheDangChon"></button> <span className="text-light" style={{fontSize:'20px'}}>Ghế đang đặt</span> <br />
          <button className="ghe" style={{marginLeft:'0'}}></button> <span className="text-light" style={{fontSize:'20px'}}>Ghế chưa đặt</span> 


      </div>
      </div>
    )
  }
}
