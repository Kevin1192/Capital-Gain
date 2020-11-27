import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col} from 'reactstrap';
import img from '../assets/imgs/moneygrow-nobg.png';


class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 w-100 overflow-hidden" id="home">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="title-heading">
                                    <h1 className="heading mb-3">The Simple Capital Gain<br/>Tax Calculator</h1>
                                    <p className='text-muted'>It accounts for your taxable income and filing status and calculates the capital gains taxed progressively.</p>
                                    <a className="btn btn-primary btn-pills" href="#calculator">Try it Now!</a>
                                </div>
                            </Col>
                            <Col md="6" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="classic-saas-image position-relative">
                                    <div className="bg-saas-shape position-relative">
                                    <img src={img} className="sectionimg d-block" alt="stock up" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

export default connect(null)(Section);