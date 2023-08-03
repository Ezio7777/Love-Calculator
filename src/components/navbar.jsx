import React from 'react'
import "./navbar.css"

function navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
        <div class="container">

          {/* Logo */}
          <a class="navbar-brand" href="#">Love</a>

          {/* Toggle-Btn */}
          <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* SideBar */}
          <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            
            {/* Sidebar-Header */}
            <div class="offcanvas-header text-white border-bottom">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Love</h5>
              <button type="button" class="btn-close btn-close-white " data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            {/* Sidebar-Body */}
            <div class="offcanvas-body d-flex flex-column p-4 flex-lg-row p-lg-0">
              <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                <li class="nav-item mx-2">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#">Contact Us</a>
                </li>
              </ul>

              {/* Login & Sign Up */}
              <div className=' d-flex flex-column flex-lg-row p-4 justify-content-center align-items-center gap-3 '>
                  <a class="text-white" href="#">Login</a>
                  <a class="text-white text-decoration-none px-3 py-1 rounded-4" id='signup' href="#">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar