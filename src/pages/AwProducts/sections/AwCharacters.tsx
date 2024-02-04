
import AwCardProduct from "../../../components/AwCardProduct/AwCardProduct";
import { characters } from "../../../constants/database";
import awcharacter from "./styles/awcharacter.module.css";
function AwCharacters() {
    return ( 
        <div className={awcharacter.container}>
            {characters.map(character=>(
                <AwCardProduct key={character.id} img={character.image} title={character.name} price={character.price} />
            ))}
        </div>
     );
}

export default AwCharacters