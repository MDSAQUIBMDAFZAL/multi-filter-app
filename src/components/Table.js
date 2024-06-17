import React from "react";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
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
  );
};

export default Table;
