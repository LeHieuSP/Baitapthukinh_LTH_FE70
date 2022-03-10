
import { Component } from 'react';
import './App.css';
import BaiTapBookingTicket from './BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket';
import BaiTapThuKinh from './BaiTapThuKinh/BaiTapThuKinh';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <BaiTapBookingTicket /> */}
        <BaiTapThuKinh />
      </div>
    )
  }
}


