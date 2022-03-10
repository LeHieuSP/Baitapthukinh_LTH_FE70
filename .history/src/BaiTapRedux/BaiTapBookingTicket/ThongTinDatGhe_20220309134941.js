import React, { Component } from "react";
import {connect} from 'react-redux';

 class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-3">
          <button className="gheDuocChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế đã đặt
          </span>{" "}
          <br />
          <button className="gheDangChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế đang đặt
          </span>{" "}
          <br />
          <button className="ghe" style={{ marginLeft: "0" }}></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế chưa đặt
          </span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{fontSize:'20px'}}>
                <th>số ghế</th>
                <th>giá</th>
                <th></th>

              </tr>
            </thead>
            <tbody className="text-warning">
            {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
              return <tr key={index}>
                        <td>{gheDangDat.soGhe}</td>
                        <td>{gheDangDat.gia}</td>

              </tr>
            })}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat;
  }
}

export default connect(mapStateToProps) (ThongTinDatGhe);