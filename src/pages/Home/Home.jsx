
import { lazy } from 'react';
const ProductBlock = lazy(() => import("../../components/ProductBlock/ProductBlock"));
function Home() {
    
    return (
        <ProductBlock 
            productNumber={4} />
    );
}
export default Home;
