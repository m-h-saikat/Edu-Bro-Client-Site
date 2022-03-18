import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';



const MyBlogs = () => {
    const { user } = useFirebase()

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch(` https://blooming-sierra-74368.herokuapp.com/myBlogs/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, [user?.email]);

    console.log(blogs)



    // const handleBlogDeleteRequest = (data) => {
    //     fetch("https://blooming-sierra-74368.herokuapp.com/requestBlogsDelete", {
    //         method: "PUT",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(data),
    //     })
    //         .then((res) => res.json())
    //         .then((result) => console.log(result));
    //     alert('Added admin successfully!!!!')

    // };




    return (
        <div className='my-questions'>
            <div className='d-flex justify-content-between align-items-center my-question-header'>
                <h2>My Blogs</h2>
                <Link to={'/dashboard/add-blogs'}>
                    <button className='add-btn btn-danger'>Add Blogs</button>
                </Link>
            </div>
            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ bblog: "1px solid red" }}>

                        <th >Number</th>
                        <th >Topic</th>

                        <th >Image</th>

                        <th >Status</th>
                        <th >Request To Delete</th>

                    </tr>
                </thead>
                {blogs?.map((blog, index) => (
                    <tbody key={blog._id}>
                        <tr role="row" style={{ blog: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{blog.topic}</td>
                            <td><img style={{ width: "70px", height: "50px" }} src={blog.BlogImg} alt="" /></td>
                            <td>{blog.status}</td>
                            <td> <button
                                className="btn btn-danger"
                            // onClick={() => handleBlogDeleteRequest(blog._id)}
                            >
                                Delete Blog
                            </button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
};

export default MyBlogs;