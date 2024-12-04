import React, { useContext } from 'react';
import { productContext } from './App';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navibar() 
{
    const {count,setsearchTerm}=useContext(productContext);

    return (
      <div> 
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>

          <Navbar.Brand href="">                 
            {/* <Link to='/Home'><img src="/prologo.png" alt="bug" style={{width:"40px"}} /></Link> */}
            <img src="/prologo.png" alt="bug" style={{width:"40px"}} />  Shop Cart
          </Navbar.Brand>
    
            <input className='inputcontainer' placeholder='Type to search...'
             onChange={(e) => setsearchTerm(e.target.value)}>
            </input>

            <Link style={{textDecoration:"none", color:"black"}} to="/">
            <Nav.Link href="#login" style={{fontWeight:"bolder",marginLeft:"80px",border:"white"}}>Login</Nav.Link>
            </Link>

            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Link to='/Productcart'><ShoppingCartIcon/></Link>
                <div className='badge'>{count}</div>
              </Navbar.Text>
            </Navbar.Collapse>
       
        </Container>
      </Navbar>
      </div>
    )
}

export default Navibar