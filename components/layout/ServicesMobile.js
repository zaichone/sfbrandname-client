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

function ServicesMobile({ products }) {
    return (
        <>
            {products?.map((product, index) =>

                <Accordion>
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>
                            <Row className="row g-0">
                                <Col xs={2}>
                                    {product.price.formatted_with_symbol}
                                </Col>
                                <Col xs={10}>
                                    {product.name}
                                </Col>
                            </Row>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="card w-100">
                                {ReactHtmlParser(product.description)}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )}
        </>

    )
}

export default ServicesMobile
