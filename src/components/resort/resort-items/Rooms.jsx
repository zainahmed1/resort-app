import React from "react";
import "./Rooms.css";
// import $ from "jquery";
import Swiper from "react-id-swiper";

function Services() {
  let swiper = {
    container: ".container",
    pagination: ".swiper-pagination",
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: true
    }
  };

  return (
    <div className="rooms">
  <div className="swiper-container">
      <div className="swiper-wrapper">
<Swiper {...swiper}>


        <div className="swiper-slide">
          <div className="imgBx">
            <img
              src="https://i.pinimg.com/564x/fe/5d/c1/fe5dc1bc8075b9e8ab399d2ff91398f6.jpg"
              alt=""
            />
          </div>
          <div className="details">
            <h3>
              luxury room
            </h3>
          </div>
        </div>

          <div className="swiper-slide">
            <div className="imgBx">
              <img
                src="https://i.pinimg.com/564x/c5/fb/99/c5fb99b6c2148e6423e841d88bbbcb67.jpg"
                alt=""
              />
            </div>
            <div className="details">
              <h3>
                luxury room
              </h3>
          </div>
          </div>

        <div className="swiper-slide">
          <div className="imgBx">
            <img
              src="https://i.pinimg.com/564x/c8/39/ca/c839ca1a8b261dda343897a01dcdc3d4.jpg"
              alt=""
            />
          </div>
          <div className="details">
            <h3>
              Classic room
            </h3>
          </div>
        </div>

          <div className="swiper-slide">
            <div className="imgBx">
              <img
                src="https://i.pinimg.com/564x/33/0f/b7/330fb7d080b580c65974adea7142f1dc.jpg"
                alt=""
              />
            </div>
            <div className="details">
              <h3>
                Cottis Apartment
              </h3>
          </div>
          </div>

          <div className="swiper-slide">
            <div className="imgBx">
              <img
                src="https://i.pinimg.com/564x/a0/f2/7b/a0f27b824c9001c17dfa2ca58085a1c0.jpg"
                alt=""
              />
            </div>
            <div className="details">
              <h3>
                Cottis Apartment
              </h3>
          </div>
          </div>

          <div className="swiper-slide">
            <div className="imgBx">
              <img
                src="https://i.pinimg.com/564x/5a/d8/01/5ad8018a59bc1f2297dc1cdb136d1f8b.jpg"
                alt=""
              />
            </div>
            <div className="details">
              <h3>
                Cottis Apartment
              </h3>
          </div>
          </div>

          <div className="swiper-slide">
            <div className="imgBx">
              <img
                src=" https://i.pinimg.com/564x/d5/33/89/d533894998e10efa52d9e62a63ac2cab.jpg"
                alt=""
              />
            </div>
            <div className="details">
              <h3>
                Cottis Apartment
              </h3>
          </div>
          </div>

         

          

        </Swiper>

          </div>
          </div>
    </div>
  );
}

export default Services;
