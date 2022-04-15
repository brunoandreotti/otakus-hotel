// import LinkButton from "../LinkButton/LinkButton";
import styles from "./Banner.module.css";

function Banner() {
  return(
    <section className={styles.banner_container}>
      <h1>Bem-vindo ao <span>Otaku's Hotel</span></h1>
      <p>Texto a definir</p>
      {/* <a href="/">Conferir agora</a> */}
      {/* <LinkButton to="/" text="/" /> */}
      <icon></icon>
    </section>
  );
}

export default Banner;