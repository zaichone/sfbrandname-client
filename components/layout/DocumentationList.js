import React from 'react';
import Link from 'next/link';
import image1 from '../../assets/documentation/image1.png';
import image2 from '../../assets/documentation/image2.png';
import image3 from '../../assets/documentation/image3.png';
import One from '../../assets/1.png';
import Two from '../../assets/2.png';
import Three from '../../assets/3.png';


function DocumentationList() {
    return (
        <section className="how-it-work">


            <div className="sub-section">
                <div className="container">

                    <div className="card mb-3 w-100">
                        <div className="row g-0" style={{ background: `url(${One.src})center center no-repeat` }}>
                            <div className="col-md-6">
                                <img src={image1.src} className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title">OPEN YOUR CAMERA</h5>
                                    <p className="card-text w-50">
                                    Just upload pictures of the product you want us to verify and receive authentication results within 12 to 24 hours. If you want a quick result, we offer 2-hr authentication service too!
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
                        <div className="row g-0" style={{ background: `url(${Two.src})left center no-repeat` }}>
                            <div className="col-md-8 d-flex justify-content-center align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title">SCAN QR CODE</h5>
                                    <p className="card-text w-50">
                                    Our team of designer brand experts can verify your luxury goods with 100% certainty. We can help you authenticate your goods so that you don???t worry about it anymore!
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
                        <div className="row g-0" style={{ background: `url(${Three.src})center center no-repeat` }}>
                            <div className="col-md-6">
                                <img src={image3.src} className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title">GET DOCUMENTATION</h5>
                                    <p className="card-text w-50">
                                    We offer luxury product authentication certificates in all forms - PDF certificate, hard-copy certificate, and certification card. You can choose to upgrade your order to receive exclusive services from us as well!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default DocumentationList
