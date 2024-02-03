
import { useEffect, useState } from "react";

import awmenuproducts from "./styles/awmenuproducts.module.css";
import { useNavigate } from "react-router-dom";
function AwMenuProducts() {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const navigate = useNavigate();

    const navigateRadioChange =()=>{
        switch(selectedOption){
            case "Flores":
                navigate("/products/flowers");
                break;
            case "Personajes":
                navigate("/products/characters");
                break;
            case "Ramos":
                navigate("/products/bouquets");
                break;
        }
    }

    useEffect(()=>{
        navigateRadioChange();
    }, [selectedOption])
    return ( 
        <div className={awmenuproducts.radio_input}>
        
        <div>
        <input value="value-1" name="value-radio" id="value-1" type="radio" onClick={()=>setSelectedOption("Flores")} onChange={()=>navigateRadioChange()} />
        <label htmlFor="value-1">Flores</label>
        </div>
        
        <input value="value-2" name="value-radio" id="value-2" type="radio" onClick={()=>setSelectedOption("Personajes")} onChange={()=>navigateRadioChange()}/>
       

            <label htmlFor="value-2">Personajes</label>
      
        <input value="value-3" name="value-radio" id="value-3" type="radio" onClick={()=>setSelectedOption("Ramos")} onChange={()=>navigateRadioChange()} />
        <label htmlFor="value-3">Ramos</label>
      </div>    
    );
}

export default AwMenuProducts;