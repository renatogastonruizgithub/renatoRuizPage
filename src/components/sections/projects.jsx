import styles from "../../assets/styles/projects.module.scss";
import { usePortfolio } from "../../contextApi/context";
import { useNavigate } from "react-router-dom";
import Title from "../shareds/title";
import { Container, Grid } from "@mui/material";
import ProjectCard from "../shareds/ProjectCard";



const Projects = () => {
    const router = useNavigate();
    const {  projects } = usePortfolio();
       
    return (

        <section className={styles.sectionProjects} id="Projects">
            <Container maxWidth="md">
                <div className={styles.containerTitle}>
                    <Title title="Proyectos"></Title>
                </div>

                <Grid container spacing={4} justifyContent="center">
                    {
                        projects.map((project, l) => (
                            <Grid item xs={12} sm={6} md={4} key={project.id || l}>
                                <ProjectCard
                                    image={project.imagen}
                                    title={project.title}
                                    demoUrl={project.link}
                                    codeUrl={project.github}
                                    technologies={project.Skills?.map(skill => skill.nombre)}
                                    description={project.text}
                                   
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </section>


    )
}

export default Projects