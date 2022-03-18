import React, { useEffect, useState } from 'react';
import BlogDetails from './BlogDetails';
import BlogsCart from './BlogsCart';

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://blooming-sierra-74368.herokuapp.com/allBlogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    console.log(blogs)
    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">All Blogs</h1></div>
            <div className="row g-4 d-flex my-5 ">
                {blogs?.map((blog) => (

                    <BlogDetails
                        key={blog.id}
                        data={blog}>

                    </BlogDetails>



                ))}
            </div>

        </div>
    );
};

export default AllBlogs;