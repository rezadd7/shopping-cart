import React, { useContext } from 'react';
import { Link } from 'react-router-dom';



//Context
import { CartContext } from '../context/CartContextProvider';

//Component
import Cart from './shared/Cart';


const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div className=' flex justify-between items-start mt-[150px] mx-[200px] mb-[50px] transition-all ease-in  Ise:mt-[120px] Ise:mx-[20px] Ise:mb-[50px] max-md:flex-col max-md:items-center'>
            <div className=' w-[70%]'>
                {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter > 0 && <div className=' w-[27%] bg-white border rounded-[5px] text-left max-md:w-[70%]'>
                            <p className=' text-slate-800 mt-[20px] mx-[20px] mb-[10px] font-semibold'><span className=' text-[#1a73e8] font-bold'>Total Items: </span>{state.itemsCounter}</p>
                            <p className=' text-slate-800 mt-[20px] mx-[20px] mb-[10px] font-semibold'><span className=' text-[#1a73e8] font-bold'>Total Payments: </span>{state.total} $</p>
                            <div className=' flex justify-between align-baseline mt-[50px] mx-[20px] mb-[10px]'>
                                <button onClick={()=> dispatch({type: "CHECKOUT"})} className=' inline-block bg-[#34a853] text-white py-[7px] px-[16px] font-bold rounded-[5px] border-none mb-[20px] transition-all ease-in cursor-pointer hover:bg-[#167d32] shadow-cart '>Checkout</button>
                                <button onClick={()=> dispatch({type: "CLEAR"})} className=' cursor-pointer bg-none text-sm transition-all ease-in text-[#34a853] font-bold hover:text-[#167d32] '>Clear</button>
                            </div>
                    </div>
            }

            {
                state.checkout && <div className=' flex-col justify-center items-center w-full max-md:flex-col max-md:justify-center max-md:items-center'>
                    <h3 className='mt-[30px] mb-[50px] font-semibold text-[#167d32] text-4xl'>Check out Successfully</h3>
                    <Link to="/products" className=' bg-[#1a73e8] text-white inline-block h-[30px] rounded-[4px] text-center cursor-pointer transition-all ease-in w-[90px] font-bold leading-6 hover:bg-[#08499d]'>By More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div className=' flex-col justify-center items-center w-full max-md:flex-col max-md:justify-center max-md:items-center'>
                    <h3 className='mt-[30px] mb-[50px] font-semibold text-black text-4xl'>Want to buy?</h3>
                    <Link to="/products" className=' bg-[#1a73e8] text-white inline-block h-[30px] rounded-[4px] text-center cursor-pointer transition-all ease-in w-[90px] font-bold leading-6 hover:bg-[#08499d]'>Go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;