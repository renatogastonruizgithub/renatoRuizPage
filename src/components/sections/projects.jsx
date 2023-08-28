import styles from "../../assets/styles/projects.module.scss";
import { usePortfolio } from "../../contextApi/context";
import Botn from "../../components/shareds/buton";
import { useNavigate } from "react-router-dom";
import Title from "../shareds/title";
import { Container, Stack, Typography } from "@mui/material";
import Slider from "../shareds/slider";
import { SwiperSlide } from "swiper/react";

const Projects = () => {
    const router = useNavigate();
    const { list, idDetails } = usePortfolio();
    const details = (id) => {
        idDetails(id)
        router("http://localhost:8080/details/")
    }
    return (

        <section className={styles.sectionProjects} id="Projects">
            <Container maxWidth="md">
                <div className={styles.containerTitle}>
                    <Title title="Proyectos"></Title>
                    {/*  <div style={{ width: "7rem" }}>
                        <Botn color={"#fff"}
                            background={"transparent"}
                            font={1 + "rem"}
                        >
                            <span>Ver todos</span>
                        </Botn>

                    </div> */}

                </div>
                <Slider AutoplayDelay={6000}
                    centeredSlides={false}
                    navegation={true}
                    slidesPerViewMobile={1}
                    slidesPerViewTablet={1}
                    slidesPerViewDesktop={1}
                >
                    {
                        list.map((item, i) => {
                            return (
                                <div key={i} >
                                    {
                                        item.Projects.map((project, l) => {

                                            return (
                                                <SwiperSlide key={project.id} >
                                                    <div
                                                        className={styles.contentProjects}  >

                                                        <div className={`${i % 2 == 0 ? 'clase2' : 'reverseProject'}`}>
                                                            <Typography variant="h5" color="#fff">{project.title}</Typography>
                                                            <p>{project.text}</p>
                                                            <div className={styles.botonDestokp}>
                                                                <Botn color={"#fff"}
                                                                    background={"#ff781f"}
                                                                    font={1 + "rem"}

                                                                    handleClick={() => details(project.id)}

                                                                >
                                                                    <span>Saber mas</span>
                                                                </Botn>

                                                            </div>

                                                        </div>

                                                        <div className={styles.contentImg} ><img src={project.imagen} /></div>
                                                        <div className={styles.botonMobile}>
                                                            <Botn color={"#fff"}
                                                                background={"#ff781f"}
                                                                font={1 + "rem"}

                                                                handleClick={() => details(project.id)}
                                                            >
                                                                <span>Saber mas</span>
                                                            </Botn>
                                                        </div>

                                                    </div>
                                                </SwiperSlide>

                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }

                </Slider>
            </Container>
        </section>


    )
}

export default Projects