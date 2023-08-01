import React from 'react'

import './Header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useStateValue } from './StateProvider'
function Header() {
    const[{basket}, dispatch] = useStateValue();
  return (
    <div className='header'>
        <Link to="/">
        <img className='header_logo'
        src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
       
        <div
            className='header_search'>
                <input className='header_searchInput' type="text"/>
                <div className="header_searchIcon">🔍</div>

        </div>
        <div
            className="header_nav">
                <div className="header_option">
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign in</span>
                </div>
                <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'> & Orders</span>
                </div>
                <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
                </div>
                <Link to='/checkout'>
                <div className='header_optionBasket'>🛒
                <span className='header_optionLineTwo header_basketCount'>
                    {basket?.length}
                </span>
                </div>
                </Link>
                
        </div>
    </div>
  )
}

export default Header