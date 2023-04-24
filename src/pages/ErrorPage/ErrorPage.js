import React from "react";
import { useLocation } from "react-router-dom";
import HomeLink from "../../shared/HomeLink/HomeLink";
import "./ErrorPage.css";

function ErrorPage() {
  const location = useLocation();

  return (
    <div className="ErrorPage">
      <h1 className="error-status">{location.state.status}</h1>
      <pre>{location.state?.statusText}</pre>
      <p>Error: failed to fetch news articles</p>
      <HomeLink />
    </div>
  );
}

export default ErrorPage;
