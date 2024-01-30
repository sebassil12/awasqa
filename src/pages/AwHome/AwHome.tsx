import AwSlider from '../../components/Aw-Slider/AwSlider';
import { slides } from '../../constants/constants';

import awhome from './styles/awhome.module.css'
function AwHome() {
    return ( 
        <section className={awhome.container}>
            <AwSlider slides={slides}/>
        </section>
     );
}

export default AwHome;