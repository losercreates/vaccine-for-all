import React from "react";
import "./Search.css";
import Searchbypin from "./Searchbypin";

function Search() {
  //   const showsearchbydistrict = () => {
  //     document.getElementById("searchbydistrict").style.display = "block";
  //     document.getElementById("searchbypin").style.display = "none";
  //   };
  //   const showsearchbypin = () => {
  //     document.getElementById("searchbydistrict").style.display = "none";
  //     document.getElementById("searchbypin").style.display = "block";
  //   };

  return (
    <div className="search">
      {/* <div className="search__criteria">
        <button onClick={showsearchbypin}>Search By Pin</button>
        <button onClick={showsearchbydistrict}>Search By District</button>
      </div> */}
      <div id="searchbypin">
        <Searchbypin />
      </div>
      {/* <div id="searchbydistrict">
        <label>
          Your State
          <input list="states" name="myState" />
        </label>
        <datalist id="states"></datalist>
      </div> */}
    </div>
  );
}

export default Search;
