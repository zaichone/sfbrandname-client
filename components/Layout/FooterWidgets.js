import React from 'react';
import Link from 'next/link';

function FooterWidgets() {
    return (
        <aside className="footer-widgets">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-3 widget">
                        <h3>Categories</h3>
                        <ul className="list-group">
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>                            
                        </ul>
                    </div>
                    <div className="col-12 col-sm-3 widget">
                        <h3>Infomation</h3>
                        <ul className="list-group">
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>                            
                        </ul>
                    </div>
                    <div className="col-12 col-sm-3 widget">
                        <h3>Useful links</h3>
                        <ul className="list-group">
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>                            
                        </ul>
                    </div>
                    <div className="col-12 col-sm-3 widget">
                        <h3>CONTACT US</h3>
                        <ul className="list-group">
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>
                            <li className="list-group-item"><Link href="#">An item</Link></li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default FooterWidgets
