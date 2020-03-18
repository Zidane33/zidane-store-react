import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const apiKey = 'pk_test_8tSD0goXvaKagsr3RPuO91zc00Ke7CLlKs';

    return (
        <StripeCheckout
            label='Pay Now'
            name='Zidane Store'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            stripeKey={apiKey}
        />
    )
    
}

export default StripeCheckoutButton;
