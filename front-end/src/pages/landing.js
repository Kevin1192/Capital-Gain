import React, { Fragment } from 'react';
import CapitalGainForm from '../components/CapitalGainForm';
import Example from '../components/Example';
import Section from '../components/Section';

function Landing() {
    return (
        <Fragment>
            <Section />
            <Example />
            <CapitalGainForm />
        </Fragment>
    )
}

export default Landing;