import React from "react";
import safety1 from '../images/safety1.webp'
import safety2 from '../images/safety2.webp'
import {Link} from 'react-router-dom'
const Safety = () => {
    return (
        <>
            <div className="safety-section">
                <div className="custom-container">
                    <h2 className="mb-5">Focused on Safety, Wherever you go</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="safety-col-wrapper">
                                <div className="img-area">
                                    <img src={safety1} alt="" />
                                </div>
                                <div className="content-area">
                                    <h3>Our commitment to your safety</h3>
                                    <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                                    <span>
                                        Read about our Community Guidelines
                                    </span> &nbsp; &nbsp; &nbsp;
                                    <span>
                                        See all safety features</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="safety-col-wrapper">
                                <div className="img-area">
                                    <img src={safety2} alt="" />
                                </div>
                                <div className="content-area">
                                    <h3>Our commitment to your safety</h3>
                                    <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                                    <span>
                                        Read about our Community Guidelines
                                    </span> &nbsp; &nbsp; &nbsp;
                                    <span>
                                        See all safety features</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Safety