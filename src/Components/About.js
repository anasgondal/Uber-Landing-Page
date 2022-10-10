import React from "react";
import user from '../images/user.svg'
import safety2 from '../images/safety2.webp'
const About = () => {
    return (
        <>
            <div className="about-section">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about-col-wrapper">
                                <img src={user} alt="" />
                                <h5 className="mt-3">About Us</h5>
                                <p className="mt-3">
                                    Find out how we started, what drives us, and how we’re reimagining how the world moves.
                                </p>
                                <span className="link">
                                    Learn more about Uber
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="about-col-wrapper">
                                <img src={user} alt="" />
                                <h5 className="mt-3">Newsroom</h5>
                                <p className="mt-3">
                                See announcements about our latest releases, initiatives, and partnerships.
                                </p>
                                <span className="link">
                                 Go to Newsroom
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="about-col-wrapper">
                                <img src={user} alt="" />
                                <h5 className="mt-3">Global citizenship</h5>
                                <p className="mt-3">
                                Read about our commitment to making a positive impact in the cities we serve.
                                </p>
                                <span className="link">
                                See our partnerships
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About