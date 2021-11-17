import React from "react";
import Image from "next/image";
import Logo from "../../assets/credit.png";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faLine,
} from "@fortawesome/free-brands-svg-icons";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://superauthenticate.us5.list-manage.com/subscribe/post?u=0f4577c2aa0b6ece95783ad71&amp;id=5e2bccd637";

const SimpleForm = () => <MailchimpSubscribe url={url} />;

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <>
      {/* empty status == did not do anything yet */}
      {!!!status && (
        <>
          <input
            ref={(node) => (email = node)}
            type="email"
            placeholder="Your email"
          />
          <button className="btn btn-primary" onClick={submit}>
            SEND
          </button>
        </>
      )}
      {/* has status == user did something with form */}
      {status === "sending" && (
        <div className="alert alert-primary m-0">Sending...</div>
      )}
      {status === "error" && (
        <div
          className="alert alert-danger m-0"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="alert alert-success m-0"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </>
  );
};

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-3 d-none d-sm-block">
            <p>SUBSCRIBE OUR NEWSLETTER</p>
          </div>
          <div className="col-12 col-sm-6 col-md-7 mt-3 mt-sm-0">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <div className="subscribe-form">
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                </div>
              )}
            />
          </div>
          <div className="col-12 col-sm-3 col-md-2 mb-3 mb-sm-0">
            <ul className="nav justify-content-center justify-content-sm-end socials">
              <li className="nav-item">
                <Link
                  href="https://www.facebook.com/sfshopbrandname/"
                  passHref={true}
                >
                  <a target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="https://www.twitter.com/" passHref={true}>
                  <a target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="https://www.instagram.com/sfbrandname/"
                  passHref={true}
                >
                  <a target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="https://www.pinterest.com/" passHref={true}>
                  <a target="_blank">
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="https://lin.ee/3NiYmtw" passHref={true}>
                  <a target="_blank">
                    <FontAwesomeIcon icon={faLine} />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
