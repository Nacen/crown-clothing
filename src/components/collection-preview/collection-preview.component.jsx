import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  CollectionTitle,
  PreviewContainer
} from "./collection-preview.styles";

const NumItemsToPreview = (items, noOfItems) =>
  items.filter((item, index) => index < noOfItems);

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
    <PreviewContainer>
      {NumItemsToPreview(items, 4).map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
