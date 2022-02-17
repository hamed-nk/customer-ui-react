import React from "react";
import { useNavigate } from "react-router";

function Customer({ customer, deleteCustomer }) {
  const navigate = useNavigate();
  const editCustomer = (e, id) => {
    e.preventDefault();
    navigate(`/editCustomer/${id}`);
  };

  return (
    <tr key={customer.id}>
      <td className="text-left px-3 py-3 whitespace-nowrap">
        <div className="text-gray-500">{customer.firstName}</div>
      </td>
      <td className="text-left px-3 py-3 whitespace-nowrap">
        <div className="text-gray-500">{customer.lastName}</div>
      </td>
      <td className="text-left px-3 py-3 whitespace-nowrap">
        <div className="text-gray-500">{customer.email}</div>
      </td>
      <td className="text-right px-3 py-3 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editCustomer(e, customer.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteCustomer(e, customer.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
}

export default Customer;
