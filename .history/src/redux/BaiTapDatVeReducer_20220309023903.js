const stateDefault = {
  danhSachGheDangDat: [],
};

const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {//ghế đang đặt đã có trong mảng khi người dùng click
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
          danhSachGheDangDatUpdate.push(action.ghe)
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapDatVeReducer;
