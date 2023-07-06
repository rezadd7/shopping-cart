import React, {useContext} from 'react';

//CONTEXT
import { CartContext } from '../../context/CartContextProvider';

//Functions
import { shorten } from '../../helpers/functions';

//Icons
import TrashIcon from '../../assets/icons/trash.svg'


const Cart = (props) => {

    const {dispatch} = useContext(CartContext)

    const {image, title, price, quantity} = props.data

    return (
        <div className='flex items-center justify-between bg-white p-[15px] border border-stone-400 hover:shadow-3xl mb-[20px] rounded-[6px]  max-IpA:flex-col transition-all ease-in'>
            <img src={image} alt='product' className=' w-[80px] max-IpA:w-[150px]'/>
            <div className=' text-left Ise:text-center'>
                <h3 className=' text-[#1a73e8] mb-[10px] max-IpA:mt-[30px] max-IpA:mx-[20px]'>{shorten(title)}</h3>
                <p className=' text-[#34a856] font-bold max-IpA:mt-[20px] max-IpA:mx-[30px]'>{price} $</p>
            </div>
            <div>
                <span className=' bg-orange-400 w-[25px] h-[25px] leading-6 rounded-[3px] text-white font-bold text-center max-IpA:mx-[10px]'>{quantity}</span>
            </div>
            <div className=' max-IpA:my-[20px] '>
                 {
                    quantity > 1 ?
                    <button onClick={()=> dispatch({type: "DECREASE", payload: props.data})} className=' border-1 border-sky-500 bg-sky-500 px-3 py-1 rounded-[10px] text-white hover:bg-sky-400 ml-1 align-middle'>-</button> :
                    <button onClick={()=> dispatch({type: "REMOVE_ITEM", payload: props.data})} className=' border-1 border-sky-500 bg-sky-500 px-2 py-1 rounded-[8px] text-white hover:bg-sky-400 ml-1 align-middle text-[20px]'><img src={TrashIcon} alt='trash' className=' w-[23px]'/></button>
                 }
                    <button onClick={()=> dispatch({type: "INCREASE", payload: props.data})} className=' border-1 border-sky-500 bg-sky-500 px-3 py-1 rounded-[10px] text-white hover:bg-sky-400 ml-1 align-middle'>+</button> 

            </div>
        </div>
    );
};

export default Cart;