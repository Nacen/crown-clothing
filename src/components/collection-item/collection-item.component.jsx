import React from "react";

import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.action";

import {CollectionItemContainer, CollectionItemImage, CollectionFooter, AddButton, PriceContainer, NameContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem}) => {
  const { name , imageUrl, price } = item;
  return (
  <CollectionItemContainer>
    <CollectionItemImage className="image" imageUrl={imageUrl} />
    <CollectionFooter>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>{price}</PriceContainer>
    </CollectionFooter>
    <AddButton onClick={() => addItem(item)} inverted>
      Add to Cart
    </AddButton>
  </CollectionItemContainer>
);}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
