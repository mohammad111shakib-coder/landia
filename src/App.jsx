import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/features/Features";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FeatureCard from "./pages/features/FeatureCard";
import FeatureTestmonilais from "./pages/features/FeatureTestmonilais";

import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <div className="m-4">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/feature-card" element={<FeatureCard />} />
          <Route
            path="/features/feature-testimonials"
            element={<FeatureTestmonilais />}
          />

          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="dropDown" element={<Dropdown />} /> */}
          <Route path="contact" element={<Contact />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </div>
  );
}
