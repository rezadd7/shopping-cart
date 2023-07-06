import React, {useContext} from 'react';
import { useParams, Link } from 'react-router-dom';

//Css
import styles from './ProductDetail.module.css'

//context
import {ProductsContext} from '../context/ProductContextProvider'


const ProductDetail = () => {

    const params = useParams();
    const id = params.id
    const data = useContext(ProductsContext);
    const product = data[id-1];
    const {image, title, description, price, category} = product
   

    return (
        <div className={styles.container}>
           <img src={image} alt='product' className={styles.image}/>
           <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p  className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category: </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/product">Back to shop</Link>
                </div>
           </div>
        </div>
    );
};

export default ProductDetail;