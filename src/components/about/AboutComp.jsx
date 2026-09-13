import './AboutComp.css';
import aboutMeetingImg from '../../assets/img/aboutMeeting.png';

function AboutComp() {
  return (
    <section className="aboutCompSection">
      <div className="aboutCompContainer">
        <div className="aboutCompImageCol">
          <img src={aboutMeetingImg} alt="UniSpace staff meeting" className="aboutCompImage" />
        </div>
        <div className="aboutCompContentCol">
          <span className="aboutCompSubtitle">SOBRE UNISPACE</span>
          <h2 className="aboutCompTitle">Tu hogar en Madrid,<br />nuestra especialidad.</h2>
          <p className="aboutCompParagraph">
            UniSpace nació en 2014 con una misión clara: hacer que encontrar piso en Madrid sea sencillo, seguro y sin sorpresas para los estudiantes. Somos una agencia inmobiliaria especializada exclusivamente en alojamiento universitario, con un equipo que conoce de primera mano los barrios, universidades y necesidades de cada estudiante.
          </p>
          <p className="aboutCompParagraph">
            Trabajamos con propietarios comprometidos, contratos transparentes y acompañamos a cada estudiante durante todo su proceso — desde la primera visita hasta la entrega de llaves.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutComp;