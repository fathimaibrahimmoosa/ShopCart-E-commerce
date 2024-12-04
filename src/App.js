import { createContext, useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from './ProductDetail';
import Productcart from './Productcart';
import Navibar from './Navibar';
import axios from 'axios';
const productContext=createContext(); 

function App() 
{
  const [products,setproducts]=useState();
  const [productId,setproductId]=useState();
  const [searchTerm, setsearchTerm] = useState('');
  const [count,setcount]=useState(0);
  const [cartItems, setCartItems]=useState([]);
  
  const api="https://dummyjson.com/products";
    useEffect(() => 
    {
      
       axios.get(api).then((res)=>setproducts(res.data.products))
      
    }, []);
  

  return (
    <div className="bg-img">
      <productContext.Provider value={{productId,setproductId,products,setproducts,searchTerm,setsearchTerm,count,setcount,cartItems, setCartItems}}>
      <BrowserRouter>
      <Navibar />
     <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/Home" element={<Home home="Home"/>} />
     <Route path="/Signup" element={<Signup home="Signup"/>} />
     <Route path="/ProductDetail" element={<ProductDetail home="ProductDetail"/>}/>
     <Route path="/Productcart" element={<Productcart home="Productcart"/>}/>
     </Routes>
     </BrowserRouter>
     </productContext.Provider>
     
    </div>
  );
}

export default App;
export {productContext}
