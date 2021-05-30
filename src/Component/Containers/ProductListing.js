import axios from 'axios';
import React, { useEffect } from 'react';
import {setProducts} from '../Redux/Actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import './ProductListing.css'

const ProductListing = () => {
 const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
    return (
        <div className="ui row d-flex align-items-center p-5 m-5">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;