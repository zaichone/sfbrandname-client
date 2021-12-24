import React from 'react';
import Credit from './Credit';
import Subscribe from './Subscribe';
import FooterWidgets from './FooterWidgets';
function Footer() {
    return (
        <>
            <Subscribe />
            <FooterWidgets/>
            <footer className="d-none d-sm-block">
                <Credit />
            </footer>
        </>
    )
}

export default Footer
