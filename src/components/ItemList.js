import { Button } from "react-bootstrap";
import { deleteItem } from './ItemSlice';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';

export const ItemList = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items_.items);
  return(
    <> 
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
          <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            items.length >= 1 ? 
            items.map((item) => (		
              item.name != "" ?
              <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>{ ' '}
              {props.loggedInUser==="admin"? <td>
                <Button variant="danger"  onClick={() => { dispatch(deleteItem(item)) }}>x</Button>
              </td>:null}
              
              </tr>
              :null       
          ))
          :null 
          }  
        </tbody>
      </Table>  
		</>
  );
}
