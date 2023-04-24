import React from "react";
import DropdownPackage from "react-dropdown";
import "react-dropdown/style.css";
import PropTypes from "prop-types";
import "./Dropdown.css";

export default function Dropdown({ sourceList, filterbySource, clearFilter }) {
  const options = [...new Set(sourceList)];

  return (
    <div>
      {options.length > 0 && (
        <div className="filter-container">
          <DropdownPackage
            options={options}
            value="Filter by source"
            onChange={filterbySource}
          />
          <button
            type="button"
            className="clear-filter-btn"
            onClick={clearFilter}
          >
            Show all articles
          </button>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  sourceList: PropTypes.arrayOf(PropTypes.string),
  filterbySource: PropTypes.func,
  clearFilter: PropTypes.func,
};
