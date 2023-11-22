import { lazy } from 'react';
const ProductBlock = lazy(() => import("../../components/ProductBlock/ProductBlock"));
function Checkout() {
    
    return (
       <ProductBlock 
            productNumber={1}
        />

    );
}
export default Checkout;
