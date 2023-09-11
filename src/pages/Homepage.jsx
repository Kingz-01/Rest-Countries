import React from "react";
import Search from "../components/Search";
import Countries from "../components/Countries";
import Loading from "../utils/Loading";

const Homepage = ({
  allCountries,
  isLoading,
  filterByRegion,
  filterBySearch,
  darkmode,
}) => {
  return (
    <div>
      <Search filterByRegion={filterByRegion} filterBySearch={filterBySearch} />
      {isLoading && <Loading darkmode={darkmode} />}
      {!isLoading && <Countries allCountries={allCountries} />}
    </div>
  );
};

export default Homepage;
