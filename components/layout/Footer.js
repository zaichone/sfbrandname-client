import React from 'react';
import Credit from './Credit';
import Subscribe from './Subscribe';
import FooterWidgets from './FooterWidgets';
function Footer() {
    return (
        <>
            <Subscribe />
            <FooterWidgets/>
            <footer>
                <Credit />
            </footer>
        </>
    )
}

export default Footer
