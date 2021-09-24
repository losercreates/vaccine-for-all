import React from "react";
import "./Center.css";

function Center({
  key,
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
}) {
  return (
    <div className="center">
      <h2>{name}</h2>
      <p>{vaccine}</p>
      <p>
        {address}, {district_name} , {state_name}
      </p>
      <p>{fee}</p>
      <p>{fee_type}</p>
      <p>{min_age_limit}</p>
      <p>{available_capacity_dose1}</p>
      <p>{available_capacity_dose2}</p>
      <button>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.google.com/maps?q=${lat},${long}`}
        >
          Lets Go
        </a>
      </button>
    </div>
  );
}

export default Center;
