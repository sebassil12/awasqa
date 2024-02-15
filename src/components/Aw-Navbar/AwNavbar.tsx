import { Link } from "react-router-dom";
import { LOGO, SVG_DECORATION } from "../../constants/constants";
import awnavbar from "./styles/awnavbar.module.css";
import { useResponsive } from "../../service/ResposiveService";
import { useState } from "react";

function AwNavbar() {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);


    const isMobile = useResponsive();
    return ( 

        <nav className={awnavbar.nav_container}>
            <div className={awnavbar.logo_container}>
                <img src={LOGO.aw_main} width={100}/>
                <h1 className={awnavbar.brand}>Awasqa</h1>
            </div>
            {isMobile ? (
                <div className={awnavbar.burger_container} >
                    {isOpenMenu ? (
                        <img src={SVG_DECORATION.cancel} width={50} className={awnavbar.burger} onClick={()=>setIsOpenMenu(false)}/>
                    ):(
                        
                        <img src={SVG_DECORATION.burger} width={50} className={awnavbar.burger} onClick={()=>setIsOpenMenu(true)}/>
                    )}
                    
                </div>
                
            ) : (
                null
            )}
            <ul className={awnavbar.list} style={{'display':isOpenMenu ? 'block' : 'none'}}>
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

        </nav>
    );
}

export default AwNavbar;