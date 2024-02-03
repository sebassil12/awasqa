import awbuttonsocial from "./styles/awbuttonsocial.module.css";

interface AwButtonSocial{
    svg: string, 
    name:string,
    link: string
}
function AwButtonSocial({svg, name, link}:AwButtonSocial) {
    return ( 
        <a href={link} target="_blank">
        <div className={awbuttonsocial.container}>
        
        <button className={awbuttonsocial.Btn}>
        <span className={awbuttonsocial.svgContainer}>
        <img src={svg} width={20}/>
        </span>
            <span className={awbuttonsocial.Bg}></span>
        </button>
        
        <p className={awbuttonsocial.text}>{name}</p>
        </div>
        </a>
    );
}

export default AwButtonSocial;