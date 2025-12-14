import styles from "../../assets/styles/projects.module.scss";
import { usePortfolio } from "../../contextApi/context";
import Botn from "../../components/shareds/buton";
import { useNavigate } from "react-router-dom";
import Title from "../shareds/title";
import { Container, Stack, Typography, Grid } from "@mui/material";
import Slider from "../shareds/slider";
import { SwiperSlide } from "swiper/react";
import ProjectCard from "../shareds/ProjectCard";


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
                </div>

                <Grid container spacing={4} justifyContent="center">
                    {list.map((item) =>
                        item.Projects.map((project, l) => (
                            <Grid item xs={12} sm={6} md={4} key={project.id || l}>
                                <ProjectCard
                                    image={project.imagen}
                                    title={project.title}
                                    demoUrl={true}
                                    codeUrl={true}
                                    technologies={["vue", "js"]}
                                    description={project.text}
                                    onDetails={() => details(project.id)}
                                />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </section>


    )
}

export default Projects