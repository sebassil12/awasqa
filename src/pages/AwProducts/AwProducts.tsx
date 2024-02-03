import { Link, Outlet } from "react-router-dom";
import awproduct from "./styles/awproduct.module.css"
import AwMenuProducts from "../../components/Aw-Menu-Products/AwMenuProducts";
function AwProduct() {
    return ( 
        <section className={awproduct.container}>
            <h1 className={awproduct.title}>PRODUCTOS</h1>
            <p className={awproduct.contact}>¿Tienes algún modelo especial en mente? <Link to={"/contacts"}>Consulta conmigo</Link></p>
            <AwMenuProducts />
            <div className={awproduct.sections_container}>

            <Outlet />
            </div>
            
        </section>
    );
}

export default AwProduct;