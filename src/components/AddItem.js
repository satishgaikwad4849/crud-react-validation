import { React } from 'react';
import { useDispatch } from 'react-redux';
import { Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { addItem } from './ItemSlice';
import { useFormik } from "formik";
import * as yup from "yup";
import Card from 'react-bootstrap/Card'

const schema = yup.object().shape({
  itemName: yup.string().min(3,"Must be more than 3 characters").required("Item name is required"),
  itemQuantity: yup.number().typeError("Please enter a valid number").min(3).required("Item Quantity is required "),
});

export const AddItem = ()=> {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      itemName: "",
      itemQuantity: "",
    },
    validationSchema: schema,
    onSubmit:( values,{resetForm})=> {
      dispatch(addItem( values))
      resetForm()
    },
  });

  return(
    <>
    <div className="mt-3">
      <Card  style={{marginTop:50}} className="p-3" >
        <Form onSubmit={formik.handleSubmit}>
          <Form.Control type="text"   placeholder='Enter Name'   id="itemName"  name="itemName" value={formik.values.itemName}  onChange={ formik.handleChange}/>
          <p class="text-danger">{formik.errors.itemName}</p>
          <Form.Control type="text"  placeholder='Enter Quantity'  id="itemQuantity"  name="itemQuantity" value={formik.values.itemQuantity} onChange={ formik.handleChange}/>
          <p class="text-danger">{formik.errors.itemQuantity}</p>
            <Button  type="submit" variant="info" className="mb-3">
              Add Item
            </Button>
        </Form>
      </Card>
      </div>       
    </>
  );
}