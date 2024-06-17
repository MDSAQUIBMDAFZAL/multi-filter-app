import React from "react";

const TableRow = ({ row }) => {
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.city}</td>
      <td>{row.category}</td>
      <td>{row.type}</td>
      <td>{row.active}</td>
    </tr>
  );
};

export default TableRow;
