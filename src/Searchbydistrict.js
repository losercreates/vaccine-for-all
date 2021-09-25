import React, { useEffect, useState } from "react";
import axios from "axios";
import Center from "./Center";
import "./Searchbydistrict.css";

function Searchbydistrict() {
  const [states, setStates] = useState([]);
  const [found, setFound] = useState(true);
  const [selectedstate, setSelectedstate] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selecteddistrict, setSelectedDistrict] = useState("");
  const [centerss, setCenterss] = useState([]);
  const getcentersdata = async (e) => {
    e.preventDefault();
    const d = new Date();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const date = d.getDate();
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${selecteddistrict}&date=${date}-${month}-${year}`;
    const response = await axios.get(url);
    if (response.data.sessions.length > 0) {
      setFound(true);
    } else {
      setFound(false);
    }
    setCenterss(response.data.sessions);
  };
  useEffect(() => {
    async function fetchStates() {
      const response = await axios.get(
        "https://cdn-api.co-vin.in/api/v2/admin/location/states"
      );
      setStates(response.data.states);
      return response;
    }
    fetchStates();
  }, []);
  useEffect(() => {
    async function fetchDistricts() {
      const response = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selectedstate}`
      );
      setDistricts(response.data.districts);
      return response;
    }
    fetchDistricts();
  }, [selectedstate]);
  return (
    <>
      <form>
        <label>Your State:</label>
        <br />
        <br />
        <select
          id="states"
          onChange={(e) => {
            const selectstate = e.target.value;
            setSelectedstate(selectstate);
            document.getElementsByClassName("body").innerHTML = "";
          }}
        >
          <option selected>Please Select your State</option>
          {states.map((state) => (
            <option value={state.state_id}>{state.state_name}</option>
          ))}
        </select>
        <br />
        <br />
        <label>Your District:</label>
        <br />
        <br />
        <select
          id="districts"
          onChange={(e) => {
            const selectdistrict = e.target.value;
            setSelectedDistrict(selectdistrict);
          }}
        >
          <option selected disabled>
            Please Select your District
          </option>
          {districts.map((district) => (
            <option value={district.district_id}>
              {district.district_name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button
          className="btn-hover color-3"
          onClick={getcentersdata}
          type="submit"
        >
          Search
        </button>
      </form>
      <h1 className="available">Available Centers</h1>
      <div className="body">
        {found ? (
          centerss.map(
            ({
              center_id,
              name,
              vaccine,
              address,
              district_name,
              state_name,
              fee_type,
              fee,
              lat,
              long,
              min_age_limit,
              available_capacity_dose1,
              available_capacity_dose2,
            }) => (
              <Center
                key={center_id}
                name={name}
                vaccine={vaccine}
                address={address}
                district_name={district_name}
                state_name={state_name}
                fee={fee}
                fee_type={fee_type}
                lat={lat}
                long={long}
                min_age_limit={min_age_limit}
                available_capacity_dose1={available_capacity_dose1}
                available_capacity_dose2={available_capacity_dose2}
              />
            )
          )
        ) : (
          <div className="nofound">
            No vaccination centers found for the entered district. Please try
            with another district
          </div>
        )}
      </div>
    </>
  );
}

export default Searchbydistrict;
