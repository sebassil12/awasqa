import { SVG_DECORATION } from '../../constants/constants';
import AwSocial from '../Aw-Social/AwSocial';
import awpresentation from './styles/awpresentation.module.css';
interface AwPresentationProps{
    children_content: React.ReactNode,
    children_social:React.ReactNode|null;    
}

function AwPresentation({children_content, children_social}:AwPresentationProps) {
    return ( 
    <div className={awpresentation.container_card}>
        <div className={awpresentation.card}>
           
            {children_content}
        </div>
        {children_social}
    </div>
     );
}

export default AwPresentation;