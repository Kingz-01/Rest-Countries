import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CountryDetail from "./pages/CountryDetail";
import Navbar from "./components/Navbar";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [filteredCountries, setFilteredCountries] = useState([])
  const [darkmode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log(data);
      setAllCountries(data);
      setIsLoading(false)
    };
    
    
    
    const filterByRegion = (region) => {
      const newCountries = allCountries.filter(
        (eachCountry) => eachCountry.region === region
         );

        console.log(newCountries);
        setFilteredCountries(newCountries);
    };

    const filterBySearch = (Search)=> {
        const newNations = allCountries.filter((country) => 
        country.name.common.toLowerCase().includes(Search)
         );

         console.log(newNations);
         setFilteredCountries(newNations);

    };

    getData();
    
  }, []);
  return (
    <>
      <Router>
        <Navbar darkmode={darkmode} setDarkMode={setDarkMode} />
        <Routes>
          <Route 
          path="/" 
          element={
          <Homepage 
          allCountries={
            filteredCountries.length > 0
            ? filteredCountries 
            : allCountries
          }
           isLoading={isLoading} 
           filterByRegion={filterByRegion}
           filterBySearch={filterBySearch}
           darkmode={darkmode}
            />
           } 
           />
          <Route path="/:countryName" element={<CountryDetail darkmode={darkmode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
