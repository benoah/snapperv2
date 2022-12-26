import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Tasks(props) {
  // const percentage = (props.missingRequirements / props.totalRequirements) * 100;

  return (
    <div className="bg-white rounded shadow-lg py-5 px-4 card h-100 ">
      <h3 style={{ color: "#0D0D0D" }}>Oppgaver</h3>
      <br></br>
      <div className="row">
        <div className="col">
          <CircularProgressbar
            value={33}
            text={`${33}%`}
            strokeWidth={4}
            styles={buildStyles({
              textColor: "#6c757d",
              pathColor: "#80BF7E",
              trailColor: "#F24B4B",
            })}
            width={50}
            height={50}
          />
          <p
            style={{ marginTop: "8px" }}
            className=" text-muted text-center mt-8 "
          >
            Mine
          </p>
        </div>
        <div className="col">
          <CircularProgressbar
            value={50}
            text={`${50}%`}
            strokeWidth={4}
            styles={buildStyles({
              textColor: "#6c757d",
              pathColor: "#80BF7E",
              trailColor: "#F4F4F4",
            })}
          />
          <p
            style={{ marginTop: "8px" }}
            className=" text-muted text-center mt-8 "
          >
            Ansatte
          </p>
        </div>
      </div>
    </div>
  );
}
