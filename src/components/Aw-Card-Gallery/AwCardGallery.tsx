import { useState } from "react";
import awcardgallery from "./styles/awcardgallery.module.css";
import { SVG_DECORATION } from "../../constants/constants";
type OnCloseHandler = () => void;

interface AwCardGalleryProps {
  size: string;
  onClose: OnCloseHandler;
  imageSlides: string[];
}
function AwCardGallery({ size, onClose, imageSlides }: AwCardGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goPrevious = () => {
    let isFirstSlide = currentIndex === 0;
    let MovePrevious = isFirstSlide ? imageSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(MovePrevious);
  };

  const goNext = () => {
    let isLastSlide = currentIndex === imageSlides.length - 1;
    let MoveNext = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(MoveNext);
  };
  return (
    <section className={awcardgallery.container}>
      <div className={awcardgallery.card}>
        <div className={awcardgallery.button}>

        <div className={awcardgallery.button_container}>
          <button className={awcardgallery.cancel} onClick={onClose}>
            X
          </button>
        </div>
        </div>
        <div className={awcardgallery.top}>
          <div onClick={goPrevious} className={awcardgallery.previous}>
            <img src={SVG_DECORATION.previous_next} width={30}  className={awcardgallery.svg_control}/>
          </div>
          <div onClick={goNext} className={awcardgallery.next}>

            <img src={SVG_DECORATION.previous_next} width={30} className={awcardgallery.svg_control} />
          </div>
          <div
            style={{ backgroundImage: `url(${imageSlides[currentIndex]})` }}
            className={awcardgallery.img}
          ></div>
          <div className={awcardgallery.desc_container}>

          <p className={awcardgallery.title}>Tamaño aproximado</p>
          <p className={awcardgallery.desc}>{size}</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default AwCardGallery;
