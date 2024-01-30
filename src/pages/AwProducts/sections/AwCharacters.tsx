import AwCard from "../../../components/Aw-Card/AwCard";
import { characters } from "../../../constants/database";

function AwCharacters() {
    return ( 
        <div>
            {characters.map(character=>(
                <AwCard key={character.id} title={character.name} price={character.price} image={character.image} />
            ))}
        </div>
     );
}

export default AwCharacters