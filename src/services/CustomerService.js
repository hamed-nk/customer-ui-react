import axios from "axios";

const CUSTOMER_API_BASE_URL = "https://spring-customers-backend.herokuapp.com/api/v1/customers";
class CustomerService {
  saveCustomer(customer) {
    return axios.post(CUSTOMER_API_BASE_URL, customer);
  }

  getCustomer() {
    return axios.get(CUSTOMER_API_BASE_URL);
  }

  deleteCustomer(id) {
    return axios.delete(CUSTOMER_API_BASE_URL + "/" + id);
  }

  getCustomerById(id) {
    return axios.get(CUSTOMER_API_BASE_URL + "/" + id);
  }

  updateCustomer(id, customer) {
    return axios.put(CUSTOMER_API_BASE_URL + "/" + id, customer);
  }
}

export default new CustomerService();
