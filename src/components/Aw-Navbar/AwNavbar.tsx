import { Link } from "react-router-dom";
import { LOGO, SVG_DECORATION } from "../../constants/constants";
import awnavbar from "./styles/awnavbar.module.css";
import { useResponsive } from "../../service/ResposiveService";
import { useState } from "react";

function AwNavbar() {
    const [isModal, setIsModal] = useState();
    const isMobile = useResponsive();
    return ( 

        <nav className={awnavbar.nav_container}>
            <div className={awnavbar.logo_container}>
                <img src={LOGO.aw_main} width={100}/>
                <h1 className={awnavbar.brand}>Awasqa</h1>
            </div>
            {isMobile ? (
                <div>
                    <img src={SVG_DECORATION.burger} width={50}/>
                </div>
                
            ) : (
                <ul className={awnavbar.list}>
                <li className={awnavbar.list_item}>
                    <Link to={"/"}><p className={awnavbar.item}>INICIO</p></Link>
                </li>
                <li className={awnavbar.list_item}>
                    <Link to={"/products/flowers"}><p className={awnavbar.item}>PRODUCTOS</p></Link>
                </li>
                <li className={awnavbar.list_item}>
                    <Link to={"/contacts"}><p className={awnavbar.item}>CONTACTOS</p></Link>
                </li>
            </ul>
            )}
            

        </nav>
    );
}

export default AwNavbar;