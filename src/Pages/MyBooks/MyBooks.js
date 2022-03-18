import React from 'react';
import { Table } from 'react-bootstrap';
import './MyBooks.css';
import { FaTrashAlt } from 'react-icons/fa'

const MyBooks = () => {
    return (
        <div className='my-questions'>
            <h2>My Books</h2>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Books</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> Oriented Programming problem</td>
                        <td><button className='details-btn'>See Answer</button> <FaTrashAlt className='btn-delete' /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Accounting bba 1st year question 2018</td>
                        <td><button className='details-btn'>See Books</button><FaTrashAlt className='btn-delete' /></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td >c++ problem solving question 2021 DU</td>
                        <td><button className='details-btn'>See Books</button><FaTrashAlt className='btn-delete' /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default MyBooks;