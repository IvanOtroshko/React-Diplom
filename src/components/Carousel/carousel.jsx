import { CarouselItem } from "./catouselItem"
import { useRef, useState, useEffect } from "react";
import style from "./carosel.module.css";
import { CarouselControls } from "./CarouselControls";


export const Carousel = ({ slides, width = 1000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef()

    const startSlideTimer = () => {
        stopSlideTimer();
        slideInterval.current = setInterval(() => {
            setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
        }, 3000)
    }

    const stopSlideTimer = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }

    const prev = () => {
        startSlideTimer();
        const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
        setCurrentSlide(index);
    }

    const next = () => {
        startSlideTimer();
        const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
    }

    useEffect(() => {
        startSlideTimer()

        return () => stopSlideTimer()
    }, [])

    return (
        <div className={style.container}>
            <div className={style.carousel} style={{ maxWidth : width }}>
                <div className={style.carousel_inner}
                    style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <CarouselItem slide={slide} key={index} stopSlide={stopSlideTimer}
                            startSlide={startSlideTimer} />
                    ))}
                </div>
                <CarouselControls prev={prev} next={next} />
            </div>
        </div>
    )
}