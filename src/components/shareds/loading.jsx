
import React, { useEffect, useState,useRef } from "react";
import styles from "../../assets/styles/loading.module.scss";
import Loader from "./Loader";


const Loading = () => {
  const [night, setNight] = useState(false)
  const [saludo, setSaludo] = useState("")
  const today = new Date();
  const hours = today.getHours();
const hasRun = useRef(false);
  const messages = [
    { text: "Bienvenido de nuevo", weight: 1 },
    { text: "Qué gusto tenerte aquí", weight: 5 },
    { text: "Espero que estés teniendo un gran día", weight: 4 },
    { text: "Me alegra que hayas vuelto", weight: 3 },
    { text: "Un gusto verte otra vez", weight: 2 }
  ];
  function getWeightedRandom() {
    const pool = messages.flatMap(m =>
      Array(m.weight).fill(m.text)
    );
    return pool[Math.floor(Math.random() * pool.length)];
  }
  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const hasVisited = localStorage.getItem("hasVisited");

    // ---- PRIMERA VISITA REAL ----
    if (!hasVisited) {
      localStorage.setItem("hasVisited", "true");
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
      return;
    }

    // ---- VISITAS SIGUIENTES ----
    setSaludo(getWeightedRandom());
    setNight(hours > 19 || hours < 7);

  }, [hours]);
  return (
    <div className={styles.containerLoading}>
      <span >{saludo}</span>
      <Loader night={night}></Loader>
    </div>

  )
}

export default Loading
