import React from 'react'
import dot from '../../assets/services/dot.png';
const orderProgress = [false, false, false, true];
function ServiceIcons() {
    return (
        <div className="service-icons">
            <ul className="order-progress">
                {
                    orderProgress.map((progress, ind) =>
                    <li className={progress? `progress-${ind+1}-success` : `progress-${ind+1}`} key={ind}><img src={dot.src}/><img src={dot.src}/></li>
                    )
                }
            </ul>
        </div>
    )
}

export default ServiceIcons
