import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Table from "./components/Table";
import data from "./data/data.json";
import "./App.css";

const App = () => {
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const uniqueFilters = {};
    data.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (!uniqueFilters[key]) uniqueFilters[key] = [];
        if (!uniqueFilters[key].includes(item[key])) {
          uniqueFilters[key].push(item[key]);
        }
      });
    });

    const filtersWithChecked = {};
    Object.keys(uniqueFilters).forEach((key) => {
      filtersWithChecked[key] = uniqueFilters[key].map((value) => ({
        value,
        checked: false,
      }));
    });

    setFilters(filtersWithChecked);
  }, []);

  const handleFilterChange = (filterKey, filterValue) => {
    const updatedFilters = { ...filters };
    const filterIndex = updatedFilters[filterKey].findIndex(
      (filter) => filter.value === filterValue
    );
    updatedFilters[filterKey][filterIndex].checked =
      !updatedFilters[filterKey][filterIndex].checked;

    setFilters(updatedFilters);

    const activeFilters = {};
    Object.keys(updatedFilters).forEach((key) => {
      activeFilters[key] = updatedFilters[key]
        .filter((filter) => filter.checked)
        .map((filter) => filter.value);
    });

    const filtered = data.filter((item) =>
      Object.keys(activeFilters).every(
        (key) =>
          activeFilters[key].length === 0 ||
          activeFilters[key].includes(item[key])
      )
    );

    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <Filter filters={filters} handleFilterChange={handleFilterChange} />
      <Table data={filteredData} />
    </div>
  );
};

export default App;
