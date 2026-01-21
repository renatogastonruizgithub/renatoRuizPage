import { usePortfolio } from "../../contextApi/context";
import styles from "../../assets/styles/banner.module.scss";
import { Container, Stack } from "@mui/material";
import Botn from "../shareds/buton";
import { motion } from "framer-motion";



export default function Banner() {
  const { list, myRef } = usePortfolio();

  return (
    <section ref={myRef} className={styles.imgBanner} id="Banner">
      <Container maxWidth="md">
        {list.map((item) => (
          <motion.div
            key={item.Home.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.contentImgText}>

              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.bannerTexts}>
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "column", md: "column", lg: "column" },
                      alignItems: "center"
                    }}
                  >
                    <h2>{item.Home.h3}</h2>
                    <h1>{item.Home.h2}</h1>
                    <h3 style={{ marginBottom: "2rem" }}>{item.Home.h1}</h3>
                      <Botn
                        color={"#fff"}
                        background={"#ff781f"}
                        font={"1rem"}
                        arrow="down"
                        handleClick={() =>
                          document
                            .getElementById("Projects")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        <span>Ver proyectos</span>
                      </Botn>
                    
                  </Stack>
                </div>
              </motion.div>

              <motion.div
                className={styles.contentImg}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={item.Home.imagen}
                  alt="desarrollador web Renato Ruiz"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </motion.div>

            </div>
          </motion.div>
        ))}
      </Container>
    </section>


  )
}
