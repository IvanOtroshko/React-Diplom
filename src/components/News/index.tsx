import style from "./news.module.css"

export const News = () => {
    return (
        <><div className={style.content}><h3>News</h3></div><div className={style.container}>

            <img className={style.photo} src="https://cdn.shazoo.ru/c800x350/717876_YQGEh0k_screenshot-16.jpg" alt="1" />
            <div className={style.discription}>
                <h2>
                    "Блэйд" станет вторым фильмом Marvel Studios с рейтингом R
                </h2>
                <p className={style.text}>
                    Режиссер "Блэйда" Ян Деманж в интервью изданию Deadline рассказал, что лента выйдет со взрослым рейтингом R. Картина станет второй в киновселенной Marvel с таким возрастным ограничением. Первым фильмом с рейтингом R станет "Дэдпул 3".

                </p>
            </div>
            <img className={style.photo} src="https://cdn.shazoo.ru/c800x350/717870_3Yo3Kb6_screenshot-14.jpg" alt="1" />
            <div className={style.discription}>
                <h2>
                Финальный трейлер фильма "Марвелы"
                </h2>
                <p className={style.text}>
                Marvel Studios выложила финальный трейлер фильма "Марвелы". В ролике показали Бри Ларсон в образе Капитана Марвел, Иман Веллани в роли Мисс Марвел и других персонажей. В ролике засветился Ник Фьюри.

                </p>
            </div>


        </div></>
        

    );
};
