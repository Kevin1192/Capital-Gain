import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Case from './Case';


function Example() {
    const case1 = {
      id: 1,
      assumption:
        "A household with single filing status, $30000 taxable income, and $30000 capital gain.",
      longCase:
        "The 2020 standard deduction for single filing status is $12,400. The taxable income after the standard deduction is $30000 - $12400 = $17600, which falls into 0% tax bracket. The capital gain with taxes after deduction is $47600, which falls into the 15% tax bracket. The first $40000(0% tax limit) - $17600 = $22400 of $30000 capital gain is taxed at 0%. The second $7600 of $30000 capital gain is taxed at 15%. Total capital gain taxes is $1140.",
      shortCase:
        "The 2020 standard deduction for single filing status is $12,400. The taxable income after the standard deduction is $30000 - $12400 = $17600, which falls into 0% tax bracket. The capital gain with taxes after deduction is $47600, which falls into the 15% tax bracket. The first $40000(0% tax limit) - $17600 = $22400 of $30000 capital gain is taxed at 0%. The second $7600 of $30000 capital gain is taxed at 15%. Total capital gain taxes is $1140.",
    };
    const case2 = {
      id: 2,
      assumption:
        "A household with single filing status, $30000 taxable income, and $30000 capital gain.",
      longCase:
        "The 2020 standard deduction for single filing status is $12,400. The taxable income after the standard deduction is $30000 - $12400 = $17600, which falls into 0% tax bracket. The capital gain with taxes after deduction is $47600, which falls into the 15% tax bracket. The first $40000(0% tax limit) - $17600 = $22400 of $30000 capital gain is taxed at 0%. The second $7600 of $30000 capital gain is taxed at 15%. Total capital gain taxes is $1140.",
      shortCase:
        "The 2020 standard deduction for single filing status is $12,400. The taxable income after the standard deduction is $30000 - $12400 = $17600, which falls into 0% tax bracket. The capital gain with taxes after deduction is $47600, which falls into the 15% tax bracket. The first $40000(0% tax limit) - $17600 = $22400 of $30000 capital gain is taxed at 0%. The second $7600 of $30000 capital gain is taxed at 15%. Total capital gain taxes is $1140.",
    };
    let cases = [case1, case2];
    return (
        <React.Fragment>
                <Container>
                <div className="text-center">
                <Row className=""><Col><h1>Cases</h1></Col></Row>
                    <Row>
                    {cases.map(ca =>  (<Case key={ca.id}></Case>))}
                        <Col md='6'><Case>Case 1</Case></Col>
                        <Col md='6'>case 2</Col>
                    </Row>
                    </div>
                </Container>
        </React.Fragment>
    )
}

export default Example;