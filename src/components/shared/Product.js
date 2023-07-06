import React, {useContext} from 'react';
import { Link } from 'react-router-dom';



//Context
import { CartContext } from '../../context/CartContextProvider';


//Function
import { shorten,isInCart, quantityCount } from '../../helpers/functions';

//Icon
import Trash from '../../assets/icons/trash.svg'


const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext)


    return (
        <div className=' w-[250px] border rounded-[10px] overflow-hidden bg-white mx-[10px] mt-[50px] transition-all ease-in text-center hover:shadow-3xl'>
            <img src={productData.image} alt={productData.title} className=' w-[230px] h-[200px] m-[10px]'/>
            <h3 className='text-left text-slate-700 mt-[25px] mx-[20px] mb-[15px]'>{shorten(productData.title)}</h3>
            <p className=' text-left text-slate-700 my-[15px] mx-[20px]'>{productData.price} $</p>
            <div className=' flex justify-between text-center mt-[35px] mx-[20px] mb-[20px]'>
                <Link to={`/products/${productData.id}`} className=' text-lg  text-sky-500 cursor-pointer'>Details</Link>
                <div>
                    {
                        isInCart(state, productData.id) ?
                        <button onClick={() => dispatch({type: "INCREASE", payload: productData})}  
                                className=' border-1 border-sky-500 bg-sky-500 px-3 py-1 rounded-[10px] text-white hover:bg-sky-400 ml-1 align-middle'>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})} 
                                className=' border-1 border-sky-500 bg-sky-500 px-3 py-1 rounded-[10px] text-white hover:bg-sky-400 ml-1 align-middle'>Add to cart</button> 
                    }
                    {quantityCount(state, productData.id) > 1 && <button  onClick={()=> dispatch({type: "DECREASE", payload: productData})} 
                                                                            className=' border-1 border-sky-500 bg-sky-500 px-3 py-1 rounded-[10px] text-white hover:bg-sky-400 ml-1 align-middle'>-</button>}

                    {quantityCount(state, productData.id) === 1 && <button    onClick={()=> dispatch({type: "REMOVE_ITEM", payload: productData})}  
                                                                            className=' border-1 border-sky-500 bg-sky-500 px-2 py-1 rounded-[8px] text-white hover:bg-sky-400 ml-1 align-middle text-[20px]'><img src={Trash} alt='trash' className=' w-[23px]'/></button>}
                </div>
            </div>
        </div>
    );
};

export default Product;
