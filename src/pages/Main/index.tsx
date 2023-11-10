
import { Carousel } from "../../components/Carousel/carousel";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const slides = [
    "https://dragon.img2go.com/ru/download-file/21e39749-2d60-41e7-b560-78c424e71978/d5f674a1-574f-44af-8704-a7d6dbdda769",
    "https://dragon.img2go.com/ru/download-file/715754a5-1c48-4210-a95a-6930e96f8af3/99dd11bd-bfde-4cde-9d83-b8c4a4253c10",
    "https://dragon.img2go.com/ru/download-file/df817877-2d8c-492b-9d6b-376588a3d5bf/cd415890-f326-49af-afbb-30e26e4cf17b",
    "https://dragon.img2go.com/ru/download-file/4e69989d-b7f9-4498-a599-5b75a573b226/6b0cb0d1-fe77-479d-bc8a-33e1b65002b0",
    "https://dragon.img2go.com/ru/download-file/cc9db631-7c17-431f-8829-69c10f4246cc/41dfdd95-5b08-4b2a-a128-14cb037ef820"
]
export const Main = () => {
    return (
        <div>
            <Header />
            <Carousel slides={slides} width={1280} />
            <Footer/>
        </div>
    );
};