import style from "./character.module.css";

export const Character = () => {
    const characters = [
        {
            name: "Джеймс Ганн",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/0b0cba07-d80b-4a81-9602-005c5caacbcf/280x420"
        },
        {
            name: "Роберт Дауни мл",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/badcb124-2d8c-455b-a8f6-ffd7459fc3be/280x420"
        },
        {
            name: "Крис Эванс",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/0357ad10-8f5a-463e-86a6-42f5f6c4928c/280x420"
        },
        {
            name: "Джон Фавро",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/bbb0dc5c-b2f9-4bfd-9512-26f214c39347/280x420"
        },
        {
            name: "Крис Хемсворт",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/23f94a27-bd93-4074-add5-db22e54e0833/280x420"
        },
        {
            name: "Кларк Грегг",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/6eda6c5a-6aff-474e-b374-96e2485d1a5b/280x420"
        },
        {
            name: "Том Хиддлстон",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/34ece4ec-ae18-4489-a31c-eda0f610d48b/280x420"
        },
        {
            name: "Сэмюэл Л. Джексон",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/2c4a3629-917c-431e-864e-c6e03b1b8b3a/280x420"
        }
    ];

    return (
        <div className={style.container}>
            {characters.map((character, index) => (
                <div className={style.card} key={index}>
                    <img className={style.imgmovi} src={character.image} alt={character.name} />
                    <div className={style.discription}>
                        <h2>{character.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

