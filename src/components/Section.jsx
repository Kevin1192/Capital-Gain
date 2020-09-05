import React, { Component } from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';

import img from '../assets/imgs/moneygrow-nobg.png';


class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 w-100 overflow-hidden">
                    <Container>
                        <Row>
                            <Col lg="7" md="6">
                                <div className="title-heading">
                                    <h1 className="heading mb-3">We help to build <br/> the project</h1>
                                    <p></p>
                                </div>
                            </Col>
                            <Col lg="5" md="6" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="">
                                    <img src={img} className="sectionimg d-block" alt="stock up" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

export default Section;