import { usePortfolio } from "../../contextApi/context";
import styles from "../../assets/styles/banner.module.scss";
import { Container, Stack } from "@mui/material";
import Botn from "../shareds/buton";
import { useRef } from "react";


export default function Banner() {
  const { list, myRef } = usePortfolio();

  return (
    <section ref={myRef} className={styles.imgBanner} id="Banner">
      <Container maxWidth="md">
        {list.map((item) => {
          return (
            <div key={item.Home.id} className={styles.contentImgText}>
              <div className={styles.bannerTexts}>
                <Stack direction="row"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column", md: "column", lg: "column" },
                    alignItems: "center"
                  }}>
                  <h2>{item.Home.h3}</h2>
                  <h1>{item.Home.h2}</h1>
                  <h3 style={{ marginBottom: "2rem" }}>{item.Home.h1}</h3>
                  <Botn color={"#fff"}
                    background={"#ff781f"}
                    font={"1rem"}
                    arrow="down"
                    handleClick={() =>
                      document
                        .getElementById("Projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }>
                    <span>Ver proyectos</span>
                  </Botn>
                </Stack>

              </div>

              <div className={styles.contentImg}>
                <img
                  src={item.Home.imagen}
                  alt="desarrollador web Renato Ruiz"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}

                />
              </div>

            </div>

          )
        })}




      </Container >
    </section>

  )
}
