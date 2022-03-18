import { Container } from "react-bootstrap";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
const AddNotes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="login-form text-center">
              <h2 className="mb-4">Add Your Notes</h2>
              <form>
                <input
                  className="w-75 mb-3"
                  {...register("department", { required: true })}
                  placeholder="Enter the Department"
                />{" "}
                <br />
                <input
                  className="w-75 mb-3"
                  {...register("subject", { required: true })}
                  placeholder="Enter Course Title"
                />{" "}
                <br />
                <input
                  className="w-75 mb-3"
                  {...register("code", { required: true })}
                  placeholder="Enter Course Code"
                />{" "}
                <br />
                <input
                  className="w-75 mb-3"
                  {...register("semester", { required: true })}
                  placeholder="Enter Semester"
                />{" "}
                <br />
                <input
                  className="w-75 mb-3"
                  {...register("year", { required: true })}
                  placeholder="Notes Year"
                />{" "}
                <br />
                <input
                  className="w-75 mb-3"
                  {...register("ypdfLinkear", { required: true })}
                  placeholder="Notes Link"
                />{" "}
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddNotes;
