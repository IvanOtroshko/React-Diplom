import style from "./carosel.module.css";

export const CarouselItem = ({ slide, stopSlide, startSlide }) => {
    return (
        <div className={style.carousel_item} onMouseEnter={stopSlide} onMouseOut={startSlide}>
            <img src={slide} />
        </div>
    )
}