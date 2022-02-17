import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CustomerService from "../services/CustomerService";

const UpdateCustomer = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({ ...customer, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CustomerService.getCustomerById(customer.id);
        setCustomer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateCustomer = (e) => {
    e.preventDefault();
    CustomerService.updateCustomer(id,customer)
    .then((response) => {
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
          <h1>Update Customer</h1>
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
          <button
            onClick={updateCustomer}
            className="rounded font-semibold bg-green-400 hover:bg-green-500 py-2 px-6 text-white"
          >
            Update
          </button>
          <button onClick = {() => navigate("/customerList")} className="rounded font-semibold bg-red-400 hover:bg-red-500 py-2 px-6 text-white">
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomer;
