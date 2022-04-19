import styles from "./Card.module.css";
import CardText from "../cards/CardText";
import events from "../../assets/images/events.jpg";
import tea from "../../assets/images/tea.jpg";

function Cards() {
  return (
    <div className={styles.cards_container}>
      <CardText
        titulo={"Eventos"}
        texto={"Lorem ipsum egestas euismod diam, senectus faucibus quisque."}
        foto={events}
        alt={"balões japoneses"}
      />
      <CardText
        titulo={"Gastronomia"}
        texto={"Lorem ipsum vestibulum ut, porttitor habitant."}
        foto={tea}
        alt={"chá japonês"}
      />
    </div>
  );
}

export default Cards;
