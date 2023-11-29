import { lazy } from 'react';
const Cart = lazy(() => import("../../components/Cart/Cart"));

function Checkout() {
    return (
       <Cart />
    );
}
export default Checkout;
