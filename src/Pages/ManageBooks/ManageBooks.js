import React from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const ManageBooks = () => {
    return (
        <div className='manage-questions'>
            <h2>Manage Books Admin Panel</h2>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Books</th>
                        <th>Books Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> Object Oriented Programming problem</td>
                        <td>approved</td>
                        <td><button className='details-btn'>approve</button> <FaTrashAlt className='btn-delete' /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Accounting </td>
                        <td>pending</td>
                        <td><button className='details-btn'>approve</button><FaTrashAlt className='btn-delete' /></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td >c++ problem solving Books</td>
                        <td>approved</td>
                        <td><button className='details-btn'>approve</button><FaTrashAlt className='btn-delete' /></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td >statistics bba </td>
                        <td>pending</td>
                        <td><button className='details-btn'>approve</button><FaTrashAlt className='btn-delete' /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageBooks;