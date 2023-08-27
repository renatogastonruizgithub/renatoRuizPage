
import { usePortfolio } from "../../contextApi/context";
import styles from "../../assets/styles/banner.module.scss";

import logo from "../../../public/logoNegro.jpg"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Container, Stack } from "@mui/material";


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
                    flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
                    alignItems: "center"
                  }}>
                  <h2 style={{ marginRight: "1rem" }}>{item.Home.h3}</h2>
                  <h1>{item.Home.h2}</h1>
                </Stack>


                <h3>{item.Home.h1}</h3>
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


        <ArrowDownwardIcon fontSize="large" sx={{
          position: "absolute",
          left: "50%",
          bottom: "2rem",
          color: "#fff"
        }} />
      </Container >
    </section>

  )
}
