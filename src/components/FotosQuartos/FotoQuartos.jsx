// import PropTypes from "prop-types";
import styles from "./FotoQuartos.module.css";

function FotoQuarto({ title, image, text }) {
  return (
    <div className={styles.foto_container}>
      <div className={styles.foto}>
        <div className={styles.foto_texto}>
          <h1>{title}</h1>
        </div>
        <img src={image} alt={text} />
      </div>
    </div>
  );
}

// FotoQuarto.propTypes = {
//   title: PropTypes.string,
//   text: PropTypes.string,
//   image: PropTypes.StaticImage,
// };

export default FotoQuarto;
