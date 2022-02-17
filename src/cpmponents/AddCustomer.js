import React, { useState } from "react";
import { useNavigate } from "react-router";
import CustomerService from "../services/CustomerService";

function AddCustomer() {
  const [customer, setCustomer] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({ ...customer, [e.target.name]: value });
  };

  const reset = (e) => {
      e.preventDefault();
      setCustomer({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
      });
  };

  const saveCustomer = (e) => {
      e.preventDefault();
      CustomerService.saveCustomer(customer).then((response) => {
        console.log(response);
        navigate("/customerList");
      })
      .catch((error) => {
          console.log(error);
      });
  };
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Customer</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            name="firstName"
            value={customer.firstName}
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-10 w-96 border mt-2 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            name="lastName"
            value={customer.lastName}
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-10 w-96 border mt-2 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            name="email"
            value={customer.email}
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-10 w-96 border mt-2 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button onClick={saveCustomer} className="rounded font-semibold bg-green-400 hover:bg-green-500 py-2 px-6 text-white">
            save
          </button>
          <button onClick={reset} className="rounded font-semibold bg-red-400 hover:bg-red-500 py-2 px-6 text-white">
            clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
