import { useEffect, useState } from "react";
import awslider from "./styles/awslider.module.css"

interface AwSlider{
    //Used for objects, {} mean the format, [] mean that is an array
    slides:{url:string} [];
}

function AwSlider({slides}:AwSlider) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // const goPrevious = ()=>{
    //     let isFirstSlide = currentIndex === 0;
    //     let MovePrevious = isFirstSlide ? slides.length-1 : currentIndex-1;
    //     setCurrentIndex(MovePrevious);
    // }

    const goNext = ()=>{
        let isLastSlide = currentIndex === slides.length -1;
        let MoveNext = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(MoveNext); 
    }



    useEffect(()=>{
        const intervalId = setInterval(()=>{
            goNext();
        }, 3000);

        return ()=>clearInterval(intervalId);
    },[currentIndex, slides])
       
    return ( 
        <div className={awslider.container}>
            

            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className={awslider.image_background}></div>
           
            
        </div>

    );
}

export default AwSlider;