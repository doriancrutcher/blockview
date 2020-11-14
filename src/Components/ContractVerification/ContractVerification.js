import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {Card, Container,Row} from 'react-bootstrap';
import 

const ContractVerification = props => {


   const dropHandler=(event)=> {


  // calls the drag leave event handler 
  dragLeaveHandler(event)

  // prevents default action from occuring 
  event.preventDefault();

  console.log('Drag and drop detected');

  if (event.dataTransfer.items) {
    console.log('Using DataTransferItemList interface to access the file(s)')

    const items = Array.from(event.dataTransfer.items).map(item => item.getAsFile())
    const contracts = items.filter(isNearContract)
    const others = items.filter(item => !isNearContract(item))

    ;
    [{
      type: 'NEAR Contracts',
      set: contracts
    }, {
      type: 'Other Files',
      set: others
    }].forEach(({
      type,
      set
    }) => {
      const report = set.map(file => {
        return new Promise((resolve, reject) => {
          const {
            name,
            size,
            type,
            lastModified
          } = file

          if (type === 'application/wasm') {
            const reader = new FileReader()

            reader.onload = (event) => {
              const code_hash = Base58.encode(sha256.digest(event.target.result))
              resolve({
                size,
                name,
                code_hash,
                type,
                lastModified: Date(lastModified)
              })
            }

            reader.readAsArrayBuffer(file)
          } else {
            resolve({
              size,
              name,
              type,
              lastModified: Date(lastModified)
            })
          }
        })
      })

      Promise.all(report).then(results => {
        console.log('')
        console.info(`Report for ${type})
        console.table(results)
      })
    })

  } else {
    console.log('Using DataTransfer interface to access the file(s)')
    for (let i = 0; i < event.dataTransfer.files.length; i++) {
      console.log(event.dataTransfer.files)
      console.log('... file[' + i + '].name = ' + event.dataTransfer.files[i].name);
    }
  }
}

    return (
        <div>
            <Card>
                <Card.Header> Contract Verification</Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <div className="dragAndDrop">
                                
                            </div>
                        </Row>
                    </Container>
                    
                </Card.Body>

            </Card>
        </div>
    );
};

ContractVerification.propTypes = {
    
};

export default ContractVerification;