import React, { Component } from "react";

export default class BaiTapThuKinh extends Component {
  render() {

    const styleGlasses = {
        width: '131px',
        top: '76px',
        right: '78.3px',
        opacity: '0.8'

    }

    const infoGlasses = {
    width: '250px',
    backgroundColor: 'rgba(235,113,83,.5)',
    top: '215px',
    left: '225px',
    textAlign: 'left',
    padding: '5px'
    }


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
                <img style={styleGlasses}
                className="position-absolute" src="./glassesImage/v1.png" 
                />
                <div style={infoGlasses} className="position-relative">
                  <p>Tên Kính</p>
                  <p>Mô Tả</p>

                  </div>
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
