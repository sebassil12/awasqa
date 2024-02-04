import awcardproduct from "./styles/awcardproduct.module.css";
interface AwCardProductProps{
    img:string,
    title:string,
    price:string
}
function AwCardProduct({img, title, price}:AwCardProductProps) {
    return ( 
        <div className={awcardproduct.card}>
        <div className={awcardproduct.card_img}>
            <img src={img} className={awcardproduct.image}/>
        </div>
        <div className={awcardproduct.card_footer}>
        <p className={awcardproduct.text_title}>{title} </p>
        <span className={awcardproduct.text_title}>{price}</span>
      </div></div>
     );
}

export default AwCardProduct;