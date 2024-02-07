import AwCardProduct from "../../../components/AwCardProduct/AwCardProduct";
import { flowers } from "../../../constants/database";
import awcharacter from "./styles/awcharacter.module.css";
function AwFlowers() {
    return ( 
        <section>
            
                <div className={awcharacter.container}>
            {flowers.map(flower=>(
                <AwCardProduct key={flower.id} img={flower.image} title={flower.name} price={flower.price} size={flower.size} /> 
            ))}
            </div>
            
            
        </section>
        
     );
}

export default AwFlowers;