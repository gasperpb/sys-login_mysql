import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button className="nav-link">About</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Services</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Contact</button>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Welcome to the Home Page</h1>
      <p>This is a sample home page using Bootstrap.</p>
    </div>
  );
}

export default Home;
