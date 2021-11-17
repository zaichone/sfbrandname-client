import React from "react";
import Link from "next/link";
import image1 from "../../assets/documentation/image1.png";
import image2 from "../../assets/documentation/image2.png";
import image3 from "../../assets/documentation/image3.png";
import One from "../../assets/1.png";
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";

function DocumentationList() {
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
                <img src={image1.src} className="img-fluid" alt="" />
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="card-body">
                  <h5 className="card-title">TURN ON YOUR CAMERA</h5>
                  <p className="card-text w-50">
                    Simply upload photos of the items you want us to
                    authenticate, and you'll have the findings in 12 to 24
                    hours. If you need a speedy response, we can provide a
                    2-hour authentication service!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-section middle-section">
        <div className="container">
          <div className="card mb-3 w-100">
            <div
              className="row g-0"
              style={{ background: `url(${Two.src})left center no-repeat` }}
            >
              <div className="col-md-8 d-flex justify-content-center align-items-center">
                <div className="card-body">
                  <h5 className="card-title">SCANNING QR CODE</h5>
                  <p className="card-text w-50">
                    Our staff of designer brand specialists can 100% guarantee
                    the authenticity of your high-end stuff. We can assist you
                    with authenticating your stuff so that you don't have to
                    worry about it!
                  </p>
                </div>
              </div>
              <div className="col-md-4 hidden-overflow">
                <img src={image2.src} className="img-fluid" alt="" />
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
                <img src={image3.src} className="img-fluid" alt="" />
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="card-body">
                  <h5 className="card-title">APPLY FOR DOCUMENTATION</h5>
                  <p className="card-text">
                    We provide luxury items authentication certifications in a
                    variety of formats, including PDF certificates, paper
                    copies, and certification cards.
                  </p>
                  <p className="card-text">
                    You have the option to upgrade your order and obtain
                    additional services from us!
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

export default DocumentationList;
