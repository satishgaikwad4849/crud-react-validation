import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import {useSelector } from 'react-redux';
import { useFormik } from "formik";
import * as yup from "yup";


const schema = yup.object().shape({
  firstName: yup.string().min(3).required("Name is required"),
  password: yup.string().required("Password is required").matches(
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Lowercase, One Number and One Special Case Character"
  )
});

export default function Signin() {
const navigate = useNavigate();
const users = useSelector(state => state.items_.users);

const formik = useFormik({
  initialValues: {
    firstName: "",
    password: "",
  },
  validationSchema: schema,
  onSubmit: values => {
    users.filter((user)=>{
      if(user.name===values.firstName && user.password===values.password){
        navigate("/admin",{state:user.role})
        return true;
      }else{
        return false
      }
    })
  },
});

return (
  <>
    <Container className="App">
      <Row>
        <Col md={4}></Col>
          <Col md={4}> 
          <Card style={{marginTop:120}}>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Control type="text" className="mt-3"   id="firstName"  name="firstName" value={formik.values.firstName} placeholder='Name' onChange={ formik.handleChange}/>
                <p class="text-danger">{formik.errors.firstName}</p>
                <Form.Control type="text" className="mt-3"    id="password" name="password" value={formik.values.password} placeholder='Password' onChange={ formik.handleChange }/>
                <p class="text-danger">{formik.errors.password}</p>
                <Button  className="mt-2" type="submit"  variant="info">
                SignIn
              </Button>
              </Form>      
            </Card.Body>
          </Card>       
          </Col>
          <Col md={4}></Col>
      </Row>
    </Container>
  </>
)
}
