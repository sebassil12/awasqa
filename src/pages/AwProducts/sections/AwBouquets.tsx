import AwCardProduct from "../../../components/AwCardProduct/AwCardProduct";
import { bouquets } from "../../../constants/database";
import awcharacter from "./styles/awcharacter.module.css";

function AwBouquets() {
  return ( 
    <section>
        
            <div className={awcharacter.container}>
        {bouquets.map(bouquet=>(
            <AwCardProduct key={bouquet.id} img={bouquet.image} title={bouquet.name} price={bouquet.price} size={bouquet.size} /> 
        ))}
        </div>
        
        
    </section>
    
 );
}

export default AwBouquets;