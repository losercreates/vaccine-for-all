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
      <div className="centertext">
        <h2 className="name">{name}</h2>
        <br />
        <p className="vaccinename">
          <strong>Vaccine:</strong> {vaccine}
        </p>
        <br />
        <p className="address">
          <strong>Address:</strong> {address}, {district_name} , {state_name}
        </p>
        <p className="fees">
          <strong>{fee_type}:</strong> &#8377; {fee}
        </p>
        <p>
          <strong>Age Limit:</strong> {min_age_limit}+
        </p>
        <br />
        <h4>
          <strong>Availability:</strong>
        </h4>
        <div className="availability">
          <div className="dose1">
            <p>
              <strong>Dose 1:</strong>
            </p>
            <p>{available_capacity_dose1}</p>
          </div>
          <div className="dose2">
            <p>
              <strong>Dose 2:</strong>
            </p>
            <p>{available_capacity_dose2}</p>
          </div>
        </div>
        <br />
        <span>
          <strong>
            For directions Please Visit: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </strong>
        </span>
        <button className="btn-hover color-3">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.google.com/maps?q=${lat},${long}`}
          >
            Lets Go
          </a>
        </button>
      </div>
    </div>
  );
}

export default Center;
