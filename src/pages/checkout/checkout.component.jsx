import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeader,
  CheckoutTotal,
  TestWarning
} from "./checkout.styles";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, cartTotalPrice }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <div>Product</div>
      <div>Name</div>
      <div>Quantity</div>
      <div>Price</div>
      <div>Remove</div>
    </CheckoutHeader>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <CheckoutTotal>TOTAL: ${cartTotalPrice}</CheckoutTotal>

    {/*  For Development Purposes Only */}
    <TestWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Expiration: 01/21 - CVV:123
    </TestWarning>
    <StripeCheckoutButton price={cartTotalPrice} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalPrice: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
