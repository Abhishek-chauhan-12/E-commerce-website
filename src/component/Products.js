import Products1 from "./Products1"
import React from "react"
import Productscards from "./Productscards";
import product from "../component/images/products-page-heading.jpg"



const Product=()=>{

    return(
        <>
        <div className="commen my-5">
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-top">
                                <div className="about-img">
                                    <img src={product} alt="" />
                                </div>
                                <div className="about-hedding">
                                    <h1>Check Our Products</h1>
                                    <h6>Awesome{'&'} Creative HTML CSS layout by TemplateMo</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      <div className="container  bg-ligh text-center">
        <div className="row commen1">
          <div className="col-12 my-5 float-start">
            <h1 className="fw-bold Mens">Our Latest Products</h1>
            <p className="fw-light Mens1">Check out all of our products.</p>
          </div>
      <div className="col-12">
        <div className="row commen1 text-center">
{/* <div className="col-lg-4 col-md-4 col-12">  */}

            {
              Products1.map((cur) => {
                return (<>
                  <Productscards imgrc={cur.imags} titles={cur.title} prices={cur.price} />
                </>)
              })

            }
          </div>
          </div>
</div>
        </div>
{/* </div> */}

        
        
        </>
    )
}
export default Product