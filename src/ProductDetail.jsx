import React, { useContext } from 'react';
import { productContext } from './App';
import { Button, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProductDetail() 
{
    const { products, productId, cartItems, setCartItems,count,setcount } = useContext(productContext);

    const navigate = useNavigate();

    let [prodctitem] = products.filter((data) => data.id === productId);

    const addToCart=  ()=>  
    {
        const itemInCart = cartItems.find((item) => item.id === prodctitem.id);
        if (itemInCart) 
        {
          setCartItems(
            cartItems.map((item) =>
                item.id === prodctitem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
              )
            );
            setcount(count);
        } 
        else 
        {
            setCartItems([...cartItems, { ...prodctitem, quantity: 1 }]);
            setcount(count+1);
        }
        
        navigate('/productcart');
       
    };

    return (
        <div style={{height: '100vh',margin:"7px" }}>
            <h2>Product Details</h2>
            <h3>{prodctitem?.title}</h3>

            <img
                src={prodctitem?.images[0]}
                style={{ width: '200px', height: '200px',border:"1px solid"}}
                alt=""
            />
            <p>
                <b>Description:</b> {prodctitem?.description}<br />
                <b>Price: ₹</b> {prodctitem?.price}<br />
                <b>Return policy:</b> {prodctitem?.returnPolicy}<br />
                <b>Shipping Information:</b> {prodctitem?.shippingInformation}<br/>
                <Rating name="customized-10" defaultValue={prodctitem?.rating} max={10} />
            </p>

            <Button variant="contained" onClick={()=>{addToCart()}}>
            Add to Cart</Button>
               
        </div>
    );
}

export default ProductDetail;
