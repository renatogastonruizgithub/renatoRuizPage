
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import "swiper/css";
import { motion } from "framer-motion";
import 'swiper/css/navigation';

import { usePortfolio } from "../../contextApi/context";
import Card from '../shareds/cards';

import styles from "../../assets/styles/certificated.module.scss";
import Slider from '../shareds/slider';
import { Typography } from '@mui/material';


const Certificated = () => {

    const { list } = usePortfolio();
    return (
        <>
           
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                >
                    <Typography variant="h6" color="#fff">Cursos</Typography>
                </motion.div>

                <Slider
                    centeredSlides={true}
                    slidesPerViewMobile={2}
                    slidesPerViewTablet={3}
                    slidesPerViewDesktop={4}
                >
                    {list.map((item, i) => (
                        <div key={i} className="containerSLide">
                            {item.Certificateds.map((certificated, j) => (
                                <SwiperSlide key={j}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 , delay: j * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Card
                                            img={certificated.logo}
                                            height={80}
                                            title={certificated.title}
                                            paragraph={certificated.company}
                                            width={80}
                                        />
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </div>
                    ))}
                </Slider>
           

        </>

    )
}
export default Certificated 