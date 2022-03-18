import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const MySyllabus = () => {
    const { user } = useFirebase()

    const [syllabus, setSyllabus] = useState([])

    useEffect(() => {
        fetch(` https://blooming-sierra-74368.herokuapp.com/mySyllabus/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setSyllabus(data));
    }, [user?.email]);



    return (
        <div className='my-questions'>
            <div className='d-flex justify-content-between align-items-center my-question-header'>
                <h2>My Syllabus</h2>
                <Link to={'/dashboard/add-syllabus'}>
                    <button className='add-btn btn-danger'>Add Syllabus</button>
                </Link>
            </div>
            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ book: "1px solid red" }}>

                        <th >Number</th>
                        <th >Department</th>
                        <th >Year</th>

                        <th >Syllabus Preview</th>

                        <th >Status</th>
                        <th >Request To Delete</th>

                    </tr>
                </thead>
                {syllabus?.map((syllabuss, index) => (
                    <tbody key={syllabuss._id}>
                        <tr role="row" style={{ syllabuss: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{syllabuss.syllabusName}</td>
                            <td>{syllabuss.year}</td>

                            <td> <iframe title="question" src={syllabuss.driveLink}
                                className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe></td>
                            <td>{syllabuss.status}</td>
                            <td> <button
                                className="btn btn-danger"
                            // onClick={() => handlebookDeleteRequest(book._id)}
                            >
                                Delete Syllabus
                            </button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
};

export default MySyllabus;