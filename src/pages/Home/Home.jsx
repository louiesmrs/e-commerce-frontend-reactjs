
import { Suspense, lazy } from 'react';
const ProductBlock = lazy(() => import("../../components/ProductBlock/ProductBlock"));
function Home() {
    
    
    return (    
        <Suspense fallback={<Loading />}>
            <ProductBlock/>
         </Suspense>  
    );
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }


export default Home;
