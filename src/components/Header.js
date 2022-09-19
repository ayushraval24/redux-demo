import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg shadow navbar-dark">
      <div className="container-fluid mx-5">
        <a className="navbar-brand text-dark fs-2 fw-bold" href="/">
          MyShop
        </a>
        <button
          className="navbar-toggler bg-black"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
