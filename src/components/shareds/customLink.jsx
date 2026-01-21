import React, { useEffect, useState } from 'react'
import styles from "../../assets/styles/navbar.module.scss";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

const CustomLink = () => {
  const [activeLink, setActiveLink] = useState(null);
  const links = [
    { title: 'Home', url: '#Banner' },
    { title: 'Proyectos', url: '#Projects' },
    { title: 'Sobre mi', url: '#About' },
    { title: 'Contactame', url: '#Contact' },

  ];
  const handleLinkClick = (event, url) => {
    event.preventDefault();
    const anchor = url.substring(1);
    const targetElement = document.getElementById(anchor);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const location = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const link of links) {
        const anchor = link.url.substring(1);
        const targetElement = document.getElementById(anchor);

        if (targetElement) {
          const targetPosition = targetElement.offsetTop - 1;

          if (scrollPosition >= targetPosition) {
            setActiveLink(link.url);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [links]);

  return (

    links.map((item, i) => {
      const fromLeft = i < 2;
      return (

        <li key={i} className={styles.menuLinks}>
          <motion.div

            key={i}
            initial={{ x: fromLeft ? -40 : 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, duration: 0.2, delay: i * 0.2 }}
          >
            <NavLink onClick={(e) => handleLinkClick(e, item.url)} to={item.url}
              className={
                activeLink === item.url ? "activeLink" : ""
              }
            >
              {item.title}
            </NavLink >

          </motion.div>
        </li>


      );
    })


  )

}

export default CustomLink