import style from "./card.module.css";

export const Movie = () => {
    const movies = [
        {
            title: "Thor Ragnarok",
            year: 2017,
            image: "https://i.playground.ru/p/KRVJg9bYBNlEE4TphOLS0g.jpeg"
        },
        {
            title: "Captain Marvel",
            year: 2019,
            image: "https://www.kino-teatr.ru/movie/posters/big/3/129673.jpg"
        },
        {
            title: "Avengers: End Game",
            year: 2019,
            image: "https://kvmarvel.ru/wp-content/uploads/2019/01/avengers-endgame-final-poster.jpg"
        },
        {
            title: "Avengers",
            year: 2012,
            image: "https://www.kino-teatr.ru/movie/poster/42608/62050.jpg"
        },
        {
            title: "Doctor Strange",
            year: 2022,
            image: "https://img.championat.com/i/z/u/1649251431268829557.jpg"
        },
        
        {
            title: "Black Panther",
            year: 2018,
            image: "https://www.film.ru/sites/default/files/filefield_paths/9364801-1001255.jpg" 
        },
        {
            title: "Spider Man",
            year: 2018,
            image: "https://ic.pics.livejournal.com/madmundt/61253376/142296/142296_600.jpg"
        },
        {
            title: "Eternals",
            year: 2021,
            image: "https://www.kinonews.ru/insimgs/2021/poster/poster103328_1.jpg"
        }
        ,
        {
            title: " Iron Man 3",
            year: 2013,
            image: "https://www.kinonews.ru/insimgs/poster/poster30068_3.jpg"
        }
        ,
        {
            title: "Morbius",
            year: 2022,
            image: "https://horrorzone.ru/uploads/_movies/75750/morbius-march.jpg"
        }
        ,
        {
            title: "Shang-Chi",
            year: 2022,
            image: "https://funduk.ua/upload/iblock/d78/d788804d144fcd8875c12cbecada2bea.jpg"
        }
        ,
        {
            title: "Thor",
            year: 2011,
            image: "https://i.pinimg.com/236x/6b/7e/1c/6b7e1c0cbd64a376097b30942113a7eb--thor-dvd-superhero-movies.jpg"
        }
        ,
        {
            title: "Thor: Love and Thunder",
            year: 2022,
            image: "https://upload.wikimedia.org/wikipedia/ru/9/92/%D0%A2%D0%BE%D1%80_%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C_%D0%B8_%D0%B3%D1%80%D0%BE%D0%BC_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
        }
        ,
        {
            title: "First Avenger",
            year: 2011,
            image: "https://www.kino-teatr.ru/movie/posters/big/8/104988.jpg"
        }
        ,
        {
            title: "Hulk",
            year: 2003,
            image: "https://cdn.oboi7.com/static/images/m/c6/45/c645281f0b64d8d4736f51a6937f3295db223340.jpg"
        }
        ,
        {
            title: "Iron Man",
            year: 2008,
            image: "https://www.kino-teatr.ru/movie/posters/big/4/25624.jpg"
        }
        
        
    ];

    return (
        <div className={style.container}>
            {movies.map((movie, index) => (
                <div key={index} className={style.card}>
                    <img className={style.imgmovi} src={movie.image} alt={movie.title} />
                    <div className={style.discription}>
                        <h2>{movie.title}</h2>
                        <p>{movie.year}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

