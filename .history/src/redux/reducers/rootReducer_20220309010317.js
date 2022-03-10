import { combineReducers } from "redux";

//import (combineReducers)
import BaiTapDatVeReducer from '../BaiTapDatVeReducer';
const rootReducer = combineReducers ({
    state: BaiTapDatVeReducer, // state bài tập đặt vé
})


export default rootReducer ;