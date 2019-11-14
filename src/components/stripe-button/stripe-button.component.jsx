import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
  console.log(token);
  alert("Payment Successful");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_si9GXnb5DLSaQykQm9OJHYTy00r5JD1nts";

  return (
    <StripeCheckout
      token={onToken}
      label="Pay Now"
      name="CRWN Clothing Ltd."
      stripeKey={publishableKey}
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
    />
  );
};

export default StripeCheckoutButton;
