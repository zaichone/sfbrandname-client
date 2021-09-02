import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    return (
        <section className="search-bar">
            <Container>
                <Row>
                    <Col className="offset-md-8">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="What brand are you Looking for?" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><SearchIcon/></button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SearchBar
