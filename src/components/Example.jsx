import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Case from './Case';

import singleImg from '../assets/imgs/single.jpg';
import marriedImg from '../assets/imgs/married.jpg';

function Example() {
    const case1 = {
      id: 1,
      assumption:
        "A household with single filing status, $30000 taxable income, and $30000 capital gain. The capital gain duration is longer than one year (long term).",
        image: singleImg,
        imageAlt: 'single',
      case1:
        "The 2020 standard deduction for single filing status is $12,400. The taxable income after the standard deduction is $30000 - $12400 = $17600, which falls into 0% tax bracket. The capital gain with income after deduction is $47600, which falls into the 15% tax bracket. The first $40000(0% tax limit) - $17600 = $22400 of $30000 capital gain is taxed at 0%. The second $7600 of $30000 capital gain is taxed at 15%. Total capital gain taxes is $1140.",
    };
    const case2 = {
      id: 2,
      assumption:
        "A household with married jointly filing status, $60000 taxable income, and $55000 capital gain. The capital gain duration is less than one year (short term).",
        image: marriedImg,
        imageAlt: 'married',
      case1:
        "The 2020 standard deduction for married jointly filing status is $24,800. The taxable income after the standard deduction is $60000 - $24800 = $35200, which falls into 12% tax bracket. The capital gain with income after deduction is $55000 + $35200 = $90200, which falls into the 22% tax bracket. The first $80250(12% tax limit) - $35200 = $45050 of $55000 capital gain is taxed at 12%. The second $9950 of $55000 capital gain is taxed at 22%. Total capital gain taxes is $45050 * 12% + 9950 * 22% = $7595.",
    };
    let cases = [case1, case2];
    return (
        <React.Fragment>
                <Container>
                <div className="text-center">
                <Row className=""><Col><h1>Cases</h1></Col></Row>
                    <Row>
                    {cases.map(ca =>  <Col md='6' className="py-2 my-4"><Case key={ca.id} caseEach={ca} /></Col>)}
                    </Row>
                    </div>
                </Container>
        </React.Fragment>
    )
}

export default Example;