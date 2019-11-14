import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemDetail,
  CartItemImage
} from "./cart-item.styles";


const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt={`${name} item`} />
    <ItemDetailsContainer>
      <ItemDetail>{name}</ItemDetail>
      <ItemDetail>
        {quantity} x ${price}
      </ItemDetail>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
