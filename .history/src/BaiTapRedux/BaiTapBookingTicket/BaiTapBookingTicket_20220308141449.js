import React, { Component, Fragment } from 'react'
import './BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from '../../data/danhSachGhe.json';
export default class BaiTapBookingTicket extends Component {
  
  
  renderHangGhe = () => {
      return danhSachGheData.map((hangGhe,index) => {
        return <div key={index}>
              <HangGhe />
        </div>
      })

  }
  
  
  
  
    render() {
    return (
      <div className="bookingMovie" style={{position:"fixed",width:'100%',height:'100%',
      backgroundImage:"url('./img/bookingTicket/bgmovie.jpg')"}}>
          <div style={{position:"fixed",width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.8)'}}>
              <div className="container-fluid">
              <div className="row">
                <div className="col-8 text-center">
                    <div className="h1 text-warning mt-1">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                    <div className="mt-2 text-light" style={{fontSize:'20px'}}>Màn Hình</div>  
                    <div className="mt-1" style={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
                      
                    <div className="screen"></div>
                  
                    </div>
                    {this.renderHangGhe()}
                </div>
                <div className="col-4 ">
                <div className="h2 text-success mt-1 ">DANH SÁCH GHẾ BẠN CHỌN</div>
                <ThongTinDatGhe />
                    
                </div>
              </div>
              </div>
              </div>
      </div>
    )
  }
}

