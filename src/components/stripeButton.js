import StripeCheckout from "react-stripe-checkout";
import { Button } from "./button";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JjLl2FWHf9x5HsLth8fyBzaLKfu8EsZkd0Xm7FI1ZNC7hf0Ph1G7eFPYx5yhpPajSX45mJziIfagUGfKIluv6d200IbY7Glon';

    const onToken = token => {
        console.log(token);
        alert('Payment successful!');
    }

    return (
        <StripeCheckout
            name="Fashion ng."
            description={`Your price total is NGN${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        >
            <Button type="button" theme="gold" text="Confirm order and pay now" icon="feather-arrow-right-circle"/>
        </StripeCheckout>
    )
}

export default StripeCheckoutButton;