
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/scss/pagination";
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
            <Typography variant="h6" color="#fff" sx={{ marginBottom: "2rem" }}>My Certificateds</Typography>
            <Slider AutoplayDelay={4000}
                centeredSlides={true}
                slidesPerViewMobile={2}
                slidesPerViewTablet={3}
                slidesPerViewDesktop={4}
            >
                {
                    list.map((item, i) => {
                        return (
                            <div key={i} className="containerSLide">
                                {
                                    item.Certificateds.map((certificated, i) => {
                                        return (
                                            <SwiperSlide style={{ cursor: "pointer" }} key={i}>
                                                <Card
                                                    img={certificated.logo}
                                                    height={80}
                                                    title={certificated.title}
                                                    paragraph={certificated.company}
                                                    width={80}
                                                >
                                                </Card>
                                            </SwiperSlide>

                                        )

                                    })
                                }

                            </div>

                        )
                    })
                }
            </Slider>
        </>

    )
}
export default Certificated