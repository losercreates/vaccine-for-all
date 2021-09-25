import React, { useEffect } from "react";
import "./Search.css";
import Searchbypin from "./Searchbypin";
import Searchbydistrict from "./Searchbydistrict";

function Search() {
  useEffect(() => {
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }, []);
  const showsearchbydistrict = () => {
    document.getElementById("searchbydistrict").style.display = "block";
    document.getElementById("searchbypin").style.display = "none";
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  };
  const showsearchbypin = () => {
    document.getElementById("searchbydistrict").style.display = "none";
    document.getElementById("searchbypin").style.display = "block";
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  };

  return (
    <div className="search">
      <h3>Working towards equal distribution of vaccines</h3>
      <div className="search__criteria">
        <button className="btn active" onClick={showsearchbypin}>
          Search By Pin
        </button>
        <button className="btn" onClick={showsearchbydistrict}>
          Search By District
        </button>
      </div>
      <div id="searchbypin">
        <Searchbypin />
      </div>
      <div id="searchbydistrict">
        <Searchbydistrict />
      </div>
    </div>
  );
}

export default Search;
