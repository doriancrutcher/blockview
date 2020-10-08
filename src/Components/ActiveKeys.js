import React,{useState,useEffect} from 'react';
import {Container, Row, Col, ListGroup} from 'react-bootstrap';
import FullAccess from './ActiveKeysSub/FullAccess';
import FunctionCallKey from './ActiveKeysSub/FunctionCallKey';



const ActiveKeys = props => {

    const [accKeys,changeKeys]=useState('')

    return (
        <div>
            <Container style={{marginTop:'5%'}}>
                <Row className="dflex justify-content-center">
                <FullAccess></FullAccess>
                </Row>
                <Row className="dflex justify-content-center">
                <FunctionCallKey></FunctionCallKey>
                </Row>
            </Container>
        </div>
    );
};



export default ActiveKeys;