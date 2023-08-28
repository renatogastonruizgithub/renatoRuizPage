
import React, { useEffect, useState } from "react";
import styles from "../../assets/styles/loading.module.scss";
import Loader from "./Loader";


const Loading = () => {
  const [night, setNight] = useState(false)
  const [saludo, setSaludo] = useState("")
  /*  let saludo = ""; */
  const today = new Date();
  const hours = today.getHours();
  /*   if (hours >= 7 && hours <= 12) {
      saludo = "¡Buenos dias!"
  
    }
    if (hours > 12 && hours <= 19) {
      saludo = "¡Buenas tardes!"
    }
    if (hours > 19 && hours <= 24) {
  
      saludo = "¡Buenos noches!"
      setnight(true)
    }
    if (hours >= 1 && hours < 7) {
      saludo = "¡Buenos noches!"
      setnight(true)
    } */

  useEffect(() => {
    if ((hours >= 7 && hours <= 12) || (hours >= 1 && hours < 7)) {
      setNight(false);
      setSaludo("¡Buenos días!");
    } else if (hours > 12 && hours <= 19) {
      setNight(false);
      setSaludo("¡Buenas tardes!");
    } else {
      setNight(true);
      setSaludo("¡Buenas noches!");
    }
  }, [hours]);

  return (
    <div className={styles.containerLoading}>
      <span >{saludo}</span>
      <Loader night={night}></Loader>
    </div>

  )
}

export default Loading
