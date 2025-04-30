import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactUs from "./pages/ContactUS";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";

import WhoWeAreDetail from "./pages/WhoWeAreDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatWeDo from "./pages/WhatWeDo";

import AboutUs from "./pages/AboutUs";

// Layout component that includes Navbar and Footer
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Other routes with Navbar and Footer */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/whoweare"
          element={
            <Layout>
              <WhoWeAreDetail />
            </Layout>
          }
        />
        <Route
          path="/design-build"
          element={
            <Layout>
              <WhatWeDo />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
