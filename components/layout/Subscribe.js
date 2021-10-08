import React from 'react';
import Image from 'next/image'
import Logo from '../../assets/credit.png';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest, faLine } from '@fortawesome/free-brands-svg-icons';

function Subscribe() {
    return (
        <section className="subscribe">
            <div className="container">
                <div className="row  align-items-center">
                    <div className="col-12 col-sm-3 d-none d-sm-block"><p>BE IN TOUCH WITH US:</p></div>
                    <div className="col-12 col-sm-6 col-md-7 mt-3 mt-sm-0">
                        <form className="row subscribe-form mb-3 mb-sm-0">


                            <div className="col-12 col-sm-8 mb-4 mb-sm-0">

                                <input type="email" className="form-control" name="subscribeEmail" placeholder="Enter your email" />
                            </div>
                            <div className="col-12 col-sm-4 text-center mb-3 mb-sm-0">
                                <button type="submit" className="btn btn-primary">Join Us</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-sm-3 col-md-2 mb-3 mb-sm-0">
                        <ul className="nav justify-content-center justify-content-sm-end socials">
                            <li className="nav-item">
                                <Link href="https://www.facebook.com/sfshopbrandname/" passHref={true}><a target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="https://www.twitter.com/" passHref={true}><a target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="https://www.instagram.com/sfbrandname/" passHref={true}><a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="https://www.pinterest.com/" passHref={true}><a target="_blank"><FontAwesomeIcon icon={faPinterest} /></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="https://lin.ee/3NiYmtw" passHref={true}><a target="_blank"><FontAwesomeIcon icon={faLine} /></a></Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Subscribe
