import React, { useRef, useEffect, useState } from 'react';
import { Swiper } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SwiperCore from 'swiper';
import "swiper/css";
import "swiper/scss/pagination";
import 'swiper/css/navigation';

/* SwiperCore.use([Navigation, Pagination, Autoplay]); */

const Slider = ({
    children, pagination,
    AutoplayDelay,
    slidesPerViewMobile,
    slidesPerViewTablet,
    slidesPerViewDesktop,
    centeredSlides
}) => {
    const swiperRef = useRef(null);
    const paginationRef = useRef(null);

    const swiperOptions = {
        breakpoints: {
            320: {
                slidesPerView: slidesPerViewMobile,
                spaceBetween: 10,
                centeredSlides: centeredSlides,               
            },
            768: {
                slidesPerView: slidesPerViewTablet,
                spaceBetween: 10,
               
            },
            1024: {
                slidesPerView: slidesPerViewDesktop,
                spaceBetween: 30,
                pagination: {
                    el: paginationRef.current,
                    clickable: true,
                },
                autoplay: {
                    delay: AutoplayDelay,
                    disableOnInteraction: true,
                }
            },
            1440: {
                slidesPerView: slidesPerViewDesktop,
                spaceBetween: 30,
               
                autoplay: {
                    delay: AutoplayDelay,
                    disableOnInteraction: true,
                },
            },
        },
       
        autoplay: false,
        initialSlide: 0,
        modules: [Pagination, Autoplay],
        onSlideChange: () => handleSlideChange(), // Llama a la función de SlideChange local
        onSwiper: (swiper) => (swiperRef.current = swiper), // Guarda la instancia de Swiper en el ref
    };

    const handleSlideChange = () => { }
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
            if (swiperRef.current) swiperRef.current.update();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.on('slideChange', handleSlideChange);
        }
    }, []);
        const sliderKey = isDesktop ? "desktop" : "mobile";
    
    return (
        <div style={{ position: "relative" }}>
            <Swiper
                key={sliderKey}
                {...swiperOptions}
            >
                {
                    children
                }

            </Swiper>
            {pagination && isDesktop && (
                <div
                    ref={paginationRef}
                    className="swiper-pagination colorPagination"
                />
            )}


        </div>
    )
}

export default Slider