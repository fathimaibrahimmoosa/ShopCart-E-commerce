import React, { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import { productContext } from './App';

const Home=() =>
{
   const {setproducts,setproductId,searchTerm}=useContext(productContext)
   const [product, setproduct] = useState([]);

    const api="https://dummyjson.com/products";
    useEffect(() => 
    {
      
       axios.get(api).then((res)=>setproduct(res.data.products))
      
    }, []);
    
    //Pagination
  // const perpage_products=5;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [recordsPerPage] = useState(5);
  // const totalPages = Math.ceil(product.length / perpage_products);
  // const lastIndex=currentPage*perpage_products;
  // const firstIndex=lastIndex*perpage_products;
  // const product1=Array.from(product).slice(firstIndex,lastIndex);
  // const paginate=(pageNumber)=>setCurrentPage(pageNumber);

    setproducts(product);

    const navigate=useNavigate();

    const getProductId=(id)=>
    {
      setproductId(id)
    }
 
  return (
      
    <div className='row'style={{marginLeft:'40px'}}>
    <h1 style={{textAlign:'center'}}>Products</h1>

        {product.filter((item) => {
            return searchTerm.toLowerCase() === ''
              ? item

              : item.title.toLowerCase().includes(searchTerm);
          })
        .map((item)=>{
            return(
                
             <Card onClick={()=>getProductId(item?.id, navigate('/ProductDetail'))} 
                   style={{ width: '10rem', textAlign:'center',margin:'10px'}}>
            
              <Card.Title>{item?.title}</Card.Title>
              <Card.Img variant="top" src={item?.images[0]} style={{width:'8rem', height:'8rem'}} />
              <Card.Body >
              
                <Card.Text>Brand :{item.brand}</Card.Text>
                <Card.Text>Price :₹ {item.price}</Card.Text>
                <Rating name="size-medium" defaultValue={item.rating} />
              
              </Card.Body>
             </Card>        
            ); 
        })}
    </div>
  )
}

export default Home