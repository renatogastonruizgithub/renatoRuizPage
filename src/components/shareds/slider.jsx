import React, { useRef, useEffect } from 'react';
import { Swiper } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SwiperCore from 'swiper';
import "swiper/css";
import "swiper/scss/pagination";
import 'swiper/css/navigation';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = ({ children, navegation, AutoplayDelay, slidesPerView }) => {
    const swiperRef = useRef(null);
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const paginationRef = useRef(null);
    const swiperOptions = {
        breakpoints: {
            768: {
                slidesPerView: slidesPerView,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: slidesPerView,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: slidesPerView,
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
        },
        pagination: {
            el: paginationRef.current,
            clickable: true,
        },
        autoplay: {
            delay: AutoplayDelay,
            disableOnInteraction: false,
        },
        freeMode: true,
        initialSlide: 0,
        spaceBetween: 50,
        centeredSlides: false,

        onSlideChange: () => handleSlideChange(), // Llama a la función de SlideChange local
        onSwiper: (swiper) => swiperRef.current = swiper, // Guarda la instancia de Swiper en el ref
    };


    const handleSlideChange = () => {
        console.log('Slide changed in this Slider instance');
    };

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.on('slideChange', handleSlideChange);
        }
    }, []);
    return (
        <div style={{ position: "relative" }}>
            <Swiper

                {...swiperOptions}
            >
                {
                    children
                }

            </Swiper>
            {
                navegation &&
                <>
                    <div ref={nextButtonRef} className="swiper-button-next" style={{ color: '#fff' }} />
                    <div ref={prevButtonRef} className="swiper-button-prev" style={{ color: '#fff' }} />
                </>


            }

            <div ref={paginationRef} className="swiper-pagination colorPagination" />
        </div>
    )
}

export default Slider