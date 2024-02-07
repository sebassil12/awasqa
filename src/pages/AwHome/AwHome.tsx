
import AwPresentation from '../../components/Aw-Presentation/AwPresentation';
import AwSlider from '../../components/Aw-Slider/AwSlider';
import AwSocial from '../../components/Aw-Social/AwSocial';
import {  slides } from '../../constants/constants';

import awhome from './styles/awhome.module.css'
import AwButton from '../../components/Aw-Button/AwButton';
function AwHome() {
    return ( 
        <section className={awhome.container}>
            <section className={awhome.card}>
            <AwPresentation children_content={
                <div>
                 <h1 className={awhome.welcome}>¡Bienvenido a un lugar mágico!</h1>
                 <ul>
                 <li className={awhome.desc}>Tiendita virtual 🧚</li>
                 <li className={awhome.desc}>Plantitas y peluches tejidos a crochet🧶🪡</li>
                 <li className={awhome.desc}>También se personaliza✨️</li>
                 <li className={awhome.desc}>📍Cuenca, Ecuador</li>
                 <li className={awhome.desc}>Hecho 100% en Ecuador</li>
     
                 </ul>
                 <br />
                 </div>
            } children_social={
                <div>
                <br />
                <AwButton />
                <AwSocial />
                </div>
            } />      
            </section>
            <section className={awhome.slider}>
            <AwSlider slides={slides}/>
            

            </section>
            
        </section>
     );
}

export default AwHome;