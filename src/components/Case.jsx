import React from 'react';
import { Card } from 'reactstrap';


function Case(props) {
    return (
        <Card className="bg-light rounded text-center border-0 py-5">
            {props.children}
        </Card>
    )
}

export default Case;