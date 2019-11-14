import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";

import {
  ShoppingIconContainer,
  CartIconcontainer,
  ItemCountContainer
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconcontainer onClick={toggleCartHidden}>
    <ShoppingIconContainer>
      <ShoppingIcon />
    </ShoppingIconContainer>
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconcontainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
