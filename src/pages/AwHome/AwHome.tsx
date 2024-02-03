import AwPresentation from '../../components/Aw-Presentation/AwPresentation';
import AwSlider from '../../components/Aw-Slider/AwSlider';
import AwSocial from '../../components/Aw-Social/AwSocial';
import { SVG_DECORATION, slides } from '../../constants/constants';

import awhome from './styles/awhome.module.css'
function AwHome() {
    return ( 
        <section className={awhome.container}>
            <section className={awhome.card}>
            <AwPresentation children_content={
                <div>
                 <h1>¡Bienvenido!</h1>
                 <ul>
                 <li>Tiendita virtual 🧚</li>
                 <li>Plantitas y peluches tejidos a crochet🧶🪡</li>
                 <li>También se personaliza✨️</li>
                 <li>📍Cuenca, Ecuador</li>
     
                 </ul>
                 <button><div ><p>PRODUCTOS <img src={SVG_DECORATION.arrow} width={30}/></p></div></button>
                 </div>
            } children_social={
                <AwSocial />
            } />      
            </section>
            <section className={awhome.slider}>
            <AwSlider slides={slides}/>
            

            </section>
            
        </section>
     );
}

export default AwHome;