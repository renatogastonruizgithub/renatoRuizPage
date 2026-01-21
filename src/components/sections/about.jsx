import Skills from "../../components/sections/Skills"
import React from "react"
import { usePortfolio } from "../../contextApi/context";
import styles from "../../assets/styles/skills.module.scss";
import about from "../../assets/styles/about.module.scss";
import Title from "../shareds/title";
import { Container, Grid, } from "@mui/material";
import { motion } from "framer-motion";
import Certificated from "./certificated";
import Social from "../shareds/Social";

const About = () => {
    const { list } = usePortfolio();

    const aboutMe = (
        list.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <div>
                        <p /* className={about.textAbout} */>
                            {item.About.texto}
                        </p>
                    </div>
                </React.Fragment>
            )
        })
    )


    return (
        <section className={about.sectionAbout} id="About">
            <Container maxWidth="md">

                <motion.div
                    className={styles.containerTitle}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Title title="SOBRE MI" />
                </motion.div>

                <Grid container spacing={0}>

                    <Grid item xs={12} md={12} lg={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        >
                            {aboutMe}
                            <Social marginTop={2} />
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>                 
                        <Skills />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>                 
                        <div style={{
                            position: "relative",
                            width: "100%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "2rem"
                        }}>
                            <Certificated />
                        </div>


                    </Grid>

                </Grid>
            </Container>
        </section>



    )
}

export default About