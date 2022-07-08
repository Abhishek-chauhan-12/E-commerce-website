
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Women1 from "../component/Women1"
import CommenCards from "./CommenCards";
const Women = () => {

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className="commen">

      <div className="container  bg-ligh text-center">
        <div className="row commen1">
          <div className="col-12 my-5 float-start">
            <h1 className="fw-bold Mens">Women's Latest</h1>
            <p className="fw-light Mens1">Details to details is what makes Hexashop different from the other themes.</p>
          </div>
      <div className="col-12">
        <div className="row commen1 text-center">
          <Slider {...settings}>
            {
              Women1.map((cur) => {
                return (<>
                  <CommenCards imgrc={cur.imags} titles={cur.title} prices={cur.price} />
                </>)
              })

            }
          </Slider>
          </div>
</div>
        </div>
      </div>
</div>

    </>
  );
}
export default Women;