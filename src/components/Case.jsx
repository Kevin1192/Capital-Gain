import React from 'react';
import { Card, Row, Col, CardBody } from 'reactstrap';


function Case({caseEach}) {
    const {id, assumption, case1, image, imageAlt } = caseEach;
    return (
        <Card className="bg-light rounded text-center border-0 py-5 transition shadow casecard">
        <CardBody className="casepadding">
            <h3>Case {id}</h3>
            <div className="py-4 my-4">
            <img src={image} alt={imageAlt} className="shadow rounded-circle" style={{ 'height': '150px', 'width': '150px'}} />
            </div>
            <p><span className="assumption">Assumption: </span>{assumption}</p>
            <p><span className="calculation">Calculation: </span>{case1}</p>
            </CardBody>
        </Card>
    )
}

export default Case;