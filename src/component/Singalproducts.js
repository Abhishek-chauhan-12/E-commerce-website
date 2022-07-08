import singal1 from "../component/images/single-product-01.jpg"
import singal2 from "../component/images/single-product-02.jpg"
import ReactStars from 'react-stars'
import { useState } from "react"

import Home from "./Home"
import singal from "../component/images/products-page-heading.jpg"
const Singalproducts = () => {

const [data,setdata]=useState(1)

    return (
        <>
        <div className="commen my-5">
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-top">
                                <div className="about-img">
                                    <img src={singal} alt="" />
                                </div>
                                <div className="about-hedding">
                                    <h1>Contact Us</h1>
                                    <h6>Awesome, clean{'&'}  creative HTML5 Template</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-12">
                        <div className="singal-left g-5">
                            <div className="sinal-img mb-4">
                                <img className="img-fluid" src={singal1} alt="...." />
                            </div>
                            <div className="sinal-img">
                                <img className="img-fluid" src={singal2} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="singal-right">
                            <div className="singal-right3 d-flex justify-content-between mb-4">
                                <div className="singal-right2">
                                    <h1>New Green Jacket</h1>
                                    <p className="fw-bold">$75.00</p>
                                </div>
                                <span className='fw-bold men'><ReactStars
                                    count={5}
                                    size={20}
                                    color2={'red'} /></span>
                            </div>
                            <hr />
                            <p className="singal-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</p>
                            <h6><i class="fa fa-quote-left fa-3x fa-pull-left "></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</h6>
                                <hr />
                            <div className="singal-right3 d-flex justify-content-between mt-5 mb-5">
                                <h2>No. of Orders
                                </h2>
                                <div className="singal-btn d-flex justify-content-between align-items-center">
                                    <button className="btn1" onClick={()=>setdata(data-1)}>-</button>
                                    <button className="btn2">{data}</button>
                                    <button className="btn1" onClick={()=>setdata(data+1)}>+</button>
                                </div>
                            </div>
                            <hr />
                            <div className="singal-right4 d-flex justify-content-between mt-5 mb-5">
                                <h3>Total:$210.00
                                </h3>
                                <button className="add-btn" onClick={<Home/>}>Add to card</button>
                            </div>
<hr />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Singalproducts;