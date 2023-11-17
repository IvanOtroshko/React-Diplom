import style from "./header.module.css";

export const Header = () => {
    return (
        <header>
        <a className={style.logo} href="/"><h2>MARVEL</h2></a>
        <nav>
            <ul className={style.nav__links}>
                <li><a href="/films">Films</a></li>
                <li><a href="/StanLee">Stan Lee</a></li>
                <li><a href="/Characters">Characters</a></li>
            </ul>
        </nav>
    </header>
    );
};
