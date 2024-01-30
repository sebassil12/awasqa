import { Link } from "react-router-dom";


function AwCategories() {
    return (  
       <div>
            <ul>
                <li>
                      <Link to={"/products/flowers"}>Flores</Link>  
                </li>
                <li>
                    <Link to={"/products/characters"}>Personajes</Link>
                </li>
                <li>
                    <Link to={"/products/bouquets"}>Ramos</Link>
                </li>
            </ul>    
       </div> 
    );
}

export default AwCategories;