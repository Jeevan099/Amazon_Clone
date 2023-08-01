import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  const history = useHistory();

  useEffect(() => {
    console.log("checkout....");

    // Auto-reload the component when routed to '/checkout'
    const unlisten = history.listen(() => {
      window.location.reload();
    });

    // Cleanup the listener when the component unmounts
    return () => unlisten();
  }, [history]);

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='check_out'
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className='checkout_title'>Your Shopping Basket</h2>
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
