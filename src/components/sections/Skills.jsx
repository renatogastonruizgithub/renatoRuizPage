
import Slider from '../shareds/slider';
import Skill from '../shareds/skill';
import { usePortfolio } from '../../contextApi/context';
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/pagination";
import 'swiper/css/navigation';
import { Typography, Grid } from '@mui/material';
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
            <Typography variant="h6" color="#fff" sx={{ marginTop:"1rem" }}>Habilidades</Typography>
            <Grid item xs={12} md={12} lg={12} >
                   <div style={{
                            position: "relative",
                            width: "100%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "2rem"

                        }}>
                              <Slider
                    centeredSlides={true}
                    slidesPerViewMobile={3}
                    slidesPerViewTablet={5}
                    slidesPerViewDesktop={6}
                    slidesPerView={4} >
                    
                    {skills}
                </Slider>

                        </div>
              
            </Grid>
        </Grid>

    )
}

export default Skills