import React from 'react';
import services from './serviceList.json';
import Image from 'next/image';
import Link from 'next/link';

function ServiceList() {
    //console.log(services);

    return (
        <section className="front-services">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    {services.map((service, index) =>
                        <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center" key={index}>

                            <div className="card">
                                <img src={`/assets/${service.title}.png`} className="card-img-top" alt={service.title} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{service.title}</h5>
                                </div>
                            </div>

                        </div>
                    )
                    }
                     <div className="col-12 text-center learn-more"><Link href="/branding/">LEARN MORE</Link></div>
                </div>
                
            </div>
           
        </section>
    )
}

export default ServiceList
