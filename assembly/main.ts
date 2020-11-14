

import { Context, logging, PersistentMap, storage } from "near-sdk-as";

const recipientList = new PersistentMap<string,string[]>('tt');
const totalsSent= new PersistentMap<string,i32[]>('mm');
const currentUser:string=Context.sender

export function addFunds(recipient:'string',amount:i32):void{
    if (recipientList.contains(Context.sender)){
        let getList=recipientList.getSome(Context.sender)
        let getTotals=totalsSent.getSome(Context.sender)

        if(getList.includes(recipient)){
        let getIndex=getList.indexOf(recipient)
        let oldTotal=getTotals[getIndex];
        let newTotal=oldTotal+amount;
        getTotals[getIndex]=newTotal
        totalsSent.set(Context.sender,getTotals)
          }else{
              getList.push(recipient)
              recipientList.set(Context.sender,getList)
              getTotals.push(amount)
              totalsSent.set(Context.sender,getTotals)
          }
    }else{
        
        recipientList.set(Context.sender,[recipient])
        totalsSent.set(Context.sender,[amount])
    }
       
    
}


export function getNames(name:string):string[]{
    logging.log(Context.sender)
    if(recipientList.contains(name))
    { return recipientList.getSome(name)}else{
        return []
    }
    
    }

export function getTotals(name:string):i32[]{
    if(totalsSent.contains(name))
    { return totalsSent.getSome(name)}else{
        return []
    }
}
