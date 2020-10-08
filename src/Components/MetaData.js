import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap'
import { async } from 'regenerator-runtime';

const MetaData = props => {


   const [metaData,changeMetaData]=useState({});

   useEffect(()=>{
    async function getData(){
    let Data=await window.account.state();
    console.log(Data);
    changeMetaData(
        Data
    )
    }
    getData();

   },[])

   

    return (
        <div>
         
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Data Title</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Amount</td>
    <td>{metaData.amount}</td>
    </tr>    
    <tr>
      <td>Locked</td>
      <td>{metaData.locked}</td>

    </tr>    
    <tr>
      <td>Code Hash</td>
      <td>{metaData.code_hash}</td>
    </tr>    
    <tr>
      <td>Storage Usage</td>
      <td>{metaData.storage_usage}</td>
    </tr>    
    <tr>
      <td>Storage Paid At</td>
      <td>{metaData.storage_paid_at}</td>
    </tr>   
     <tr>
      <td>Block Height</td>
      <td>{metaData.block_height}</td>
    </tr>
     <tr>
      <td>Block Hash</td>
      <td>{metaData.block_hash}</td>
    </tr>
  </tbody>
</Table>
            
        </div>
    );
};



export default MetaData;