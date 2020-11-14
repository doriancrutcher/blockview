import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import {Navbar,Nav,NavDropdown, Container, Row, Col,Card,Button} from 'react-bootstrap'
import getConfig from './config'
import './scss/AppStyles.scss'
import MetaData from './Components/MetaData'
import TokenBalance from './Components/TokenBalance'
import ActiveKeys from './Components/ActiveKeys'
import SendTokensOut from './Components/SendTokensOut'
//import ContractVerification from './Components/ContractVerification/ContractVerification'

const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {

  return (<React.Fragment>
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand >BlockVIEW</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link onClick={(window.accountId==='')?login:logout}>
      {(window.accountId==='')?'login':window.accountId}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
{(window.accountId!=='')?
<Container style={{marginTop:'5%'}}>
<Row className="d-flex justify-content-center"><MetaData/></Row>
  <Row>
    <Col>
    <Row className="d-flex justify-content-center"><SendTokensOut/></Row>
    </Col>

  </Row>
  <Row className="d-flex justify-content-center"><ActiveKeys/></Row>
  {/* <Row className="d-flex justify-content-center"><ContractVerification/></Row> */}
  </Container>
  
:<Card>
<Card.Header as="h5">Hello User! </Card.Header>
<Card.Body>
  <Card.Title>Please Login </Card.Title>
  <Card.Text>
   This Application Will Not Work Otherwise, Sorry Not Sorry :)
  </Card.Text>
  <Button onClick={login} variant="primary">Login NOW</Button>
</Card.Body>
</Card>


}

</React.Fragment>
  )
}
