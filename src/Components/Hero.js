import React from "react";
const Hero = () => {
    return (
        <>
            <div className="hero-section">
                <div className="custom-container" style={{ padding: '5vw' }}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-content-wrapper">
                                <div className="hero-tabs-wrapper">
                                    <ul>
                                        <li>Drive or <br /> deliver</li>
                                        <li>Eat</li>
                                        <li>Ride</li>
                                    </ul>
                                </div>

                                <b><h1 className="text-center">Request a ride now</h1></b>
                                <div className="hero-form-wrapper">
                                    <form action="">
                                        <div className="form-group mb-3">
                                            <input type="text" name="" id="" placeholder="Enter pickup Location" className="form-control" />
                                        </div>

                                        <div className="form-group  mb-3">
                                            <input type="text" name="" id="" placeholder="Enter pickup Location" className="form-control" />
                                        </div>

                                        <button type="button">
                                            Request now
                                        </button>
                                        <button type="button">
                                            Schedule for later
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Hero