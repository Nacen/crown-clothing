import React from "react";
import { withRouter } from "react-router-dom";

import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubTitle,
  ContentTitle,
  MenuItemContainer
} from "./menu-item.styles";

const MenuItem = ({
  title,
  subtitle,
  imageUrl,
  size,
  history,
  linkUrl,
  match
}) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubTitle>{subtitle}</ContentSubTitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
