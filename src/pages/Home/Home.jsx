
import { lazy } from 'react';
const ProductBlock = lazy(() => import("../../components/ProductBlock/ProductBlock"));
function Home() {
    
    
    return (      
        <ProductBlock 
                 />
    );
}
export default Home;
