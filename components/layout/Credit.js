import React from 'react';
import Image from 'next/image'
import Logo from '../../assets/credit.png';
import Link from 'next/link';
function Credit() {
    return (
        <section className="credit-section">
            <div className="container">
                <div className="row">
                    <div className="col-3"><p>Copyright ©{new Date().getFullYear()} all rights reserved</p></div>
                    <div className="col-6"><Image src={Logo} alt="Credits" /></div>
                    <div className="col-3"><p className="text-end">Designed by <Link href="https://www.facebook.com/peore.im2/" passHref={true}><a target="_blank">IMGEN</a></Link></p></div>
                </div>

            </div>
        </section>
    )
}

export default Credit
