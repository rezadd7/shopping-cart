import React, {useContext} from 'react';
import { Link } from 'react-router-dom';


//Context
import { CartContext } from '../../context/CartContextProvider';

//Icons
import shopIcons from '../../assets/icons/shop.svg'



const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className=' bg-white  fixed top-0 w-full shadow-nav'>
            <div className='flex justify-between items-center h-[75px] py-[15px] px-[180px] max-Ise:py-[15px] max-Ise:px-[20px] max-desktop:py-[15px] max-IpA:py-[15px] max-IpA:px-[40px] max-desktop:px-[80px]'>
                <Link to="/products" className=' text-[#1a73e8] font-bold border-b-4 border-[#1a73e8] rounded-[2px] py-1 transition-all'>Products</Link>
                <div className=' relative'>
                    <Link to="/cart" ><img src={shopIcons} alt="shop icon" className=' w-[40px]'/></Link>
                    <span className=' absolute top-0 right-0 bg-[#0b499b] rounded-[50%] w-[18px] h-[18px] leading-[18px] text-[0.75rem] text-center font-bold text-white'>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;