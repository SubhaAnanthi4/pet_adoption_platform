import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Adjust the path as needed
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for changes in the authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Update login state based on user presence
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to homepage after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Four Paws</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mb-2 me-auto mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Adopt Pets
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/dogs">Dogs</Link></li>
                <li><Link className="dropdown-item" to="/cats">Cats</Link></li>
                <li><Link className="dropdown-item" to="/others">Others</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sell-pets">Donate Pets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Me</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-outline-dark" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-outline-dark" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
