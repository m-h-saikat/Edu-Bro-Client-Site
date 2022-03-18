import React from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const PendingBooks = () => {
    return (
        <div className='pending-questions'>
            <h2>Pending Books</h2>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>BOOks</th>
                        <th>Approval Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Numerical Method</td>
                        <td><button className='details-btn'>pending</button> <FaTrashAlt className='btn-delete' /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default PendingBooks;