import React, { Component } from 'react'
import {connect} from 'react-redux';
import { datGheAction } from '../../redux/actions/BaiTapDatVeAction';
 class HangGhe extends Component {


  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe,index) => {

      let cssGheDaDat = '';
      let disabled = false;
      // trạng thái đã có người khác đặt
      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
      }

      // xét trạng thái ghế đang đặt
      let cssGheDangDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe === ghe.soGhe);
      if (indexGheDangDat !== -1) {
        cssGheDangDat = 'gheDangChon'
      }


      return <button onClick={() =>{
          this.props.datGhe(ghe)
      }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
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
      return <div className="ml-4">
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
        {this.renderHangGhe()}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
  }
}


const mapDispatchToProps = (Dispatch) => {
  return {
    datGhe: (ghe) => {
      Dispatch(datGheAction(ghe))
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(HangGhe);