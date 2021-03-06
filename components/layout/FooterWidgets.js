import React from 'react';
import Link from 'next/link';
import menus from './footerMenus.json';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';

function FooterWidgets() {
    return (
        <aside className="footer-widgets d-none d-sm-block">
            <div className="container">
                <div className="row">
                {menus.map((widget, index) => 
                    <div className="col-12 col-sm-3 widget" key={index}>
                    <h3>{widget.title}</h3>
                    <ul className="list-group">
                        {widget.menus?.map((menu, ind) => 
                            <li className="list-group-item" key={ind}><Link href={menu.link}>{menu.label}</Link></li>
                        )}
                                                  
                    </ul>
                </div>
                )}
                    
                    
                    <div className="col-12 col-sm-3 widget">
                        <h3>CONTACT US</h3>
                        <ul className="list-group">
                            <li className="list-group-item"><RoomIcon/>Chiang Rai, Thailand</li>
                            <li className="list-group-item"><a href="tel:66947 614 313"><PhoneIcon/>(+66) 947 614 313</a></li>
                            <li className="list-group-item"><AccessTimeIcon/>All week 24/7</li>
                            <li className="list-group-item"><a href="mailto:imgen.publish@gmail.com"><MailOutlineIcon/> imgen.publish@gmail.com</a></li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default FooterWidgets
