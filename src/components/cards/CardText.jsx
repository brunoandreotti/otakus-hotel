import styles from "./CardText.module.css";

function CardText({ titulo, texto, foto, alt }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_texto}>
        <h1>{titulo}</h1>
        <p>{texto}</p>
      </div>
      <div className={styles.card_img}>
        <img src={foto} alt={alt}></img>
      </div>
    </div>
  );
}

export default CardText;
