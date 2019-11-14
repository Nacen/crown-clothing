import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.action";

import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  CheckoutItemImage,
  CheckoutItemField,
  CheckoutItemQuantityContainer,
  CheckoutItemChangeQuantity,
  CheckoutItemQuantityValue,
  RemoveCheckoutItemButton
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage src={imageUrl} alt={`${name} item`} />
      </CheckoutItemImageContainer>
      <CheckoutItemField>{name}</CheckoutItemField>
      <CheckoutItemQuantityContainer>
        <CheckoutItemChangeQuantity onClick={() => removeItem(cartItem)}>
          &#10094;
        </CheckoutItemChangeQuantity>
        <CheckoutItemQuantityValue>{quantity}</CheckoutItemQuantityValue>
        <CheckoutItemChangeQuantity onClick={() => addItem(cartItem)}>
          &#10095;
        </CheckoutItemChangeQuantity>
      </CheckoutItemQuantityContainer>
      <CheckoutItemField>{price}</CheckoutItemField>
      <RemoveCheckoutItemButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveCheckoutItemButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
