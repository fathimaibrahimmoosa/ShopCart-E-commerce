import React, { useContext } from 'react';
import { productContext } from './App';
import { Button } from '@mui/material';
import './productcart.css'

function Productcart() 
{
    const { cartItems, setCartItems,count,setcount } = useContext(productContext);

    const TotalPrice =  cartItems.reduce((total, item) =>total + item.price * item.quantity,0);  

    const removeFromCart = (id) => 
    {
        setCartItems(cartItems.filter((item) => item.id !== id));
        setcount(count-1);
    };

    const updateQuantity = (id, quantity) => 
    {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: quantity } : item
            )
        );
    };

    return (
      <div className='right'>
        
          {cartItems.length === 0 ? 
            (
              <p style={{color: "white",fontSize:'30px'}}>Your cart is empty.</p>
            ) : (
                 <div className='cart'>
                  {cartItems.map((item) => (
                    <div key={item.id}>
                       <img src={item?.thumbnail} style={{width:"100px",height:"100px",border:"1px solid black"}} alt=""/>
                        <div  className='title-container' >
                          <h4>{item.title}</h4>
                           
                           Price: ₹{item.price} x {item.quantity}<br/>
                            <Button style={{border:"1px solid",color:"black"}} onClick={() => updateQuantity(item.id, item.quantity + 1)}> + </Button>
                            <Button style={{border:"1px solid",margin:"5px",color:"black"}} onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity === 1}> - </Button>
                            <Button style={{border:"1px solid",color:"black"}} onClick={() => removeFromCart(item.id)}>Remove</Button>                           
                            </div>   
                    </div>
                  ))}
                </div>                
            )}
            
            <div className='totalprice-container'>
            <h3>Total Price: ₹{TotalPrice.toFixed(2)}</h3>
            </div>
            
      </div>
    );
}

export default Productcart;