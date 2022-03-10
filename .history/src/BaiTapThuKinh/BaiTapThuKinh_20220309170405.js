import React, { Component } from "react";

export default class BaiTapThuKinh extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1500px",
          height: "1000px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.3)", height: "1000px" }}>
          <h3
            style={{ backgroundColor: "rgba(252	,224,166,.2)" }}
            className="text-center text-light p-3"
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                  <div className="position-relative">
                <img className="position-absolute"
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                />
                <img className="position-absolute" src="./glassesImage/v1.png" />
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
