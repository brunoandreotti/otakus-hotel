import LinkButton from "../linkButton/LinkButton";
import styles from "./BannerQuartos.module.css";


function BannerQuartos() {
    return(
        <div className={styles.box_container}>
            <div className={styles.box_picture}>
        <div className={styles.box_components}>
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