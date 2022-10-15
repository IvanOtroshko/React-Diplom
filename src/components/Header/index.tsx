import style from "./header.module.css";
import logo from "./logo.webp"


export const Header = () => {
    return (
        <header>
        <a className={style.logo} href="/"><h2>MARVEL</h2></a>
        <nav>
            <ul className={style.nav__links}>
                <li><a href="#">Films</a></li>
                <li><a href="#">Stan Lee</a></li>
                <li><a href="#">Characters</a></li>
                <li><a href="#">Games</a></li>
            </ul>
        </nav>
    </header>
    );
};
<h2>Marvel</h2>