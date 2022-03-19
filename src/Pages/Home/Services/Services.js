import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleService from './SingleService';

const Services = () => {
    return (
        <div className='py-5 service-area'>
            <Container>
                <Row>
                    <Col>
                        <div className="section-title text-center mb-5">
                            <h3>Featured Categories</h3>
                            <span></span>
                        </div>
                    </Col>
                </Row>
                <SingleService />
            </Container>
        </div>
    );
};

export default Services;