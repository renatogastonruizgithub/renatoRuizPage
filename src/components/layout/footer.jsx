
import logo from "../../../public/logoNegro.jpg";
import { motion } from "framer-motion";
import styles from "../../assets/styles/footer.module.scss";
import { useNavigate } from "react-router-dom";
import Social from "../shareds/Social";
import { Container } from "@mui/material";

export default function Footer() {
  const today = new Date();
  const router = useNavigate()
  return (



    <section className={styles.sectionFooter}>
      <Container maxWidth="md">

        <div className={styles.footer}>
          <div className={styles.containerSocial}>
            <motion.div
              className={styles.contentImg}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={logo}
                alt="Desarrollador web"
                style={{ width: "50px", height: "50px" }}
                onClick={() => router('/')}
              />
            </motion.div>
            <Social></Social>
          </div>
          <motion.div
            
            initial={{ x: -90, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <p style={{ fontSize: ".9rem" }}>"El éxito es la suma de pequeños esfuerzos, repetidos día tras día." - Robert Collier</p>
          </motion.div>
        </div>



        <hr></hr>
        <p style={{ fontSize: ".9rem" }} className={styles.firma}>© Copyright {today.getFullYear()} &hearts;  desarrollado por Renato Gaston Ruiz</p>
      </Container>
    </section>

  );
}
