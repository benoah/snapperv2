import React, { useState, useEffect } from "react";
import Tasks from "../components/Tasks";
import ConversationHistory from "../components/ConversationHistory";
import EmployeeCardList  from "../components/EmployeeCardList";
import {Container, Row, Col} from "react-bootstrap"





export default function Home() {
  const [personsdata, setPersonsData] = useState([]);

  
  
  const url = "/data/persons.json";
  // const personUrl = "/data/person.json";

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.persons);
    setPersonsData(data.persons);
  };
  useEffect(() => {
    fetchData();

  }, []);

  // const statistics = personsdata.map(({ person: { statistics } }) => statistics);
  // console.log("statistics", statistics);
  // define the statistics object
  // Destructure the statistics object from each person in the personsdata array
  const { totalRequirements, missingRequirements } = personsdata.reduce(
    (acc, { person: { statistics } }) => {
      return {
        totalRequirements:
          acc.totalRequirements + statistics.requirements_total,
        missingRequirements:
          acc.missingRequirements + statistics.requirements_missing,
      };
    },
    { totalRequirements: 0, missingRequirements: 0 }
  )

  return (
    <>
    <Row style={{marginTop: "8px", marginBottom: "80px",}}>
    <Col className="col-5">
      {/* Pass the totalRequirements and missingRequirements values to the Oppgaver component */}
      <Tasks
        totalRequirements={totalRequirements}
        missingRequirements={missingRequirements}
      />
    </Col>
    <Col className="col-2"></Col>
    <Col className="col-5">
      <ConversationHistory
      totalRequirements={totalRequirements}
      missingRequirements={missingRequirements}/>
    </Col>
  </Row>
  <Row>
  <Col>
  <h3 style={{marginTop: "px", color: "#0D0D0D" }}> Ansatte</h3>
  {personsdata.map(
    ({
      person: {
        id,
        birthdate,
        image,
        fullname,
        lastname,
        mobile,
        statistics,
      },
    }) => {
      return (
          <EmployeeCardList
            key={id}
            firstName={fullname}
            lastName={lastname}
            phoneNumber={mobile}
            birthdate={birthdate}
            image={image}
            statistics={{
              totalRequirements: statistics.requirements_total,
              missingRequirements: statistics.requirements_missing,
            }}
          />
          
      );
    }
  )}
  </Col>
  </Row>
    </>
  )
}
