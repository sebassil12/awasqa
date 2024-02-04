import { Link } from "react-router-dom";
import awbutton from "./styles/awbutton.module.css";
import { SVG_DECORATION } from "../../constants/constants";
function AwButton() {
    return ( 
        <Link to={"/products"}>
            <button className={awbutton.button_container}>
                <div className={awbutton.button_contain_text}>
                <p className={awbutton.button_description}>PRODUCTOS 
                </p>
                <img src={SVG_DECORATION.arrow} className={awbutton.arrow}/>
                </div>
            </button>
        
        
        </Link>
    );
}

export default AwButton;