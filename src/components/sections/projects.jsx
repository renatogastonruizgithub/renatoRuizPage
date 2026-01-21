import styles from "../../assets/styles/projects.module.scss";
import { usePortfolio } from "../../contextApi/context";
import { useNavigate } from "react-router-dom";
import Title from "../shareds/title";
import { Container, Grid } from "@mui/material";
import ProjectCard from "../shareds/ProjectCard";
import { motion } from "framer-motion";


const Projects = () => {
    const router = useNavigate();
    const { projects } = usePortfolio();

    return (

        <section className={styles.sectionProjects} id="Projects">
            <Container maxWidth="md">

                <motion.div
                    className={styles.containerTitle}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                >
                    <Title title="Proyectos" />
                </motion.div>

                <Grid container spacing={4} justifyContent="center">
                    {projects.map((project, k) => (
                        <Grid item xs={12} sm={6} md={4} key={k}>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: k * 0.08 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <ProjectCard
                                    image={project.imagen}
                                    title={project.title}
                                    demoUrl={project.link}
                                    codeUrl={project.github}
                                    technologies={project.Skills?.map(skill => skill.nombre)}
                                    description={project.text}
                                />
                            </motion.div>

                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>


    )
}

export default Projects