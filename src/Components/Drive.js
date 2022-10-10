import React from "react";
import arrow from "../images/arrow.png"
const Drive = () => {
    return (
        <>
          <div className="drive-section">
            <div className="custom-container">
            <div className="row">
                            <div className=" col-md-6">
                                <span>Sign up to drive <img className="arrow" src={arrow}></img>  </span>
                            </div>
                            <div className=" col-md-6">
                                <span>Sign up to ride <img className="arrow" src={arrow}></img>  </span>
                            </div>  
                        </div>
            </div>
          </div>
        </>
    );
}

export default Drive