import React from "react";
import { Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const PendingNotes = () => {
  return (
    <div className="pending-questions">
      <h2>Pending Notes</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Notes</th>
            <th>Approval Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Neumerical Analysis Notes 2019</td>
            <td>
              <button className="details-btn">pending</button>{" "}
              <FaTrashAlt className="btn-delete" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PendingNotes;
