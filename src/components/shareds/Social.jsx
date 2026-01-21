import { IconButton, Stack } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from "framer-motion";
const Social = ({ marginTop }) => {
    return (
    <Stack spacing={1} direction="row" sx={{ marginTop: marginTop }}>

  <motion.div
    initial={{ x: -30, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    whileTap={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <IconButton
      sx={{
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#42414d",
          "& > svg": {
            opacity: 1,
          },
        },
      }}
      href="https://github.com/renatogastonruizgithub?tab=repositories"
      target="_blank"
    >
      <GitHubIcon sx={{ color: "#fff", opacity: ".7", fontSize: "2rem" }} />
    </IconButton>
  </motion.div>

  <motion.div
    initial={{ x: 30, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    whileTap={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 300,duration: 0.5, delay: 0.1  }}
  >
    <IconButton
      sx={{
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#42414d",
          "& > svg": {
            opacity: 1
          },
        },
      }}
      href="https://www.linkedin.com/in/renato-gaston-ruiz/"
      target="_blank"
    >
      <LinkedInIcon sx={{ color: "#fff", opacity: ".7", fontSize: "2rem" }} />
    </IconButton>
  </motion.div>

</Stack>

    )
}

export default Social