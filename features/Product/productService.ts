import axios from 'axios';
  
 

  // Product Data  
const productData = async (input: any) => {  
  const { data } = await axios.get(`https://dummyjson.com/products/posts?_limit=10`)  
   return data
};
 
 
   
const authService = { 
  productData, 
}

export default authService
