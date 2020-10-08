import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {Card,ListGroup} from 'react-bootstrap';





const TokenBalance = props => {

    const [Balance,changeBalance]=useState(0);


    useEffect(()=>{
          async function getData(){
            let Data=await window.account.state();
            changeBalance(Data.amount);
          }
        getData();
      
    },[])

    const formatOutput=(text)=>{
        text=String(text);
        if(text.includes('.')){
       let arr=text.split('.')
      
       arr[1]=arr[1].split('').splice(0,2).join('')
       console.log(arr)
       return arr.join('.')}
       else{
           return text
       }
    }


    return (

        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Header>NEAR Token Balance </Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>{formatOutput(utils.format.formatNearAmount(String(Balance)))} NEAR Tokens</ListGroup.Item>
  </ListGroup>
</Card>
        </div>
    );
};

TokenBalance.propTypes = {
    
};

export default TokenBalance;