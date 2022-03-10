import React, { Component } from 'react'
import './BaiTapBookingTicket.css';

export default class BaiTapBookingTicket extends Component {
  
  
  
  
  
  
  
    render() {
    return (
      <div className="bookingMovie" style={{position:"fixed",width:'100%',height:'100%',
      backgroundImage:"url('./img/bookingTicket/bgmovie.jpg')"}}>
          <div style={{position:"fixed",width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.8)'}}>
              <div className="container-fluid">
              <div className="row">
                <div className="col-8 text-center">
                    <div className="text-light display-4">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                    <div className="mt-3" style={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
                    <div className="screen"></div>
                    </div>
                </div>
                <div className="col-4">
                    
                </div>
              </div>
              </div>
              </div>
      </div>
    )
  }
}

