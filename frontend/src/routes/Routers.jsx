import React from "react"; //6.9k (gzipped: 2.7k)
import Home from "../pages/Home";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Doctors from "../pages/Doctors/Doctors";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";

import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctors/:id" element={<DoctorDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={["patient"]}><MyAccount/></ProtectedRoute> } />
        <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={["doctor"]}><Dashboard/></ProtectedRoute>} />

    </Routes>
};

export default Routers;