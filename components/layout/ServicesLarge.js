import React from 'react'
import {
    Tabs,
    Tab,
    Modal,
    Row,
    Button,
    Col,
    Form,
    Card,
    Container,
    Accordion
} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';

function ServicesLarge({ products }) {
    const { innerWidth: width, innerHeight: height } = window;
    return (
        <>
            {products?.map((product, index) =>
               
                <div className="card" key={product.id}>
                    <div className="row g-0">
                        <div className="col-3 col-md-4 text-center">
                            <span className="price">{product.price.formatted_with_symbol}</span>
                        </div>
                        <div className="col-9 col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <div className="card-text">
                                    {ReactHtmlParser(product.description)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
            )}
        </>

    )
}

export default ServicesLarge
