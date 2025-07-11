
// Styles
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-img">
        <img
          src="/lutadorhome.jpg"
          alt="Lutador pugilista para capa do website"
        />
      </div>
      <div className="hero-content">
        <h1>
          Bem vindo ao Centro de Treinamento <span id="hero-span">HJ</span>
        </h1>
        <h3 className="typing-text">
          Onde a disciplina molda <span id="typing"></span>
        </h3>
        <p>
          Descubra o centro de treinamento mais completo de Duque de Caxias.
          Aqui, não só buscamos melhorar seu condicionamento físico, mas
          transformamos sua rotina com foco, determinação e resultados. Pronto
          para superar seus limites?
        </p>
        <div className="social-icons">
          <a href="https://www.instagram.com/hjcentrodetreinamento/" className="social-icons-links">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <a href="usuario.html" class="hero-btn">
          Conheça nosso Quiz!
        </a>
      </div>
    </section>
  );
};

export default Hero;
