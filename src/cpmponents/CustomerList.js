import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CustomerService from "../services/CustomerService";
import Customer from "./Customer";

function CustomerList() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState(null);

  const deleteCustomer = (e, id) => {
    e.preventDefault();
    CustomerService.deleteCustomer(id).then((response) => {
      if (customers) {
        setCustomers((prevElement) => {
          return prevElement.filter((customer) => customer.id !== id);
        });
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CustomerService.getCustomer();
        setCustomers(response.data.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-6">
      <div className="h-12">
        <button
          onClick={() => navigate("/addCustomer")}
          className="rounded text-white bg-slate-600 px-6 py-2 font-semibold"
        >
          Add Customer
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-3">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-3">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-3">
                Email
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-3">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {customers.map((customer) => (
                <Customer
                  customer={customer}
                  deleteCustomer={deleteCustomer}
                  key={customer.id}
                ></Customer>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
