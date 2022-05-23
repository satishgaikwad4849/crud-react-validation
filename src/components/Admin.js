import React from 'react'
import { useState } from 'react'
import {useLocation,Link} from 'react-router-dom';
import { ItemList } from "./ItemList"
import { AddItem } from "./AddItem"
import { Container, Row, Col,Button} from "react-bootstrap";

export default function Admin() {
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useState(location.state)

  return (
    <div>
      <Container className="App">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>   
            { 
            loggedInUser ==="admin" ? ([<AddItem/>, <ItemList loggedInUser={loggedInUser}/>]) : (<div style={{marginTop:"50px"}}><ItemList loggedInUser={loggedInUser}/></div>)
            }    
          </Col>
          <Col md={3}><div style={{marginTop:50}}><Button  variant="danger"><Link to="/" class="text-white" style={{textDecoration:"none"}} >Logout</Link></Button></div></Col>
        </Row>
      </Container>
     
    </div>
  )
}
