import React, { useState, useRef, useEffect } from "react";
import Tasks from "../components/Tasks";
import ConversationHistory from "../components/ConversationHistory";
import Form from "../components/Form.js";
import { Card } from "react-bootstrap";
import image from "../layout/97.png";

const Leader = ({ person }) => {
  return (
    <div>
      <p>
        {person.firstname} {person.lastname}
      </p>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="btn-group ">
      <button className="btn " style={{ marginRight: "20px" }}>
        Bruker
      </button>
      <button
        style={{ borderBottom: "2px solid #F27405", marginRight: "20px" }}
        className="btn"
      >
        Oppgaver
      </button>
      <button className="btn col" style={{ marginRight: "20px" }}>
        Send Meling
      </button>
      <button className="btn col">Meldt på kurs</button>
    </div>
  );
};

export default function Leder() {
  const url = "/data/person.json";
  const [person, setPerson] = useState();
  const inputRef = useRef(null);

  const [updated, setUpdated] = useState("");

 /* const handleClick = () => {
    // 👇 "inputRef.current.value" is input value
    console.log("hello");
    setUpdated(inputRef.current.value);
  };
*/


  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPerson(data.person);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col">
          <Tasks />
        </div>
        <div className="col">
          <ConversationHistory />
        </div>
      </div>
      <br></br>
      <br></br>
      <Card className="bg-white rounded shadow-lg py-5 px-4 card mb-4 ">
        <div className="row">
          <div className="col-2">
            <img
              src={image}
              alt="Employeer"
              width="100"
              className="img-fluid rounded-circle img-thumbnail shadow-sm"
              style={{ marginTop: "-8px" }}
            />
          </div>
          <div className="col-6">
            <h5 className="text-muted">
              {" "}
              {person && <Leader person={person} />}{" "}
            </h5>
          </div>
        </div>
      </Card>
      <br></br>
      <Navigation />
      <Form />
    </div>
  );
}
