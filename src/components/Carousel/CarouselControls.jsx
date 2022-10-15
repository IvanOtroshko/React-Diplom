import style from "./carosel.module.css";

export const CarouselControls = ({ prev, next }) => {
    return (
        <div>
            <button className={style.carousel_controlLeft} onClick={prev}>Prev</button>
            <button className={style.carousel_controlRight} onClick={next}>Next</button>
        </div>
    )
}