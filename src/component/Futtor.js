import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi"
import { TiSocialLinkedin } from "react-icons/ti"
import { GrInstagram } from "react-icons/gr"
import futtorImg from "../component/images/white-logo.png"

import React from "react";
const Futtor=()=>{

    return(
        <>
        <div className="footer">
        <div className="container mt-5">

            <div className="row ">
                <div className=" col-lg-3 col-md-6 col-12">
                    <div className="futtor-logo">
                        <img src={futtorImg} alt="" />
                        <p>1650 Collins Ave, Saharanpur(up)</p>
                        <p>Shainkechauhan@gmail.com</p>
                        <p>010-020-0340</p>
                    </div>
                </div>
                <div className=" col-lg-3 col-md-6 col-12">
                    <div className="futtor-logo">
                        <h5>Shooping {'&'} Categories</h5>
                        <p>Men's Shopping</p>
                        <p>Women's Shopping</p>
                        <p>Kid's Shopping</p>
                    </div>
                </div>
                <div className=" col-lg-3 col-md-6 col-12">
                    <div className="futtor-logo">
                        <h5>Useful Link</h5>
                        <p>Homepage</p>
                        <p>About Us</p>
                        <p>Help</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className=" col-lg-3 col-md-6 col-12">
                    <div className="futtor-logo">
                    <h5>Help {'&'} Information </h5>
                    <p>Help</p>
                    <p>FAQ's</p>
                    <p>Shipping</p>
                    <p>Traking ID</p>
                    </div>
                </div>
                <div className="footers"></div>
                <div className="col-12">
                    <div className="coppy-right text-center">
                        <h6 className="my-3">Coppyright@ 2022 HexaShop Co.Ltd.All Rights Reserves.</h6>
                        <h5>Design:<span className="span">Chauhan ji</span> </h5>
                        <div className="futtor-icon">
                        <i><FaFacebookF /></i>
                                    <i><FiTwitter /></i>
                                    <i><TiSocialLinkedin /></i>
                                    <i><GrInstagram /></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Futtor
