import styles from "./Banner.module.css";

import { Features } from "./Icons";

import { Icon } from "@chakra-ui/react";

import { BiWifi, BiRestaurant, BiCar, BiCalendarEvent } from "react-icons/bi";
import { FaConciergeBell, FaHotel, FaSwimmingPool} from "react-icons/fa";


function Banner() {
  return (
    <div className={styles.banner_container}>
      <div className={styles.banner_texto}>
        <h1>
          Bem-vindo ao <span>Otaku's Hotel</span>
        </h1>
        <p>
          Lorem ipsum venenatis justo aliquam ultrices primis mi sociosqu,
          tortor dolor aptent aliquam felis himenaeos felis pretium quisque,
          sodales praesent tempor vulputate fringilla rhoncus justo. congue
          blandit curae aptent quam leo ut accumsan, porttitor volutpat
          tristique cursus lacus vestibulum magna, torquent justo leo rhoncus
          sem turpis. 
        </p>
      </div>

      <div className={styles.banner_icons}>
        <Features icon={<Icon as={FaConciergeBell} />} />
        <Features icon={<Icon as={FaHotel} />} />
        <Features icon={<Icon as={FaSwimmingPool} />} />
        <Features icon={<Icon as={BiWifi} />} />
        <Features icon={<Icon as={BiCar} />} />
        <Features icon={<Icon as={BiRestaurant} />} />
        <Features icon={<Icon as={BiCalendarEvent} />} />
      </div>
      </div>
  );
}

export default Banner;