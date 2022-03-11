import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Dashboard.css';
import { FaThLarge, FaUser, FaBookmark, FaCommentDots, FaSignOutAlt, FaTasks, FaUserShield, FaSchool } from 'react-icons/fa'

const Dashboard = () => {
    const { admin } = useFirebase()
    return (
        <div className='dashboard'>
            <Row>
                <Col md={2}>
                    <div className="dashboard-menu shadow px-3 py-4">
                        <div className="logo mb-4">
                            <h4>Edu Bro.</h4>
                        </div>
                        <ul>
                            <li>
                                <NavLink to={`welcome`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaThLarge className='me-1' /> Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={`user-profile`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaUser className='me-1' /> Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaBookmark className='me-1' /> My Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-books`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaBookmark className='me-1' /> My Books</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-syllabus`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaBookmark className='me-1' /> My Syllabus</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-blogs`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaBookmark className='me-1' /> My Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-notes`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaBookmark className='me-1' /> My Notes</NavLink>
                            </li>
<<<<<<< HEAD
                            <li>
                                <NavLink to={`my-labs`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaBookmark className='me-1' /> My Labs</NavLink>
                            </li>
                            <li>
=======
                            {/* <li>
>>>>>>> fa83bc534e8d73e5071883ca1b3893a5adf7802c
                                <NavLink to={`pending-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaCommentDots className='me-1' /> Pending Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`add-depertments`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaSchool className='me-1' /> Add Depertment</NavLink>
                            </li> */}

                            {/* {admin && <div> */}
                            {/* <li>
                                <NavLink to={`manage-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaTasks className='me-1' /> Manage Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`make-admin`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaUserShield /> Make Admin</NavLink>
                            </li> */}
                            {/* </div>} */}

                            <li className='dashboard-logOut'>
                                <FaSignOutAlt className='me-1' /> Log Out
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={10} className='px-5 py-5'>
                    <Outlet />
                </Col>
            </Row>
        </div >
    );
};

export default Dashboard;