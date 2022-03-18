import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../hooks/useFirebase';

const AddBlogsDashboard = () => {
    const { user } = useFirebase()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.userName = user.displayName
        data.email = user.email
        data.status = 'Pending'

        fetch(`https://blooming-sierra-74368.herokuapp.com/postblogs`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)

                alert('Question Added Successfully')
                reset()
            });
    };
    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <div className="login-form text-center">
                        <h2 className='mb-5'>Add Blogs</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='w-75 mb-3' {...register("topic", { required: true })} placeholder='Your Topic' /> <br />
                            <input className='w-75 mb-3' {...register("blog", { required: true })} placeholder='Blog' /> <br />
                            <input className='w-75 mb-3' {...register("BlogImg", { required: true })} placeholder='Blog Image URL' /> <br />
                            <button type='submit'>Submit</button>
                        </form>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddBlogsDashboard;