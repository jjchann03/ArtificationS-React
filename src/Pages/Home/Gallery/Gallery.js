import { useState } from 'react'
import './gallery.css'
// import ImageCard from './ImageCard/ImageCard'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";


export default function Gallery({slides}){

    const[index,setIndex] = useState(0);

    // const timerRef = useRef(null);

    // useEffect(()=>{
    //     timerRef.current = setTimeout(()=>{
    //         nextImg();
    //     },2000);
    // },)

    const prevImg = ()=>{
        const isFirstImg = index === 0;
        const newIndex = isFirstImg ? slides.length-1:index-1;
        setIndex(newIndex);
    }
    const nextImg = ()=>{
        const isLastImg = index===slides.length-1;
        const newIndex = isLastImg ? 0:index+1;
        setIndex(newIndex);
    }
    // const currentSlide = (slideIndex)=>{
    //     setIndex(slideIndex);
    // }

    const slideStyle = {
        width: "90%",
        height: "500px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        backgroundImage: `url(${slides[index].src})`
    }

    return(
        <div className='gallery-container'>
            <h2>Gallery</h2>
            <div className='gallery-carousel'>
                <button className='carousel-pre' onClick={prevImg}> <BsArrowLeftCircleFill fontSize={"2rem"}/>  </button>
                <div style={slideStyle}></div>
                <button className='carousel-next' onClick={nextImg}> <BsArrowRightCircleFill fontSize={"2rem"}/> </button>
            </div>

            
        </div>
    )
}