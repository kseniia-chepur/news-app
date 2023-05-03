import React from "react";
import { BallTriangle } from "react-loading-icons";
import PropTypes from "prop-types";
import "./Spinner.css";

export default function Spinner({ loadingStatus }) {
  return (
    <div>
      {loadingStatus && (
        <div className="spinner-container">
          <BallTriangle stroke="transparent" speed={0.75} fill="#E17654" />
        </div>
      )}
    </div>
  );
}

Spinner.propTypes = {
  loadingStatus: PropTypes.bool.isRequired,
};
