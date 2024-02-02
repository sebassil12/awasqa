import AwButtonSocial from '../../components/Aw-Button-Social/AwButtonSocial';
import AwPresentation from '../../components/Aw-Presentation/AwPresentation';
import AwSlider from '../../components/Aw-Slider/AwSlider';
import { slides } from '../../constants/constants';

import awhome from './styles/awhome.module.css'
function AwHome() {
    return ( 
        <section className={awhome.container}>
            <section className={awhome.card}>
            <AwPresentation />
           
            </section>
            <section className={awhome.slider}>
            <AwSlider slides={slides}/>
            

            </section>
            <AwButtonSocial />
        </section>
     );
}

export default AwHome;