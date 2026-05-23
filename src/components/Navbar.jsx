import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {

  FaMoon,

  FaSun,

  FaUserCircle

} from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {

  const user = localStorage.getItem("user");

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  // ================= SMOOTH SCROLL =================

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if(section){

      section.scrollIntoView({

        behavior: "smooth"

      });

    }

  };

  // ================= DARK MODE =================

  const [darkMode, setDarkMode] = useState(

    localStorage.getItem("theme") === "dark"

  );

  useEffect(() => {

    if(darkMode){

      document.body.classList.add("dark");

      localStorage.setItem("theme","dark");

    } else {

      document.body.classList.remove("dark");

      localStorage.setItem("theme","light");

    }

  }, [darkMode]);

  // ================= LOGOUT =================

  const handleLogout = () => {

    localStorage.removeItem("user");

    localStorage.removeItem("latestResult");

    localStorage.removeItem("quizHistory");

    navigate("/");

  };

  return (

    <nav className="navbar">

      <h2 className="logo">
        LearnBuddy
      </h2>

      <ul className="nav-links">

        <li>

          <Link to="/home">

            Home

          </Link>

        </li>

        {/* About Scroll */}

        <li>

          <button
            className="nav-btn"

            onClick={() => scrollToSection("about")}
          >

            About

          </button>

        </li>

        <li>

          <Link to="/progress">

            Progress Report

          </Link>

        </li>

        {/* Footer Scroll */}

        <li>

          <button
            className="nav-btn"

            onClick={() => scrollToSection("footer")}
          >

            Social Media

          </button>

        </li>

      </ul>

      <div className="right-section">

        {/* Dark Mode Toggle */}

        <button
          className="theme-btn"

          onClick={() => setDarkMode(!darkMode)}
        >

          {
            darkMode ? <FaSun /> : <FaMoon />
          }

        </button>

        {/* User Dropdown */}

        <div className="dropdown">

          <button
            className="user-btn"

            onClick={() => setShowMenu(!showMenu)}
          >

            <FaUserCircle />

            &nbsp;

            {user} ▼

          </button>

          {
            showMenu && (

              <div className="dropdown-menu">

                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >

                  Logout

                </button>

              </div>

            )
          }

        </div>

      </div>

    </nav>

  );
}

export default Navbar;