import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { fetchProductList } from '../redux/services/productListServices'
import ProductList from './ProductList'

const ProductListContainer = () => {
    const dispatch=useDispatch();
    const products = useSelector((state)=>state.products.payload);
    console.log("🚀 ~ file: ProductListContainer.js ~ line 9 ~ ProductListContainer ~ products", products)
    

    const fetchProductlist=()=>{
        return dispatch(fetchProductList())
    }

    useEffect(() => {
     fetchProductlist()
     console.log("🚀 ~ file: ProductListContainer.js ~ line 8 ~ useEffect ~ fetchProductList", fetchProductList)
    }, [])
    
  return (
   <ProductList/>
  )
}

export default ProductListContainer