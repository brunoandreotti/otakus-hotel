import { Link } from "@chakra-ui/react";
import styles from "./LinkButton.module.css";

function LinkButton({ to, text }) {
  return(
    <Link className={styles.button} to={to}>
    {text}
    </Link>
  );
}

export default LinkButton;
