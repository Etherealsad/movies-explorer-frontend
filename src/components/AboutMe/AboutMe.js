import myPhoto from "../../images/my-photo.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__title-container">
        <h2 className="about-me__title">Студент</h2>
      </div>
      <div className="about-me__info-container">
        <div className="about-me__info">
          <h3 className="about-me__name">Михаил</h3>
          <h4 className="about-me__profession">Фронтенд-разработчик, 22 года</h4>
          <p className="about-me__text">
            Я&nbsp;родился в&nbsp;Алтайском крае, в городе Бийск.
            В&nbsp;2018 году закончил МБОУ&nbsp;СОШ&nbsp;№12. В 2020&nbsp;году ушел в армию где и решил, что 
            хочу стать&nbsp;веб-разрабочтиком. В&nbsp;данный момент живу и учусь в г. Новосибирск. Свободное&nbsp;время 
            стараюсь проводить с семьей и друзьями. Хочу научиться&nbsp;кататься на сноуборде и как можно лучше 
            освоить&nbsp;веб-разработку.
          </p>
          <ul className="about-me__links">
            <li className="about-me__links-item">
            <a href="https://github.com/Etherealsad" className="about-me__link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            </li>
            <li className="about-me__links-item">
            <a href="https://t.me/Ethereal_sad" className="about-me__link" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={myPhoto} alt="Фотография Вячеслава" />
      </div>
    </section>
  );
}

export default AboutMe;
