import React from "react";
import rightimg1 from '../component/images/baner-right-image-01.jpg'
import rightimg2 from '../component/images/baner-right-image-02.jpg'
import rightimg3 from '../component/images/baner-right-image-03.jpg'
import rightimg4 from '../component/images/baner-right-image-04.jpg'
import leftimg1 from '../component/images/left-banner-image.jpg'


const Home = () => {

    return (
        <>
            <div className="container-fluid homes">
                <div className="row ">
                    <div className="col-lg-6 col-12 g-4" >
                        <div className="leftimg">
                            <div className="img">
                                <img src={leftimg1} alt=""  className="img-fluid"/>
                            </div>
                            <div className="lefthedding">
                                <h1>We Are Hexashop</h1>
                                <h4>Awesome, clean{'&'}  creative HTML5 Template
                                </h4>
                                <button>Purchase Now!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12  gy-4 ">
                        <div className="row g-4">
                            <div className="col-lg-6 col-12  ">
                                <div className="rightcard">
                                    <div className="Righttimg">
                                        <img src={rightimg1} alt="" className="img-fluid"  />
                                    </div>
                                    <div className="Righthedding">
                                        <h2>Women</h2>
                                        <h3>Best Clothes for Women</h3>
                                        </div>
                                    <div className="Rightttext d-flex flex-column justify-content-center align-items-center">
                                        <h2 className="text-center ">Women</h2>
                                        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ipsam.</p>
                                        <button >Dicecover more</button>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                <div className="rightcard">
                                    <div className="Righttimg">
                                        <img src={rightimg2} alt="" />
                                    </div>
                                    <div className="Righthedding">
                                        <h2>Men</h2>
                                        <h3>Best Clothes for Men</h3>
                                        </div>
                                    <div className="Rightttext d-flex flex-column justify-content-center align-items-center">
                                        <h2 className="text-center">Women</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ipsam.</p>
                                        <button>Dicecover more</button>
                                    </div>
                                </div>
                                </div><div className="col-lg-6 col-12">
                                <div className="rightcard">
                                    <div className="Righttimg">
                                        <img src={rightimg3} alt="" />
                                    </div>
                                    <div className="Righthedding">
                                        <h2>Kids</h2>
                                        <h3>Best Clothes for Kids</h3>
                                        </div>
                                    <div className="Rightttext d-flex flex-column justify-content-center align-items-center">
                                        <h2 className="text-center">Women</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ipsam.</p>
                                        <button>Dicecover more</button>
                                    </div>
                                </div>
                                </div><div className="col-lg-6 col-12">
                                <div className="rightcard">
                                    <div className="Righttimg">
                                        <img src={rightimg4} alt="" />
                                    </div>
                                    <div className="Righthedding">
                                        <h2 className="text-center">Accessories</h2>
                                        <h3>Best Clothes for Accessories</h3>
                                        </div>
                                    <div className="Rightttext d-flex flex-column justify-content-center align-items-center">
                                        <h2 className="text-center">Women</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ipsam.</p>
                                        <button>Dicecover more</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

        </>

    )
}
export default Home;