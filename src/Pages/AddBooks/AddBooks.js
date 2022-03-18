import { Container } from 'react-bootstrap';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Rating from 'react-rating';





const AddBooks = () => {








    //react hook form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch(`https://blooming-sierra-74368.herokuapp.com/addBook`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)

                alert('Book Added Successfully')
                reset()
            });
    };

    return (
        <div className='py-5'>




            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center">
                            <h2 className='mb-5'>Add Your Books</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className='w-75 mb-3'  {...register("department", { required: true })} placeholder='Enter the Department' /> <br />
                                <input className='w-75 mb-3'  {...register("subject", { required: true })} placeholder='Enter Book Title' /> <br />
                                <input className='w-75 mb-3'  {...register("code", { required: true })} placeholder='Enter Course Code' /> <br />
                                <input className='w-75 mb-3' {...register("semester", { required: true })} placeholder='Enter Semester' /> <br />
                                <input className='w-75 mb-3' {...register("year", { required: true })} placeholder='Book Publication Year' /> <br />
                                <input className='w-75 mb-3' {...register("author", { required: true })} placeholder='Book Author' /> <br />

                                <input className='w-75 mb-3' {...register("ypdfLinkear", { required: true })} placeholder='Book Link' /> <br />

                                <button type='submit'>Submit</button>
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default AddBooks;