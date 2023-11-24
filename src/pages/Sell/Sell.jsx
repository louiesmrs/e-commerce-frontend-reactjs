import { lazy } from "react";
const SellBlock = lazy(() => import("../../components/SellBlock/SellBlock"));
const Sell = () => {

    return (
    <>
       <SellBlock />
    </>
    );
    }

export default Sell;