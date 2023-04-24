import React from "react";
import { useLocation } from "react-router-dom";
import HomeLink from "../../shared/HomeLink/HomeLink";
import "./NotFound.css";

function NotFound() {
  const location = useLocation();

  return (
    <div className="NotFound">
      <h1 className="error-status">404</h1>
      <pre className="path-info"> No match for: {location.pathname}</pre>
      <br />
      <HomeLink />
    </div>
  );
}

export default NotFound;
