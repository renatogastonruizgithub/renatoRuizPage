import Skills from "../../components/sections/Skills"
import React from "react"
import { usePortfolio } from "../../contextApi/context";
import styles from "../../assets/styles/skills.module.scss";
import about from "../../assets/styles/about.module.scss";
import Skill from "../shareds/skill";
import Title from "../shareds/title";
import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";

import Slider from "../shareds/slider";

import Certificated from "./certificated";
import Social from "../shareds/Social";

const About = () => {
    const { list, myRef } = usePortfolio();

    const aboutMe = (
        list.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <div>
                        <p className={about.textAbout}>
                            {item.About.texto}
                        </p>
                    </div>
                </React.Fragment>
            )
        })
    )


    return (
        <section ref={myRef} className={about.sectionAbout} id="About">

            <Container maxWidth="md" >
                <Title title="About" ></Title>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={12} lg={12}>
                        {aboutMe}

                        <Social marginTop={2}></Social>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "4rem"

                        }}>

                            <Skills></Skills>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} >

                        <div style={{
                            position: "relative",
                            width: "100%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "4rem"

                        }}>
                            <Certificated></Certificated>

                        </div>

                    </Grid>
                </Grid>
            </Container>

        </section >



    )
}

export default About