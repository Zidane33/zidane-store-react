import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const apiKey = 'pk_test_8tSD0goXvaKagsr3RPuO91zc00Ke7CLlKs';

  const onToken = (token) => {
    axios({
      method: 'POST',
      url: 'http://localhost:8080/charge',
      data: ({
        stripeToken: token.id,
        amount: priceForStripe,
      }),
    }).then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Zidane Store"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={apiKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
