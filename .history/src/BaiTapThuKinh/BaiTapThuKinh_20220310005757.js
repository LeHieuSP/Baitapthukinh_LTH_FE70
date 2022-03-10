import React, { Component } from "react";
import dataGlasses from '../data/dataGlasses.json';



export default class BaiTapThuKinh extends Component {

  renderGlassesList = () => {
    return dataGlasses.map((glassesItem,index)=>{
      return <p>{glassesItem.name}</p>
    })
  }




  render() {

    const styleGlasses = {
        width: '131px',
        top: '76px',
        right: '78.3px',
        opacity: '0.8'

    }

    const infoGlasses = {
    width: '250px',
    height:'100px',
    backgroundColor: 'rgba(235,113,83,.5)',
    top: '205px',
    left: '270px',
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
            style={{ backgroundColor: "rgba(252	,224,166,.2)", color:'#444444' }}
            className="text-center  p-3"
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
                  <span style={{color:'#6666FF',fontSize:'18px'}} className="font-weight-bold ">Tên Kính</span> <br/>
                  <span style={{fontSize:'15px',fontWeight:'400'}} className="text-light">Mô Tả</span>

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
          
          {/* div chứa các kính được chọn*/}
          <div className="bg-light container text-center mt-5 d-flex justify-content-center">
            {this.renderGlassesList()}
          </div>
          </div>
        </div>
      </div>
    );
  }
}
