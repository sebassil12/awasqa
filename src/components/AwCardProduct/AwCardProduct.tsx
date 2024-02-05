import { useState } from "react";
import awcardproduct from "./styles/awcardproduct.module.css";
import AwCardGallery from "../Aw-Card-Gallery/AwCardGallery";
interface AwCardProductProps {
  img: string [],
  title: string,
  price: string,
  size:string, 
  

}
function AwCardProduct({ img, title, price, size }: AwCardProductProps) {
  const [isOpenModale, setIsOpenModal] = useState<boolean>(false);
  

  return (
    <section>
      {isOpenModale ? (
        <div>
             
          <AwCardGallery  size={size} onClose={() => setIsOpenModal(false)} imageSlides={img} />
        </div>
      ) : (
        <div className={awcardproduct.card}>
          <div className={awcardproduct.card_img} onClick={()=>setIsOpenModal(true)}>
            <img src={img[0]} className={awcardproduct.image} />
          </div>
          <div className={awcardproduct.card_footer}>
            <p className={awcardproduct.text_title}>{title} </p>
            <span className={awcardproduct.text_title}>{price}</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default AwCardProduct;
