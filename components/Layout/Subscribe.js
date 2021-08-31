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
                    <div className="col-3"><p>BE IN TOUCH WITH US:</p></div>
                    <div className="col-6">
                        <form className="row subscribe-form">


                            <div className="col-9">

                                <input type="email" className="form-control" name="subscribeEmail" placeholder="Enter your email" />
                            </div>
                            <div className="col-3">
                                <button type="submit" className="btn btn-primary w-100">Join Us</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-3">
                        <ul className="nav justify-content-end socials">
  <li className="nav-item">
  <Link href="https://www.facebook.com/sfshopbrandname/" passHref={true}><a target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></Link>
  </li>
  <li className="nav-item">
  <Link href="https://www.twitter.com/" passHref={true}><a target="_blank"><FontAwesomeIcon icon={faTwitter}/></a></Link>
  </li>
  <li className="nav-item">
  <Link href="https://www.instagram.com/sfbrandname/" passHref={true}><a target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></Link>
  </li>
  <li className="nav-item">
  <Link href="https://www.pinterest.com/" passHref={true}><a target="_blank"><FontAwesomeIcon icon={faPinterest}/></a></Link>
  </li>
  <li className="nav-item">
  <Link href="https://lin.ee/3NiYmtw" passHref={true}><a target="_blank"><FontAwesomeIcon icon={faLine}/></a></Link>
  </li>
</ul></div>
                </div>

            </div>
        </section>
    )
}

export default Subscribe
