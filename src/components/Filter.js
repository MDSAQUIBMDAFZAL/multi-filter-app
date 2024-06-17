import React from "react";
import Switch from "react-switch";

const Filter = ({ filters, handleFilterChange }) => {
  return (
    <div className="filters">
      {Object.keys(filters).map((filterKey) => (
        <div key={filterKey} className="filter-group">
          <h4>{filterKey}</h4>
          {filters[filterKey].map((filterValue) => (
            <label key={filterValue.value} className="filter-label">
              <span>{filterValue.value}</span>
              <Switch
                onChange={() =>
                  handleFilterChange(filterKey, filterValue.value)
                }
                checked={filterValue.checked}
                offColor="#888"
                onColor="#0d6efd"
              />
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;
