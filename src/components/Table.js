import React from "react";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <>
      {data && data.length === 0 ? (
        <span className="no-record">There are no records in the database</span>
      ) : (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>city</th>
              <th>category</th>
              <th>type</th>
              <th>active</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <TableRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
