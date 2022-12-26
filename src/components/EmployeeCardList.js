import React from "react";
import { Card, Row, Col}from 'react-bootstrap';
import "react-circular-progressbar/dist/styles.css";



export default function EmployeeCard({ image, firstName, lastName, phoneNumber, statistics: { totalRequirements, missingRequirements } }) {

  return (

      <Card className="bg-white rounded shadow-lg py-5 px-4 card mb-4 " >
      <Row>
        <Col>
              <img
                src={image}
                alt="Employeer"
                width="100"
                className="img-fluid rounded-circle img-thumbnail shadow-sm"
                style={{ marginTop: '-8px' }}
              />
            </Col>
            {/* employers name*/}
            <Col>
              <h5 className="">{firstName}</h5>
              <span className="small text-muted">
                {lastName}@snapper.com/{phoneNumber}
              </span>
            </Col>
            <Col>
              <h6 className="small text-muted">Siste samtale</h6>
              {totalRequirements}
            </Col>
            <Col>
              <h6 className="small text-muted">Kritiske</h6>
              {missingRequirements}
            </Col>    
      </Row>
      </Card>

  
  );
}
