import { motion } from "framer-motion";
import Slider from '../shareds/slider';
import Skill from '../shareds/skill';
import { usePortfolio } from '../../contextApi/context';
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/pagination";
import 'swiper/css/navigation';
import { Typography, Grid } from '@mui/material';
import { tr } from "framer-motion/m";
const Skills = () => {
    const { list } = usePortfolio();
    const skills = (
        list.map((item, i) => {
            return (
                < >


                    {
                        item.Skills.map((skill, g) => {
                            return (

                                <SwiperSlide key={g}>
                                    <div /* style={{ position: "relative", height: "50px" }} */ >
                                        <Skill img={skill.link} text={skill.nombre} />
                                    </div >
                                </SwiperSlide>
                            )
                        })
                    }

                </ >
            )
        })
    )
    return (
       <Grid container spacing={0}>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Typography variant="h6" color="#fff" sx={{ marginTop: "1rem" }}>
      Habilidades
    </Typography>
  </motion.div>

  <Grid item xs={12} md={12} lg={12}>
    <motion.div
      style={{
        position: "relative",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2rem"
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <Slider
        centeredSlides={true}
        slidesPerViewMobile={2}
        slidesPerViewTablet={5}
        slidesPerViewDesktop={7}
        slidesPerView={4}
       pagination={true}
      >
        {skills}
      </Slider>
    </motion.div>
  </Grid>

</Grid>

    )
}

export default Skills