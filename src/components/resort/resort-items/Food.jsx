import React from "react";
import "./Food.css";
import Swiper from "react-id-swiper";
// import 'react-id-swiper/lib/styles/css/swiper.css'
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
      rotate: 200,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: true
    }
  };

  return (
    <div className="food">
      <div className="fire">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <Swiper {...swiper}>
            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/csntixt9aubrbfma9vmg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Matka Biryani <br />
                  <span>Pakistani Food</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="http://s3-ap-southeast-1.amazonaws.com/gounesco.com/wp-content/uploads/2014/05/26084032/chaler-payesh-bengali.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Rabri <br />
                  <span>Pakistani Desert</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://www.jocooks.com/wp-content/uploads/2017/09/instant-pot-butter-chicken-1-2.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Butter Chicken
                  <br />
                  <span>Indian Food</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://5.imimg.com/data5/IR/AV/MY-53538920/kaju-katali-500x500.png"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Kaju Katli
                  <br />
                  <span>Indian Desert</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://i.pinimg.com/564x/df/6c/96/df6c96570ef05d8e4db2a749bf4da2e1.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Shish Kebab <br />
                  <span>Turkish Food</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://www.tasteofhome.com/wp-content/uploads/2018/03/exps8708_C2640C49B_RMS.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Butter Ice-Cream
                  <br />
                  <span>Turkish Desert</span>
                </h3>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://i0.wp.com/www.lasrecetasdelchef.com/wp-content/uploads/2017/07/tuco.jpg?fit=820%2C1024&ssl=1"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Bolognese <br />
                  <span>Italian Food</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://i.pinimg.com/originals/05/cd/f3/05cdf3bb1b00a842679a8b59df0d53ee.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Tiramisu
                  <br />
                  <span>Italian Desert</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://rasamalaysia.com/wp-content/uploads/2019/03/kung-pao-chicken-thumb.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Kung Pao <br />
                  <span>Chinese Food</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://kirbiecravings.com/wp-content/uploads/2014/08/snow-skin-mooncake-13a.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Moon Cake <br />
                  <span>Chinese Desert</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="http://images.jdmagicbox.com/comp/def_content/shawarma_centres/default-shawarma-centres-5.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Shawarma <br />
                  <span>Arabic Food</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://cleobuttera.com/wp-content/uploads/2018/02/mehallab-closeup.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Rose Mehalabya <br />
                  <span>Arabic Desert</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://www.simplyrecipes.com/wp-content/uploads/2007/05/carne-asada-vertical-a-1400.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Carne Asada <br />
                  <span>Mexican Food</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://photo2.foodgawker.com/wp-content/uploads/2014/04/1756180.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Brownies <br />
                  <span>Mexican Desert</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://www.medgadget.com/wp-content/uploads/2018/12/dahi-puri.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Fuchka <br />
                  <span>Bangladeshi Food</span>
                </h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="imgBx">
                <img
                  src="https://www.vegrecipesofindia.com/wp-content/uploads/2018/02/mishti-doi-recipe.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <h3>
                  Mishti Doi <br />
                  <span>Bangladeshi Desert</span>
                </h3>
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
