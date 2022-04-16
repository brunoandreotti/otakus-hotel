import { Link } from "@chakra-ui/react";
import styles from "./LinkButton.module.css";

function LinkButton({ to, text }) {
  return(
    <div class={styles.link_container}>
    <Link className={styles.button} to={to}>
    {text}
    </Link>
    </div>
  );
}

export default LinkButton;
