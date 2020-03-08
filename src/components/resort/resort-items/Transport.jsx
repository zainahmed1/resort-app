import React from "react";
import "./Transport.css";
import Swiper from "react-id-swiper";


function Services() {
  let swiper = {
    container: ".container",
    pagination: ".swiper-pagination",
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 200,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: true
    }
  };

  return (
    <div className="transport">
    <div>

       <div className="swiper-container">
      <div className="swiper-wrapper">
      <Swiper {...swiper}>

        <div className="swiper-slide">
          <div className="imgBx">
            <img
              src="https://lh3.googleusercontent.com/J4gd_UemUHVUJv_RdjnjUvVj2Wm5J0dgEi_d0aVIThid6VXnTuBTl7-dMBWe5mmImuI"
              alt=""
            />
          </div>
          <div className="details">
            <h1>
              <a href="https://www.careem.com/en-ae/" style = {{textDecoration: 'none', color: 'green'}}>CAREEM</a>              
            </h1>
          </div>
        </div>

        
                <div className="swiper-slide">
                  <div className="imgBx">
                    <img
                      src="https://images.glaciermedia.ca/polopoly_fs/1.23373998.1532040511!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/uber-logo-ride-sharing.jpg"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <h1>
                      <a href="https://www.uber.com/pk/ur/"  style = {{textDecoration: 'none', color: 'white'}}>UBER</a>
                    </h1>
                  </div>
                </div>

        <div className="swiper-slide">
          <div className="imgBx">
            <img
              src="https://yt3.ggpht.com/a/AGF-l79ZTAg51L5Au5LefmEOmJwIB0Q2B0mYaQ2xOw=s900-c-k-c0xffffffff-no-rj-mo"
              alt=""
            />
          </div>
          <div className="details">
            <h1>
              <a href="https://www.bykea.com/" style = {{textDecoration: 'none', color: 'green'}}>BYKEA</a>
            </h1>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="imgBx">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.7DhLGTWDfruWzlgFUlY5wwAAAA&pid=Api&P=0&w=220&h=138"
              alt=""
            />
          </div>
          <div className="details">
            <h1>
              <a href="http://metro-cab.com/" style = {{textDecoration: 'none', color: 'white'}}>METRO CAB</a>
            </h1>
          </div>
        </div>
</Swiper>
        </div>

    </div>
    </div>
    </div>
  );
}

export default Services;
