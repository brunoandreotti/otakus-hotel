import LinkButton from "../linkButton/LinkButton";
import styles from "./BannerQuartos.module.css";
import FotoQuarto from "../FotosQuartos/FotoQuartos";

//importar imagens do assets
import quarto1 from "../../assets/images/quarto1.jpg";
import quarto5 from "../../assets/images/quarto5.jpg";
import quarto6 from "../../assets/images/quarto6.jpg";

function BannerQuartos() {
  return (
    <div className={styles.box_container}>
      <div className={styles.box_picture}>
        <div className={styles.box_components}>
          <div className={styles.link_fotos}>
            <FotoQuarto title={"Quarto Luxo"} image={quarto1} text={"Luxo"} />
            <FotoQuarto title={"Quarto Suite"} image={quarto5} text={"Suite"} />
            <FotoQuarto
              title={"Quarto Premium"}
              image={quarto6}
              text={"Premium"}
            />
          </div>
          <div className={styles.link_container}>
            <LinkButton to="/" text="Confira as promoções" />
            <LinkButton to="/" text="Faça a sua reserva!" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerQuartos;
