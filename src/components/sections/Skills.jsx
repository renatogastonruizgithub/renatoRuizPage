import React from 'react'
import Slider from '../shareds/slider';
import Skill from '../shareds/skill';
import { usePortfolio } from '../../contextApi/context';
import { SwiperSlide } from "swiper/react";
import { Typography } from '@mui/material';
const Skills = () => {
    const { list } = usePortfolio();
    const skills = (
        list.map((item, i) => {
            return (
                <React.Fragment key={i} >
                    <div >
                        {
                            item.Skills.map((skill, g) => {
                                return (

                                    <SwiperSlide  key={g}>
                                        <div style={{ position: "relative", height: "50px" }}>
                                            <Skill img={skill.link} text={skill.nombre} />
                                        </div >
                                    </SwiperSlide>
                                )
                            })
                        }
                    </div>
                </React.Fragment >
            )
        })
    )
    return (
        <>
            <Typography variant="h6" color="#fff" sx={{ marginBottom: "2rem" }}>Habilidades</Typography>
            <Slider AutoplayDelay={3000} centeredSlides={false} slidesPerViewDesktop={5} slidesPerViewMobile={2} slidesPerViewTablet={5}>
                {skills}
            </Slider>
        </>

    )
}

export default Skills