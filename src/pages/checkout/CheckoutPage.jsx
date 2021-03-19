import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeButton from '../../components/stripe-button/StripeButton';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import './checkout.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
    {total > 0 ? <>
    <h2 className='test-warning'>*STRIPE TEST CARD* 4242 4242 4242 4242 - Exp: 01/22 - CW: 123</h2>
    <StripeButton price={total}/> 
    </>
    : ''}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);