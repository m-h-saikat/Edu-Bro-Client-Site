import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './FindBooks.css';
import { FaSearch } from 'react-icons/fa';

import AllBooks from '../AllBooks/AllBooks';



const FindBooks = () => {
    return (
        <div className='find-questions-area py-5'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="search-books text-center">
                            <h2>Search Books</h2>
                            <div className="search-form">
                                <input type="text" placeholder='Search Books' />
                                <button className='search-btn'>Search <FaSearch /></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <AllBooks />
        </div>
    );
};

export default FindBooks;