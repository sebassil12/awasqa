import { Link, Outlet } from "react-router-dom";
import awproduct from "./styles/awproduct.module.css"
import AwMenuProducts from "../../components/Aw-Menu-Products/AwMenuProducts";
import { SVG_DECORATION } from "../../constants/constants";
import { useState } from "react";
import AwPresentation from "../../components/Aw-Presentation/AwPresentation";

function AwProduct() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return ( 
        
        <section >
            {isModalOpen ? (
                <section className={awproduct.card_information}>
                <AwPresentation children_content={
                    <section className={awproduct.information_container}>
                        <div className={awproduct.section_top}>

                        <h1 className={awproduct.title}>Información a tomar en cuenta al realizar un pedido</h1>
                        <button onClick={()=>setIsModalOpen(false)} className={awproduct.cancel}>X</button>
                        </div>
                        <ul className={awproduct.steps_container}>
                            <li className={awproduct.steps}>Realizar pedido con mínimo <span className={awproduct.important}>3 días de anticipación.</span></li>
                            <li className={awproduct.steps}>Para separar y asegurar el pedido se debe realizar un <span className={awproduct.important}> abono del 50%</span> del total.</li>
                            <li className={awproduct.steps}>La <span className={awproduct.important}>mitad del pago</span> por transferencia y la respectiva diferencia en efectivo cuando recibas tu pedido.</li>
                        </ul>
                    </section>

                } children_social={undefined} />
                </section>
            ):
            (
                <section className={awproduct.container}>
                <div className={awproduct.top_product}>

                <h1 className={awproduct.title}>PRODUCTOS</h1>
                <div className={awproduct.modal_information}>
                    <img src={SVG_DECORATION.sunflower} width={50} onClick={()=> setIsModalOpen(true)}/>
                    <p>Información de compra</p>
                </div>
                </div>
                <p className={awproduct.contact}>¿Tienes algún modelo especial en mente? <Link to={"/contacts"}>Consulta conmigo</Link></p>
                <AwMenuProducts />
                <div className={awproduct.sections_container}>
    
                <Outlet />
                
                </div>
                </section>
            )}
        </section>
    );
}

export default AwProduct;