
import { Carousel } from "../../components/Carousel/carousel";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { image1, image2, image3, image4, image5 } from "../../Image";
import { News } from "../../components/News";

export const slides = [
    image1,
    image2,
    image3,
    image4,
    image5
]

export const Main = () => {
    return (
        <div>
            <Header />
            <Carousel slides={slides} width={1280} />
            <News />
            <Footer />
        </div>
    );
};