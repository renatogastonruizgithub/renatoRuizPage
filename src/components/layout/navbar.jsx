
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/logoNegro.jpg";
import styles from "../../assets/styles/navbar.module.scss";
import Menu from "../shareds/menuMobile";
import { useEffect, useRef, useState } from "react";
import { Container } from "@mui/material";
import { usePortfolio } from "../../contextApi/context";
import CustomLink from "../shareds/customLink"

export default function Navbar() {


  const [menu, setMenu] = useState(false)

  const { observer, visibleElement } = usePortfolio()
  useEffect(() => {
    observer()
  }, [])

  const location = useLocation();


  return (
    <>


      <section className={`${visibleElement ? " " : "navScroller"}`}>
        <Container maxWidth="md">
          <div className={styles.containerNav} >

            <div className={styles.logoAndMenu}>
              <img

                src={logo}
                alt="Desarrollador web"
                style={{ width: "50px", height: "50px" }}
              /* onClick={() => (router('/'))} */
              />
              <div onClick={() => setMenu(!menu)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className={`${styles.contentMenuLinks} ${visibleElement ? "fondo" : "letrasNegra"}`}>
              <CustomLink></CustomLink>
            </div>
          </div>
          <Menu
            menu={menu}
            setMenu={setMenu}
          >
            <div>
              <CustomLink></CustomLink>
            </div>

            <span onClick={() => setMenu(!menu)}>
              <span></span>
              <span></span>
            </span>
          </Menu>
        </Container>
      </section>


    </>
  );
}
