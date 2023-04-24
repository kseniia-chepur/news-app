import React from "react";
import { Link } from "react-router-dom";
import "./HomeLink.css";

export default function HomeLink() {
  return (
    <Link to="/" className="HomeLink">
      Back to home
    </Link>
  );
}
