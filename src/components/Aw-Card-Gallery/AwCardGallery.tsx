import { useState } from "react";
import awcardgallery from "./styles/awcardgallery.module.css";
type OnCloseHandler = () => void

interface AwCardGalleryProps{
    size:string,
    onClose:OnCloseHandler,
    imageSlides:string[];
}
function AwCardGallery({ size, onClose, imageSlides}:AwCardGalleryProps) {

  const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goPrevious = ()=>{
        let isFirstSlide = currentIndex === 0;
        let MovePrevious = isFirstSlide ? imageSlides.length-1 : currentIndex-1;
        setCurrentIndex(MovePrevious);
    }

    const goNext = ()=>{
        let isLastSlide = currentIndex === imageSlides.length -1;
        let MoveNext = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(MoveNext); 
    }
  return (
    <section className={awcardgallery.container}>
    <div className={awcardgallery.card}>
    <button className={awcardgallery.cancel} onClick={onClose}>X</button>
      <div className={awcardgallery.top}>
        <div onClick={goPrevious}>&lq;</div>
        <div onClick={goNext}>&gq;</div>
      <div style={{backgroundImage: `url(${imageSlides[currentIndex]})`}} className={awcardgallery.img}></div>
        <p className={awcardgallery.title}>Tamaño aproximado</p>
      </div>
      <p className={awcardgallery.desc}>
        {size}
        
      </p>
    </div>
    </section>
  );
}

export default AwCardGallery;
