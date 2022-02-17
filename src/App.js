import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddCustomer from "./cpmponents/AddCustomer";
import CustomerList from "./cpmponents/CustomerList";
import Navbar from "./cpmponents/Navbar";
import UpdateCustomer from "./cpmponents/UpdateCustomer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<CustomerList />} />
          <Route path="/" element={<CustomerList />} />
          <Route path="/customerList" element={<CustomerList />} />
          <Route path="/addCustomer" element={<AddCustomer />} />
          <Route path="/editCustomer/:id" element={<UpdateCustomer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
