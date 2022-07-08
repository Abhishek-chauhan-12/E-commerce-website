import services1 from '../component/images/service-01.jpg'
import services2 from '../component/images/service-02.jpg'
import services3 from '../component/images/service-03.jpg'
import tems from '../component/images/team-member-01.jpg'
import tems1 from '../component/images/team-member-02.jpg'
import tems2 from '../component/images/team-member-03.jpg'

import aboutimg from '../component/images/about-us-page-heading.jpg'
import aboutleftimg from '../component/images/about-left-image.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi"
import { TiSocialLinkedin } from "react-icons/ti"
import { GrInstagram } from "react-icons/gr"
import Commen1 from './Commen1'
const About = () => {
    return (

        <>
            <div className="commen my-5">
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-top">
                                <div className="about-img">
                                    <img src={aboutimg} alt="" />
                                </div>
                                <div className="about-hedding">
                                    <h1>About Our Company</h1>
                                    <h6>Awesome, clean {'&'}creative HTML5 Template</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6 col-12 ">
                        <div className="about-left mx-auto">
                            <img src={aboutleftimg} alt=""  className='w-100'/>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-12">

                        <div className="about-right d-flex justify-content-around flex-column">
                            <h2 >About Us {'&'} Our Skills</h2>
                            <p className='py-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.</p>
                            <h6 className='py-1'><i class="fa fa-quote-left fa-3x fa-pull-left "></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</h6>
                            <p className='py-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            <div className="commen my-4">

                                <div className="icons py-3">

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
            <div className="commen my-5">
                <div className="container  abouts my-5">
                    <div className="row">
                        <div className="col-12 py-5">
                            <div className="hedding my-4 text-center">
                                <h1 className='Mens'>Our Amazing Team</h1>
                                <p className='Mens1'>Details to details is what makes Hexashop different from the other themes.</p>
                            </div>
                        </div>
                        <div className="col-12 mb-5">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-10">
                                    <div className="services-top-card mx-auto">
                                        <div className="services-top-cards">
                                            <div className="services-top-img ">
                                                <img src={tems1} alt="" />
                                            </div>
                                            <div className="Amazing">
                                                <div className="Amazing1">
                                                    <i><FaFacebookF /></i>
                                                    <i><FiTwitter /></i>
                                                    <i><TiSocialLinkedin /></i>
                                                    <i><GrInstagram /></i>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className='my-3 fw-bold'>Ragnar Lodbrok</h2>
                                        <p className='Mens1'>Product Caretaker</p>
                                    </div>
                                </div>
                                 <div className=" col-lg-4 col-md-6 col-12">
                                    <div className="services-top-card mx-auto">
                                        <div className="services-top-cards">
                                            <div className="services-top-img">
                                                <img src={tems2} alt="" />
                                            </div>
                                            <div className="Amazing">
                                                <div className="Amazing1">
                                                    <i><FaFacebookF /></i>
                                                    <i><FiTwitter /></i>
                                                    <i><TiSocialLinkedin /></i>
                                                    <i><GrInstagram /></i>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className='my-3 fw-bold'>Ragnar Lodbrok</h2>
                                        <p className='Mens1'>Product Caretaker</p>
                                    </div>
                                </div>
                                <div className=" col-lg-4 col-md-6 col-12">
                                    <div className="services-top-card mx-auto">
                                        <div className="services-top-cards">
                                            <div className="services-top-img">
                                                <img src={tems} alt="" />
                                            </div>
                                            <div className="Amazing">
                                                <div className="Amazing1">
                                                    <i><FaFacebookF /></i>
                                                    <i><FiTwitter /></i>
                                                    <i><TiSocialLinkedin /></i>
                                                    <i><GrInstagram /></i>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className='my-3 fw-bold'>Ragnar Lodbrok</h2>
                                        <p className='Mens1'>Product Caretaker</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="commen my-5">
                <div className="container my-5 abouts">
                    <div className="row">
                        <div className="col-12 py-5">
                            <div className="hedding my-4 text-center">
                                <h1 className='Mens'>Our Services</h1>
                                <p className='Mens1'>Details to details is what makes Hexashop different from the other themes.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className=" col-lg-4 col-md-6 col-12">
                                    <div className="Services-card mx-auto">
                                        <div className="services-card1 text-center">
                                            <h2 className='py-3'>Synther Vaporware</h2>
                                            <h5 className='pb-4'>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</h5>
                                            <img src={services1} alt=".." />
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-4 col-md-6 col-12">
                                    <div className="Services-card mx-auto">
                                        <div className="services-card1 text-center">
                                            <h2 className='py-3'>Synther Vaporware</h2>
                                            <h5 className='pb-4'>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</h5>
                                            <img src={services2} alt=".." />
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-4 col-md-6 col-12 text-center">
                                    <div className="Services-card">
                                        <div className="services-card1 text-center">
                                            <h2 className='py-3'>Synther Vaporware</h2>
                                            <h5 className='pb-4'>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</h5>
                                            <img src={services3} alt=".." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                </div>

<Commen1/>
        </>
    )


}
export default About;