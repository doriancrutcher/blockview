import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';

const FunctionCallKey = props => {

    const [FunctionCallKeys,ChangeKeys]=useState([]);

    useEffect(
        ()=>{
            async function getKeys(){
              let  keyArr=await window.account.getAccessKeys()
              let counter=0;
              let OutputArr=keyArr.map((x,index)=>{
            
                  if(x.access_key.permission!=="FullAccess"){
                    console.log(x)
                      counter=counter+1;
                      return (
                          <tr key={counter}>
                              <td>{counter}</td>
                                <td>{x.public_key}</td>
                                <td>{x.access_key.nonce}</td>
                                <td>{utils.format.formatNearAmount(x.access_key.permission.FunctionCall.allowance).split('').splice(0,4)}</td>
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
  <th colSpan="4">Function Call Key Pairs</th>
</tr>
</thead>
<thead>
<tr>
  <th></th>
  <th>Public Key Pairs</th>
  <th>Nonce</th>
  <th>Allowance</th>
</tr>
</thead>
<tbody>
    {FunctionCallKeys.map(x=>{return x})}
</tbody>
</Table>
      

    </div>
);
};





export default FunctionCallKey;