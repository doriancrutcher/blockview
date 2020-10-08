import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { async } from 'regenerator-runtime';
import {Card,ListGroup,ListGroupItem,Table} from 'react-bootstrap';


const FullAccess = props => {

       const [FullAccessKeys,ChangeKeys]=useState([]);



        useEffect(
            ()=>{
                async function getKeys(){
                  let  keyArr=await window.account.getAccessKeys()
                  let counter=0;
                  let OutputArr=keyArr.map((x,index)=>{
                      
                      if(x.access_key.permission==="FullAccess"){
                          counter=counter+1;
                          return (
                              <tr key={counter}>
                                  <td>{counter}</td>
                                    <td>{x.public_key}</td>
                              </tr>
                          )
                      }
                  })
                  ChangeKeys(OutputArr)
                }
                getKeys();
            },[]
        )


    return (
        <div>
       <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th colSpan="2">Full Access Key Pairs</th>
    </tr>
  </thead>
  <tbody>
        {FullAccessKeys.map(x=>{return x})}
  </tbody>
</Table>
          

        </div>
    );
};

FullAccess.propTypes = {
    
};

export default FullAccess;