
import explore1 from '../component/images/explore-image-01.jpg';
import explore2 from '../component/images/explore-image-02.jpg';


const Explore = () => {

    return (
        <>
            <div className="commen my-4">
                <div className="container explore-container">
                    <div className="row my-4">
                        <div className="col-lg-6 col-12 my-5  " >
                            <div className="explore-left d-flex justify-content-evenly flex-column mx-lg-0 mx-auto">
                                <h1>Explore Our Products</h1>
                                <p>You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</p>
                                <h6><i class="fa fa-quote-left fa-3x fa-pull-left "></i>You are not allowed to redistribute this template ZIP file on any other website.</h6>
                                <p>There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.</p>
                                <p>If this template is beneficial for your website or business, please kindly <span> support us </span> a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
                                <button className='buttons'>
                                    Discover More</button>
                            </div>

                        </div>
                        <div className=" col-lg-6 col-12 my-5   ">
                            <div className="row explore-right">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="explorescard">
                                        <div className="Explore-hedding">
                                            <h2 className='fw-bold'>Leather Bags</h2>
                                            <h6>Latest Collection</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 ">
                                    <div className="explorescards ">
                                        <div className="Explore-img">
                                            <img src={explore1} alt=""  className='img-fluid'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 gy-4">
                                    <div className="explorescards">
                                        <div className="Explore-img">
                                            <img src={explore2} alt="" className='img-fluid'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 gy-4">
                                    <div className="explorescard  ">
                                        <div className="Explore-hedding">
                                            <h2 className='fw-bold'>Different Types</h2>
                                            <h6>Over 304 Products</h6>
                                        </div>
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
export default Explore;