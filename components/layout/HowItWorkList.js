import React from "react";
import Link from "next/link";
import HowItWork1 from "../../assets/HowItWork1.png";
import HowItWork2 from "../../assets/HowItWork2.png";
import HowItWork3 from "../../assets/HowItWork3.png";
import One from "../../assets/1.png";
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";

function HowItWorkList() {
  return (
    <section className="how-it-work">
      <div className="sub-section">
        <div className="container">
          <div className="card mb-3 w-100">
            <div
              className="row g-0"
              style={{ background: `url(${One.src})center center no-repeat` }}
            >
              <div className="col-md-6">
                <img src={HowItWork1.src} className="img-fluid" alt="" />
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="card-body mt-5">
                  <h5 className="card-title">PICTURES CAN BE UPLOADED</h5>
                  <p className="card-text">
                    Simply upload photos of the items you want us to
                    authenticate, and you'll have the results in 12 to 24 hours.
                    If you need a speedy response, we can provide a 2-hour
                    authentication service!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-section middle-section hidden-overflow">
        <div className="container">
          <div className="card mb-3 w-100">
            <div
              className="row g-0 flex-column-reverse flex-sm-row"
              style={{ background: `url(${Two.src})left center no-repeat` }}
            >
              <div className="col-md-8 d-flex justify-content-center align-items-center">
                <div className="card-body mt-5">
                  <h5 className="card-title">THE ITEMS HAS BEEN VERIFIED</h5>
                  <p className="card-text">
                    Our staff of designer brand specialists can 100% guarantee
                    the authenticity of your high-end items. We can assist you
                    with authenticating your items so that you don't have to
                    worry about it!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img src={HowItWork2.src} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-section">
        <div className="container">
          <div className="card mb-3 w-100">
            <div
              className="row g-0"
              style={{ background: `url(${Three.src})center center no-repeat` }}
            >
              <div className="col-md-6">
                <img src={HowItWork3.src} className="img-fluid" alt="" />
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="card-body mt-5">
                  <h5 className="card-title">A CERTIFICATE HAS BEEN ISSUED</h5>
                  <p className="card-text">
                    We provide luxury items authenticity certifications in a
                    variety of formats, including PDF certificates, paper
                    copies, and certification cards. You have the option to
                    upgrade your order and obtain additional services from us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorkList;
