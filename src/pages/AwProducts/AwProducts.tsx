import { Outlet } from "react-router-dom";
import AwCategories from "../../components/Aw-Categories/AwCategories";
import awproduct from "./styles/awproduct.module.css"
function AwProduct() {
    return ( 
        <section>
            <h1 className={awproduct.title}>PRODUCTOS</h1>
            <AwCategories />
            <div>

            <Outlet />
            </div>
            
        </section>
    );
}

export default AwProduct;