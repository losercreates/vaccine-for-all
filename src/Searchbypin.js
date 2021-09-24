import React, { useState } from "react";
import "./Searchbypin.css";
import axios from "axios";
import Center from "./Center";

function Searchbypin() {
  const [found, setFound] = useState(true);
  const [pincode, setPincode] = useState("");
  const [centers, setCenters] = useState([]);
  const getcentersdata = async (e) => {
    e.preventDefault();
    const d = new Date();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const date = d.getDate();
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}-${month}-${year}`;
    const response = await axios.get(url);
    if (response.data.sessions.length > 0) {
      setFound(true);
    } else {
      setFound(false);
    }
    console.log(found);
    setCenters(response.data.sessions);
  };
  return (
    <>
      <form>
        <input
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          type="text"
          placeholder="Type your pincode"
        />
        <button onClick={getcentersdata} type="submit">
          Search
        </button>
      </form>
      <div className="body">
        {found
          ? centers.map(
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
          : "No vaccination centers found for the entered pincode. Please try with another pincode"}
      </div>
    </>
  );
}

export default Searchbypin;
