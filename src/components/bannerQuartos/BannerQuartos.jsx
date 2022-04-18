// import LinkButton from "../linkButton/LinkButton";
import styles from "./BannerQuartos.module.css";
import CardQuarto from "../card/CardQuartos";
import quarto from "../../assets/images/quarto1.jpg";
import { Image } from "@chakra-ui/react";

function BannerQuartos() {
    return(
        <div className={styles.box_container}>
            <div className={styles.box_picture}>
        <div className={styles.box_components}>
            <div className={styles.link_cards}>
                <CardQuarto title={"Quarto Luxo"} image={<Image src={quarto} alt={"Quarto Luxo"} />} />
                <CardQuarto title={"Quarto Luxo"} image={<Image src={quarto} alt={"Quarto Luxo"} />} />
                <CardQuarto title={"Quarto Luxo"} image={<Image src={quarto} alt={"Quarto Luxo"} />} />
            </div>
            {/* <div className={styles.link_container}>
                <LinkButton to="/" text="Confira as promoções" />
                <LinkButton to="/" text="Faça a sua reserva!" />
            </div> */}
        </div>
        </div>
            </div>
    );
}

export default BannerQuartos;