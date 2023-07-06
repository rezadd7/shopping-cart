import React,{ useContext } from 'react';


//Context
import { ProductsContext } from '../context/ProductContextProvider';

//Component
import Product from './shared/Product';



const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className=' flex flex-wrap justify-between Ise:justify-center IpA:justify-around mt-[150px] mx-[120px] max-IpA:mx-[50px]'>
            {
                products.map(item =><Product 
                                            key={item.id} 
                                            productData={item}
                                            
                                    />)
            }
        </div>
    );
};

export default Store;