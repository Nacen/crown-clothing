import styled, { css } from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

const fieldStyles = css`
  width: 23%;
`;

export const CheckoutItemField = styled.span`
  ${fieldStyles};
`;

export const CheckoutItemQuantityContainer = styled.span`
  ${fieldStyles};
  display: flex;
`;

export const CheckoutItemChangeQuantity = styled.div`
  cursor: pointer;
`;

export const CheckoutItemQuantityValue = styled.span`
  margin: 0 10px;
`;

export const RemoveCheckoutItemButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
