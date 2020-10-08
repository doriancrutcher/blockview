import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {Card,Button, Container,Col,Row} from 'react-bootstrap'

const SendTokensOut = props => {


    const [title, setTitle] = useState('')
    let ValueInput=React.createRef();
    let Recipient = React.createRef();


    const sendGift=()=>{
        console.log('pressed!')
        console.log()
        window.account.sendMoney(Recipient.current.value,window.utils.format.parseNearAmount(ValueInput.current.value))
    }

    return (
        <div>
            <Card>
                <Card.Header>Send Money to a Friend</Card.Header>
                <Card.Body>
                <Container>
                    <Row>
                    <Col>
                <input type="text" placeholder="Enter Recipient Here" ref={Recipient}/>
                <input type="text" placeholder="Enter Value Here" ref={ValueInput}/>
                </Col>
                <Col className="dflex align-items-center justify-content-center">
                <Button onClick={sendGift}> Submit</Button></Col>
                </Row>
                </Container>
                </Card.Body>
                
            </Card>
        </div>
    );
};

SendTokensOut.propTypes = {
    
};

export default SendTokensOut;