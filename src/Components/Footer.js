import React from "react";
import facebook from '../images/fb-icon.png'
import twitter from '../images/twitter-icon.png'
import youtube from '../images/youtube-icon.png'
import indeed from '../images/indeed-icon.png'
import instagram from '../images/instagram-icon.png'
const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <div className="custom-contaier">
                    <div className="col-lg-12">
                        <ul className="footer-list mt-3">
                            <li className="Ft-Heading">Uber</li>
                            <li>Visit Help Center</li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="footer-list mt-3">
                                <li className="li-head">Company</li>
                                <li>About Us</li>
                                <li>Our Offerings</li>
                                <li>Newsroom</li>
                                <li>Investors</li>
                                <li>Blogs</li>
                                <li>Careers</li>
                                <li>AI</li>
                                <li>Gift Cards</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul className="footer-list mt-3">
                                <li className="li-head">Products</li>
                                <li>Ride</li>
                                <li>Drive</li>
                                <li>Eat</li>
                                <li>Uber for Business</li>
                                <li>Blogs</li>
                            </ul>
                        </div>

                        <div className="col-lg-3">
                            <ul className="footer-list mt-3">
                                <li className="li-head">Gloal Citizenship</li>
                                <li>Safety</li>
                                <li>Diversity and Inclusion</li>

                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul className="footer-list mt-3">
                                <li className="li-head">Travel</li>
                                <li>Airports</li>
                                <li>Cities</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 ">
                            <img className="icons" src={facebook}></img>
                            <img className="icons" src={twitter}></img>
                            <img className="icons" src={youtube}></img>
                            <img className="icons" src={indeed}></img>
                            <img className="icons" src={instagram}></img>
                        </div>
                        <div className="col-lg-6">
                            <ul className="footer-list2">
                            <li>English</li>
                            <li>San Francisco Bay Area</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <p className="foot-end">@2022 Uber Technologies Inc</p>
                        </div>
                        <div className="col-lg-5"></div>
                        <div className="foot-last col-lg-3">
                        <ul >
                            <li>Privacy</li>
                            <li>Accessibility</li>
                            <li>Terms</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Footer