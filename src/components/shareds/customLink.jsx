import React, { useEffect, useState } from 'react'
import styles from "../../assets/styles/navbar.module.scss";
import { Link, NavLink, useNavigate } from 'react-router-dom'


const CustomLink = () => {
  const [activeLink, setActiveLink] = useState(null);
  const links = [
    { title: 'Home', url: '#Banner' },
    { title: 'Sobre mi', url: '#About' },
    { title: 'Proyectos', url: '#Projects' },
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

      return (

        <li key={i} className={styles.menuLinks}>
          <NavLink onClick={(e) => handleLinkClick(e, item.url)} to={item.url}
            className={
              activeLink === item.url ? "activeLink" : ""
            }
          >
            {item.title}
          </NavLink >


        </li>
      );
    })


  )

}

export default CustomLink