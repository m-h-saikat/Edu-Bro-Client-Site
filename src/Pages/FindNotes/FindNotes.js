import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FindNote.css";
import { FaSearch } from "react-icons/fa";

import Note from './../MyNotes/Note';

const FindNotes = () => {
  return (
    <div className="find-questions-area py-5">
      <Container>
        <Row>
          <Col md={11}>
            <div className="search-questions text-center">
              <h2>Search Notes</h2>
              <div className="search-form">
                <input type="text" placeholder="Search Questions" />
                <button className="search-btn">
                  Search <FaSearch />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Note />
    </div>
  );
};

export default FindNotes;
