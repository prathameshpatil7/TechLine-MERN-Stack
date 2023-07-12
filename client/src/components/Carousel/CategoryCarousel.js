import React from "react";
import "../../styles/CategoryCarousel.scss";
import Twe from "../../assets/images/category/twe.svg";
import Bluetooth_Speakers from "../../assets/images/category/Bluetooth_Speakers.svg";
import Gaming_Headphones from "../../assets/images/category/Gaming_Headphones.svg";
import Limited_Edition from "../../assets/images/category/Limited_Edition.svg";
import Neckbands from "../../assets/images/category/Neckbands.svg";
import Over_Ear_Headphones from "../../assets/images/category/Over_Ear_Headphones.svg";
import Party_Speakers from "../../assets/images/category/Party_Speakers.svg";
import Smart_Watches from "../../assets/images/category/Smart_Watches.svg";
import Wired_Earphones from "../../assets/images/category/Wired_Earphones.svg";
import Wired_Headphone from "../../assets/images/category/Wired_Headphone.svg";
import Wireless_Speakers from "../../assets/images/category/Wireless_Speakers.svg";
import { Link } from "react-router-dom";
const CategoryCarousel = () => {
  return (
    <div className=" category-carousel mb-3">
      <div className="category-carousel-container">
        {/* start */}
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Twe} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">TWE</div>
          </div>
        </div>
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Bluetooth_Speakers} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">
              Bluetooth Speakers
            </div>
          </div>
        </div>
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Gaming_Headphones} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">
              Gaming Headphones
            </div>
          </div>
        </div>
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Limited_Edition} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">
              Limited Edition
            </div>
          </div>
        </div>
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Neckbands} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">
              Neckbands
            </div>
          </div>
        </div>
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Over_Ear_Headphones} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">
              Over Ear Headphones
            </div>
          </div>
        </div>
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Party_Speakers} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">
              Party Speakers
            </div>
          </div>
        </div>
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Smart_Watches} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">
              Smart Watches
            </div>
          </div>
        </div>
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Wired_Earphones} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">
              Wired Earphones
            </div>
          </div>
        </div>
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Wired_Headphone} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">
              Wired Headphone
            </div>
          </div>
        </div>
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Wireless_Speakers} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">
              Wireless Speakers
            </div>
          </div>
        </div>
        <div className="category-carousel-item ">
          <div className="column">
            <div className="img-container">
              <Link to="/">
                <img src={Twe} alt="" />
              </Link>
            </div>
            <div className="mt-3 text-center category-name fw-bold">TWE</div>
          </div>
        </div>

        {/* end */}
      </div>
    </div>
  );
};

export default CategoryCarousel;
