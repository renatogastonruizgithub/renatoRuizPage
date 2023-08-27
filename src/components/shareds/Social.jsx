import { IconButton, Stack } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const Social = ({ marginTop }) => {
    return (
        <Stack spacing={1} direction="row" sx={{ marginTop: marginTop }}>
            <IconButton sx={{
                transition: "background-color 0.3s ease",
                "&:hover": {
                    backgroundColor: "#42414d",
                    "& > svg": {
                        opacity: 1, // Cambiar la opacidad del icono 
                    },
                },
            }} >
                <GitHubIcon sx={{ color: "#fff", opacity: ".7 ", fontSize: "2rem" }} />
            </IconButton>
            <IconButton sx={{
                transition: "background-color 0.3s ease",
                "&:hover": {
                    backgroundColor: "#42414d",
                    "& > svg": {
                        opacity: 17
                    },
                },
            }}>
                <LinkedInIcon sx={{ color: "#fff", opacity: ".7 ", fontSize: "2rem" }} />
            </IconButton>
            {/*   <a href="https://www.linkedin.com/in/renato-gaston-ruiz/" target={"_blank"}> <i className="bi bi-linkedin"></i></a>

            <a href="https://github.com/renatogastonruizgithub" target={"_blank"}><i className="bi bi-github"></i></a> */}
        </Stack>
    )
}

export default Social