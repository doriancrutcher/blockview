import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Container, Col, Row, Table,ListGroup } from 'react-bootstrap'

const SendTokensOut = props => {


    const [title, setTitle] = useState('')
    const [recipients, setRecipients] = useState([])
    const [valuesSent, setValues] = useState([])
    const [Balance, changeBalance] = useState(0);


    let ValueInput = React.createRef();
    let Recipient = React.createRef();




    const sendGift = async () => {
        let getState = await window.account.state();
        let getAmount = await window.utils.format.formatNearAmount(getState.amount);
        let enteredValue=ValueInput.current.value
    

        console.log(`your starting balance is ${getAmount} and the current value input is ${enteredValue}`)

        if (Number(getAmount) > Number(enteredValue)) {

            await window.account.sendMoney(Recipient.current.value, window.utils.format.parseNearAmount(enteredValue))
                .then(
                    await window.contract.addFunds({ recipient: Recipient.current.value, amount: Number(enteredValue) })
                )
                .then(
                    setRecipients(
                        await window.contract.getNames()
                    )

                )
                .then(
                    setValues(
                        await window.contract.getTotals()
                    )
                )
  

        }
        else {
            alert('Not enough funds')
        }
    }

    useEffect(
        () => {
            async function getTransactions() {

                setRecipients(
                    await window.contract.getNames()
                )


                setValues(
                    
                    await window.contract.getTotals()
                )

            }

            getTransactions();
        }, 
        [Balance])




    useEffect(() => {
        async function getData() {
            let Data = await window.account.state();
            changeBalance(Data.amount);
        }
        getData();

    }, [Balance])

    const formatOutput = (text) => {
        text = String(text);
        if (text.includes('.')) {
            let arr = text.split('.')

            arr[1] = arr[1].split('').splice(0, 2).join('')
            console.log(arr)
            return arr.join('.')
        }
        else {
            return text
        }
    }





    return (
       <Container>
           <Row className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Header>NEAR Token Balance </Card.Header>
                <ListGroup variant="flush">
                    
                    <ListGroup.Item>{formatOutput(utils.format.formatNearAmount(String(Balance)))} NEAR Tokens</ListGroup.Item>
                </ListGroup>
            </Card>
            </Row>
            <Row style={{marginTop:'10px'}}className="justify-content-center d-flex">
            <Card>
                <Card.Header>Send Money to a Friend</Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>

                                <input type="text" placeholder="Enter Recipient Here" ref={Recipient} />
                                <input type="text" placeholder="Enter Value Here" ref={ValueInput} />
                            </Col>
                            <Col className="dflex align-items-center justify-content-center">
                                <Button onClick={sendGift}> Submit</Button></Col>
                        </Row>
                        <Row className="justify-content-center d-flex">
                            <Table style={{ marginTop: '10px' }} striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th colSpan="2">Transaction History</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recipients.map((x, index) => {
                                        return (
                                            <tr key={x}>
                                                {console.log('hello')}
                                                {console.log(recipients)}
                                                <td>{x}</td>
                                                <td>{` ${valuesSent[index]} Near`}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </Table>
                        </Row>

                    </Container>
                </Card.Body>

            </Card>
            </Row>
            </Container>
    );
};

SendTokensOut.propTypes = {

};

export default SendTokensOut;